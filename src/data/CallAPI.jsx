import axios from "axios";
import { useState, useEffect } from "react";

// const API_KEY =process.env.REACT_APP_API_KEY;
// REACT_APP_API_URL=https://rolling-api.vercel.app/7-4
const API_KEY = "https://rolling-api.vercel.app/7-4";
const File_Url = "https://rolling-api.vercel.app/profile-images/";

function Axios(Method, query) {
    const response = async() => {
        try {
            await axios({
                method: Method,
                url: query,
            })
        }
        catch(error) {
            // switch(error) {
            //     case 
            // }
            console.log(error);
        }

    };
}

// 사용자 프로필 이미지 API
export function GetProfileImages() {
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(File_Url);
                // setGetImg(response.data.imageUrls);
            }
            catch(error) {
                console.log(error);
            }
        };
        fetchImage();
    }, []);
    return ;
}

export async function GetProFileImages() {
    console.log(API_KEY);
    const query = `${API_KEY}/messages/`;
    //https://rolling-api.vercel.app/7-4/background-images/
    console.log(query);
    await axios.get(query)
    .then(resoponse => {
        console.log(resoponse.data);
    })
    .catch(error => {
        console.log(error);
    })
}

export function MessagesAPI(name, data ,id) {

}

export default GetBackImages