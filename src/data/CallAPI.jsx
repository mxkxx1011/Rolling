import axios from "axios";
import { useState, useEffect } from "react";

// const API_KEY =process.env.REACT_APP_API_KEY;
// REACT_APP_API_URL=https://rolling-api.vercel.app/7-4
const API_KEY = "https://rolling-api.vercel.app/7-4";
const File_Url = "https://rolling-api.vercel.app/profile-images/";

function Axios(Method, query, body="null") {
    const response = async() => {
        try {
            await axios({
                method: Method,
                url: query,
                body: body,
            })
        }
        catch(error) {
            console.log(error);
        }
    };
    return response;
}

// 내용물을 받을 body, 구별용 id, 어떤 요청을 보낼지 확인할 method 이렇게 3개면되낭?
// recipints는 내용물 리미트와 같은 다른 내용물도 처리할거 생각해야함


// 사용자 프로필 이미지 API
export function GetProfileImages() {
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(File_Url);
            }
            catch(error) {
                console.log(error);
            }
        };
        fetchImage();
    }, []);
    return ;
}

export function MessagesAPI(Method, id, body) {
    const query = `${API_KEY}/messages${id}/`;
    switch(Method) {
        case "get":
            return Axios(Method, query);
        case "put":
            return Axios(Method, query, body);
        case "patch":
            return Axios(Method, query, body);
        case "delete":
            Axios(Method, query);
            return "delete_success";
    }
}

export function RecipientsAPI(Method, id, body) {

}

export default GetBackImages