import WebSocket from "isomorphic-ws";
import { EventEmitter } from "events";
import { nextTick } from "process";
const SOLANA_TRACKER_API_KEY = process.env
  .NEXT_PUBLIC_SOLANA_TRACKER_API_KEY as string;

interface WebsocketPoolChangeInfo {
  liquidity: {
    quote: number;
    usd: number;
  };
  price: {
    quote: number;
    usd: number;
  };
  tokenSupply: number;
  lpBurn: number;
  tokenAddress: string;
  marketCap: {
    quote: number;
    usd: number;
  };
  decimals: number;
  security: {
    freezeAuthority: string;
    mintAuthority: string;
  };
  quoteToken: string;
  market: string;
  deployer: string;
  lastUpdated: number;
  createdAt: number;
  poolId: string;
}

interface TokenTradeInfo {
  address: string;
  amount: number;
  token: {
    name: string;
    symbol: string;
    image: string;
    decimals: number;
  };
}
export interface WebsocketWalletTokenTradeInfo {
  tx: string;
  from: TokenTradeInfo;
  to: TokenTradeInfo;
  wallet: string;
  type: "buy" | "sell";
  time: number;
  price: {
    quote: number;
    usd: number;
  };
  volume: {
    usd: number;
    sol: number;
  };
  program: string;
  pools: string[];
  quoteToken: string;
  market: string;
  deployer: string;
  lastUpdated: number;
  createdAt: number;
  poolId: string;
}

export class SolanaTrackerWebsocketService {
  wsUrl: string;
  socket: WebSocket | null;
  reconnectAttempts: number;
  reconnectDelay: number;
  reconnectDelayMax: number;
  randomizationFactor: number;
  emitter: EventEmitter;
  subscribedRooms: Set<string>;
  transactions: Set<unknown>;
  latestTokens: Set<unknown>;
  graduatingTokens: Set<unknown>;
  graduatedTokens: Set<unknown>;
  trades: Map<string, unknown>;
  connectionPromise: Promise<void> | null;
  isShuttingDown: boolean;
  txHashes: Set<string>;
  pendingRoomJoins: string[];
  price: number;

  constructor(
    wsUrl: string = "wss://datastream.solanatracker.io/71932016-e5d8-4d9a-adc8-ed85c6077a97"
  ) {
    this.wsUrl = wsUrl;
    this.socket = null;
    this.reconnectAttempts = 0;
    this.reconnectDelay = 2500;
    this.reconnectDelayMax = 4500;
    this.randomizationFactor = 0.5;
    this.emitter = new EventEmitter();
    this.subscribedRooms = new Set();
    this.transactions = new Set();
    this.txHashes = new Set();
    this.latestTokens = new Set();
    this.graduatingTokens = new Set();
    this.graduatedTokens = new Set();
    this.trades = new Map();
    this.connectionPromise = null;
    this.pendingRoomJoins = [];
    this.connect();
    this.isShuttingDown = false;
    this.setupShutdownHandlers();
    this.subscribeToLatestTokensCreated();
    this.subscribeToGraduating();
    this.subscribeToGraduated();
    this.price = 0;
  }

  async connect() {
    if (this.connectionPromise) {
      return this.connectionPromise;
    }

    this.connectionPromise = new Promise<void>((resolve, reject) => {
      try {
        this.socket = new WebSocket(
          `${this.wsUrl}?billingToken=${SOLANA_TRACKER_API_KEY}`
        );
        this.setupSocketListeners(this.socket, "solana", resolve, reject);
      } catch (e) {
        console.error("Error connecting to WebSocket:", e);
        this.reconnect();
        reject(e);
      }
    });

    return this.connectionPromise;
  }

