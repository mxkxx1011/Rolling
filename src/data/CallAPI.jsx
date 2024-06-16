import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_URL;
//6-1
// 오류함수 메소드랑 무슨api

function ErrorCheck(Method, ApiName) {
  let errorMessage;

  switch(Method) {
      case "get":
          errorMessage = `${ApiName}의 데이터를 받아오는데 실패하였습니다.`;
          break;
      case "put":
          errorMessage = `${ApiName}의 데이터 수정에 실패하였습니다.`;
          break;
      case "post":
          errorMessage = `${ApiName}에 데이터를 전송에 실패하였습니다.`;
          break;
      case "patch":
          errorMessage = `${ApiName}의 데이터 수정에 실패하였습니다.`;
          // 이부분이 put이랑 동일하게 작동하는 것 같습니다.
          break;
      case "delete":
          errorMessage = `${ApiName}의 데이터를 받지 못했습니다.`;
          break;
      default:
          errorMessage = "api호출에 실패했습니다.";
          // 스위키기본 구문에 디폴트가 없으면 경고문이 떠서 추가한 내용입니다.
          break;
    }
    return errorMessage;
}

async function Axios(Method, query, body = 'null', apiname) {
  try {
    console.log(query);
    const response = await axios({
      method: Method,
      url: query,
      data: body !== 'null' ? body : undefined,
    });
    return response.data;
  } catch (error) {
    ErrorCheck(Method, apiname);
    console.log(ErrorCheck(Method, apiname));
    throw error;
  }
}
// 내용물을 받을 body, 구별용 id, 어떤 요청을 보낼지 확인할 method 이렇게 3개면되낭?
// recipints는 내용물 리미트와 같은 다른 내용물도 처리할거 생각해야함

//작성된 롤링페이퍼 내부의 메시지를 가져오는 API
export function MessagesAPI(Method, id, body = null) {
  const query = `${API_KEY}/messages/${id}/`;
  // 메소드, 쿼리, 바디, api
  return Axios(Method, query, body, "messages");
}

//롤링페이퍼 작성 및 조회 API
//특정 롤링페이퍼 조회 및 삭제하는 API
export function RecipientsAPI(Method, id = null, body = null, limit=null, offset=null) {
  let query = `${API_KEY}/recipients/`;
  if (id) {
    query = `${query}${id}/`;
  }
  else if(limit && offset) {
    query = `${query}/?limit=${limit}&offset=${offset}`;
  }
  return Axios(Method, query, body, "recipient");
}

//특정 롤링페이퍼의 메시지 조회 및 추가 API
export function RecipientsMessagesAPI(Method, id, body, limit = 5, offset = 1) {
  const query = `${API_KEY}/recipients/${id}/messages/?limit=${limit}&offset=${offset}`;
  return Axios(Method, query, body);

}

//특정 롤링페이퍼의 이모지 조회 및 추가 API
export function RecipientsReactionsAPI(Method, id, body) {
  const query = `${API_KEY}/recipients/${id}/reactions/`;
  return Axios(Method, query, body, "recipientreaction");
}
