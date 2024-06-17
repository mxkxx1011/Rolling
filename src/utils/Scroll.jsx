/**
 * 스크롤을 방지하고 현재 위치를 반환한다.
 * @returns {number} 현재 스크롤 위치
 */
export const preventScroll = () => {
  const currentScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${currentScrollY}px`;
  document.body.style.overflowY = 'scroll';
  return currentScrollY;
};

/**
 * 특정 요소에 스크롤을 허용하고, 스크롤 방지 함수에서 반환된 위치로 이동한다.
 * @param {Element} element 스크롤을 허용할 요소
 * @param {number} prevScrollY 스크롤 방지 함수에서 반환된 스크롤 위치
 */
export const allowScroll = (prevScrollY) => {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  document.body.style.overflowY = '';
  document.body.scrollTo(0, prevScrollY);
};

// 함수가 두가지라 그냥 함수 앞에 export 붙임!
