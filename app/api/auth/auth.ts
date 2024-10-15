const metabotUrl = process.env.NEXT_PUBLIC_METABOT_URL;
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

    console.log('GET Request to:', `${metabotUrl}/auth/profile`);
    console.log('GET Request Headers:', {
      Authorization: `${key}:${authToken}`,
      "Content-Type": "application/json",
    });

    if (response.ok) {
      const res = await response.json();
      console.log('GET Response:', res); // Log the response data
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
  signMessage: (message: { message: string }) => Promise<string>,
  callback: (user: any, token: string) => void,
  onError: (error: string) => void,
  publicAddress: string
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

    console.log('POST Request to:', url);
    console.log('POST Request Body:', requestBody);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
      body: requestBody,
    });

    if (response.ok) {
      console.log('POST Response Status:', response.status);
      const res = await response.json();
      console.log('POST Response Data:', res);

      if (res.success === true) {
        const authToken = res.authToken;
        const userProfile = await fetchProfileData(authToken);

        callback(authToken, userProfile);
        modal.close();
      } else {
        onError("Failed to authenticate.");
        modal.close();
      }
    }
  } catch (error) {
    console.error('Error posting login-wallet data:', error);
    onError("Connection Declined");
    modal.close();
    throw error;
  }
};
