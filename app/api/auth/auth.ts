const metabotUrl = process.env.NEXT_PUBLIC_METABOT_URL as string;
const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
import { modal } from '@/context/index';

export const fetchProfileData = async (authToken: string) => {
  try {
    const response = await fetch(`${metabotUrl}/auth/profile`, {
      method: 'GET',
      headers: {
        Authorization: `${key}:${authToken}`,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });

    if (response.ok) {
      const res = await response.json();
      return res.data;
    } else {
      throw new Error("failed to fetch user profile");
    }
  } catch (error) {
    console.error('Error fetching profile data:', error);
    modal.close();
    throw error;
  }
};

export const postLoginWallet = async (
  publicAddress: string,
  signMessage: (message: { message: string }) => Promise<string>,
  callback: (user: any, token: string) => void,
  onError: (error: string) => void,
) => {
  if (!publicAddress) {
    console.log("No address found");
    throw new Error("No public address provided.");
  }

  try {
    const message = Date.now().toString();
    const signature = await signMessage({ message });

    const url = `${metabotUrl}/auth/login-wallet`;

    const requestBody = JSON.stringify({
      message,
      signature,
      publicAddress,
    });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `${key}`,
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    if (response.ok) {
      const res = await response.json();
      if (res.success === true) {
        const token = res.authToken;
        const user = await fetchProfileData(token);
      
        callback(user, token);
      } else {
        onError("Failed to authenticate.");
        modal.close();
      }
    } else {
      console.error('Failed to authenticate.')
      onError("Failed to authenticate.");
      modal.close();
    }
  } catch (error) {
    console.error('Error posting login-wallet data:', error);
    onError("Connection Declined");
    modal.close();
  }
};
