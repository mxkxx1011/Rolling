import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_URL;
//6-1 
function Axios(Method, query, body=null) {
    const [datatest, setDatatest] = useState([]);
    const fetchData = async() => {
        try {
            const response = await axios({
                method: Method,
                url: query,
                data: body !== null ? body : undefined,
            });
            setDatatest(response.data);
        }
        catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])
    return datatest;
}
// 내용물을 받을 body, 구별용 id, 어떤 요청을 보낼지 확인할 method 이렇게 3개면되낭?
// recipints는 내용물 리미트와 같은 다른 내용물도 처리할거 생각해야함

//작성된 롤링페이퍼 내부의 메시지를 가져오는 API
export function MessagesAPI(Method, id, body=null) {
    const query = `${API_KEY}/messages/${id}/`;
    return Axios(Method, query, body);
}

//롤링페이퍼 작성 및 조회 API
//특정 롤링페이퍼 조회 및 삭제하는 API
export function RecipientsAPI(Method, id=null, body=null) {
    let query = `${API_KEY}/recipients/`;
    if (id) {
        query = `${query}/${id}/`;
    }
    return Axios(Method, query, body);
}

//특정 롤링페이퍼의 메시지 조회 및 추가 API
export function RecipientsMessagesAPI(Method, id, body) {
    const query = `${API_KEY}/recipients/${id}/messages/`;
    return Axios(Method, query, body);
}

//특정 롤링페이퍼의 이모지 조회 및 추가 API
export function RecipientsReactionsAPI(Method, id, body) {
    const query = `${API_KEY}/recipients/${id}/reactions/`;
    return Axios(Method, query, body);
}
