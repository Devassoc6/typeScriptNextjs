import axios, { AxiosRequestHeaders, AxiosResponse } from "axios"
// import { FIREBASE_AUTH } from "@/config/firebaseConfig";

// Define the props type for the function parameters
type PropsType = {
    url: string
}

// Define the function to be generic with T to specify the expected response type
export const axiosGet = async <T>({
    url,
}: PropsType): Promise<AxiosResponse<T>> => {
    // let currentUserToken;

    try {
        // currentUserToken = await FIREBASE_AUTH.currentUser.getIdToken(true);

        // Make the GET request with axios, expecting the response type T
        return await axios.get<T>(url)
    } catch (e) {
        console.log("Error at URL: ", url)
        console.log("Error in axiosGet: ", e)

        // Return a custom error object with status code 400
        throw new Error(`Failed to fetch data from ${url}`)
    }
}
