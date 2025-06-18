
import axios from "axios"
import { encryption, decryption } from "../crypto/Crypto.js"

export const commonFunction = async (method, url, data, headers) => {
    // Encrypt data for POST/PUT requests
    // console.log("encryptedData", data, url)
    // console.log("encryptedData", data, url === SSOUrl)
    const encryptedData =
        method !== "GET" ? { data: encryption(data) } : { ...data };
    let config = {
        method,
        url: url,
        data: encryptedData,
        headers: headers ? headers : { "Content-Type": "Application/Json" }
    }

    return await axios(config)
        .then((res) => {

            // console.log("res data", res)

            // Decrypt response data
            if (res.data) {
                try {
                    const decryptedData = decryption(res.data);
                    // console.log("decryptedData", decryptedData)
                    return { ...res, data: decryptedData };
                } catch (error) {
                    console.warn("Failed to decrypt response:", error);
                    return res; // Return original response if decryption fails
                }
            }
            return res;
        })
        .catch((err) => {
            console.error("Error: fetching error", err)
            // Try to decrypt error response if it exists
            if (err.response?.data) {
                try {
                    const decryptedError = decryption(err.response.data);
                    err.response.data = decryptedError;
                } catch (decryptError) {
                    console.warn("Failed to decrypt error response:", decryptError);
                }
            }
            return err;
        });
}