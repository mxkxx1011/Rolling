import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_URL;
//6-1
// 오류함수 메소드랑 무슨api

function ErrorCheck(Method, ApiName) {
  const errorMessage = {
    get: `${ApiName}의 데이터를 받아오는데 실패하였습니다.`,
    put: `${ApiName}의 데이터 수정에 실패하였습니다.`,
    post: `${ApiName}에 데이터를 전송하는데 실패하였습니다.`,
    patch: `${ApiName}의 데이터 수정에 실패하였습니다.`,
    delete: `${ApiName}의 데이터 삭제에 실패하였습니다.`,
  };
  return errorMessage[Method] || `알 수 없는 에러가 발생하였습니다.;`;
}

async function Axios(Method, query, body = 'null', apiname) {
  try {
    const response = await axios({
      method: Method,
      url: query,
      data: body !== 'null' ? body : undefined,
    });
    return response.data;
  } catch (error) {
    console.log(ErrorCheck(Method, apiname));
    throw error;
  }
}

//작성된 롤링페이퍼 내부의 메시지를 가져오는 API
export function MessagesAPI(Method, id, body = null) {
  const query = `${API_KEY}/messages/${id}/`;
  // 메소드, 쿼리, 바디, api
  return Axios(Method, query, body, 'messages');
}

//롤링페이퍼 작성 및 조회 API
//특정 롤링페이퍼 조회 및 삭제하는 API
export function RecipientsAPI(
  Method,
  id = null,
  body = null,
  limit = 9999,
  offset = null,
) {
  let query = `${API_KEY}/recipients/`;

  if (id) {
    query = `${query}${id}/`;
  } else if(!body) {
    query = `${query}?limit=${limit}`;
    if (limit !== 9999 && offset != null) {
    query = `${query}&offset=${offset}`;
  }
}

  console.log(query);

  return Axios(Method, query, body, 'recipient');
}

//특정 롤링페이퍼의 메시지 조회 및 추가 API
export function RecipientsMessagesAPI(Method, id, body, limit = 5, offset = 0) {
  const query = `${API_KEY}/recipients/${id}/messages/?limit=${limit}&offset=${offset}`;
  return Axios(Method, query, body, 'recipient-messages');
}

//특정 롤링페이퍼의 이모지 조회 및 추가 API
export function RecipientsReactionsAPI(Method, id, body, limit = 0) {
  let query = `${API_KEY}/recipients/${id}/reactions/`;
  if (limit > 0) {
    query = `${query}?limit=${limit}`;
  }
  return Axios(Method, query, body, 'recipientreaction');
}
