const fonts = {
  'Noto Sans': 'Noto Sans KR',
  Pretendard: 'Pretendard',
  나눔명조: 'NanumGothic',
  '나눔손글씨 손편지체': 'Handletter',
};

function getFonts(inputFont) {
  return fonts[inputFont] || fonts['Noto Sans'];
}

export default getFonts;
