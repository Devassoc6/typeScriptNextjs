import axios,{ AxiosRequestHeaders} from "axios";
// import { FIREBASE_AUTH } from "@/config/firebaseConfig";

type propsTypes = {
    url: string;
    token?: string;
    data?: string;
    headers?: AxiosRequestHeaders;
    params?: string;
};

// type propTypeCurrent = string;

export const axiosPost = async ({
    url,
    token,
    data,
    headers,
    params, 

}: propsTypes) => {
    // let currentUserToken: propTypeCurrent;

    try {
        // currentUserToken = await FIREBASE_AUTH.currentUser.getIdToken(true);

        return await axios.post(url, data, {
            params,
            headers: !token
                ? {
                      ...headers,
                  }
                : {
                      ...headers,
                    //   Authorization: currentUserToken,
                  },
        });
    } catch (e) {
        console.log("error at url: ", url);
        console.log("error at axiosPost: ", e);

        return {
            status: 400,
        };
    }
};