  setupSocketListeners(
    socket: WebSocket,
    type: string,
    resolve: () => void,
    reject: (reason?: any) => void
  ) {
    socket.onopen = () => {
      this.reconnectAttempts = 0;
      resolve();
      this.processPendingRoomJoins();
    };

    socket.onclose = (event) => {
      console.log(`Disconnected from ${type} WebSocket server`);
      if (type === "solana") this.socket = null;
      this.connectionPromise = null;
      this.reconnect();
      reject(new Error("WebSocket connection closed"));
    };

    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data as string);
        if (message.type === "message") {
          if (message.data?.tx && this.transactions.has(message.data.tx)) {
            return;
          } else if (message.data?.tx) {
            this.transactions.add(message.data.tx);
          }
          this.emitter.emit(message.room, message.data);
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };
  }

  private async subscribeToLatestTokensCreated() {
    try {
      const topic = "latest";
      await this.joinRoom(topic);
      this.on("latest", (data: any) => {
        if (!this.latestTokens.has(data.token.mint)) {
          if (!this.latestTokens.has(data.token.mint)) {
            this.latestTokens.add(data.token.mint);
            // console.log("New token data received:", data);

            nextTick(() => this.emitter.emit("latestTokensUpdated", data));
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  private async subscribeToGraduating() {
    try {
      const topic = "graduating";
      await this.joinRoom(topic);
      this.on("graduating", (data: any) => {
        if (!this.graduatingTokens.has(data.token.mint)) {
          this.graduatingTokens.add(data.token.mint);
          nextTick(() => this.emitter.emit("graduatingTokensUpdated", data));
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  private async subscribeToGraduated() {
    try {
      const topic = "graduated";
      await this.joinRoom(topic);
      this.on("graduated", (data: any) => {
        if (!this.graduatedTokens.has(data.token.mint)) {
          this.graduatedTokens.add(data.token.mint);
          // console.log("New token data received:", data);
          nextTick(() => this.emitter.emit("graduatedTokensUpdated", data));
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async subscribeToTokenTrades(room: string) {
    try {
      await this.joinRoom(room);
      this.on(room, (data: any) => {
        if (Array.isArray(data)) {
          for (const trade of data) {
            if (trade && !this.trades.has(trade.tx)) {
              this.trades.set(trade.tx, Date.now());
              // setTimeout(() => this.emitter.emit(`${room}:id`, trade), 5000);
              nextTick(() => this.emitter.emit(`${room}:id`, trade));
            }
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async subscribeToPriceUpdate(poolId: string) {
    try {
      const room = `price:${poolId}`;
      this.joinRoom(room);
      this.on(room, (data: any) => {
        if (data?.price !== this.price) {
          this.price = data?.price;
          nextTick(() => this.emitter.emit(`price`, data));
        }

        // setTimeout(() => , 5000);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async joinRoom(room: string) {
    try {
      await this.ensureConnection();

      if (this.subscribedRooms.has(room)) {
        console.log(`Already joined room: ${room}`);
        return;
      }

      const socket = this.socket;
      if (socket && socket.readyState === WebSocket.OPEN) {
        console.log("Sending join request to socket", room);
        socket.send(JSON.stringify({ type: "join", room }));
        this.subscribedRooms.add(room);
      } else {
        this.pendingRoomJoins.push(room);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async ensureConnection() {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      await this.connect();
    }
  }

  processPendingRoomJoins() {
    while (this.pendingRoomJoins.length > 0) {
      const room = this.pendingRoomJoins.shift();
      if (room) {
        this.joinRoom(room);
      }
    }
  }

  leaveRoom(room: string) {
    const roomDeleted = this.subscribedRooms.delete(room);
    const socket = this.socket;
    if (socket && socket.readyState === WebSocket.OPEN && roomDeleted) {
      socket.send(JSON.stringify({ type: "leave", room }));
    }
  }

  on(room: string, listener: (...args: any[]) => void) {
    this.emitter.on(room, listener);
  }

  off(room: string, listener: (...args: any[]) => void) {
    this.emitter.off(room, listener);
  }

  getSocket() {
    return this.socket;
  }
  private setupShutdownHandlers() {
    process.on("uncaughtException", async (err, origin) => {
      const message =
        `Caught exception ${err.name}: ${err.message}\n at ${err.stack}` +
        `Exception origin: ${origin}\n`;
    });
    process.on("unhandledRejection", async (reason, promise) => {
      console.error("Unhandled Rejection at:", promise, "reason:", reason);
    });
  }

  private async gracefulShutdown(signal: string) {
    console.log(`Received ${signal}. Starting graceful shutdown...`);
    // if (this.isShuttingDown) {
    //   return;
    // }
    // this.isShuttingDown = true;
    // console.log(`Received ${signal}. Starting graceful shutdown...`);
    // telegram.sendGroupMessage(
    //   JSON.stringify(`Received ${signal}. Starting graceful shutdown...`)
    // );
    // // Close WebSocket connection
    // await this.disconnect();
    // // Perform any other cleanup tasks here
    // console.log("Graceful shutdown completed.");
    // process.exit(0);
  }

  async disconnect() {
    return new Promise<void>((resolve) => {
      if (this.socket) {
        console.log("Closing WebSocket connection...");
        this.socket.onclose = () => {
          console.log("WebSocket connection closed.");
          this.socket = null;
          resolve();
        };
        this.socket.close();
      } else {
        console.log("No active WebSocket connection to close.");
        resolve();
      }
      this.subscribedRooms.clear();
      this.transactions.clear();
    });
  }

  reconnect() {
    console.log("Reconnecting to WebSocket server");
    const delay = Math.min(
      this.reconnectDelay * Math.pow(2, this.reconnectAttempts),
      this.reconnectDelayMax
    );
    const jitter = delay * this.randomizationFactor;
    const reconnectDelay = delay + Math.random() * jitter;
    setTimeout(() => {
      this.reconnectAttempts++;
      this.connect();
    }, reconnectDelay);
  }
}

const solanaTrackerWebsocket = new SolanaTrackerWebsocketService();
export default solanaTrackerWebsocket; 