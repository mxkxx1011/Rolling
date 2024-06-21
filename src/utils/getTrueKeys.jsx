// obj: 객체
// {key1: true, key2: true} 일 때 value가 true인 키 값만 배열로 반환하는 함수
function getTrueKeys(obj) {
  return Object.keys(obj).filter((key) => obj[key]);
}

export default getTrueKeys;
