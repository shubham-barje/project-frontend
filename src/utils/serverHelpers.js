//helper file
import {backendUrl} from "./config"
// route --> Eg./body/song call test api from poatman or thunder-client 
export const makeUnauthenticatedPOSTRequest = async(route, body) => {
    //rote:/signup
    const response = await fetch(backendUrl+ route,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),
        })
        const formattedResponse = await response.json();
        return formattedResponse;
}

export const makeAuthenticatedPOSTRequest = async (route, body) => {
    //song/create
    const token = getToken();
    const response = await fetch(backendUrl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};


export const makeAuthenticatedGETRequest = async (route) => {
    const token = getToken();
    const response = await fetch(backendUrl + route, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};

const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};

