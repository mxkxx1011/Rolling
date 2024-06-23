# 🤘온라인 롤링페이퍼 플랫폼 Rolling
![최종이미지](https://github.com/mxkxx1011/Rolling/assets/100355178/3e5f699f-f66b-4c53-9cbb-f8c287b491cb)
배포 URL : https://rocknrolling.netlify.app/

목차
1. [프로젝트 소개](#1.-프로젝트-소개)
2. [팀원 소개 및 역할 분담](#2.-팀원-소개-및-역할-분담)
3. [채택한 기술 & 브랜치 전략](#3.-채택한-기술-&-브랜치-전략)
4. [프로젝트 구조](#4.-프로젝트-구조)
5. [프로젝트 일정](#5.-프로젝트-일정)
6. [페이지별 시연 및 기능 설명](#6.-페이지별-시연-및-기능-설명)
7. [프로젝트 이슈](#7.-프로젝트-이슈)
8. [개선 사항 (추가 기능)](#8.-개선-사항-(추가-기능))
9. [프로젝트 후기](9.-프로젝트-후기)


## 1. 프로젝트 소개
- 추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 플랫폼인 '롤링' 서비스입니다.
- 롤링페이퍼를 만들고 친구에게 공유할 수 있습니다.
- 친구의 롤링페이퍼에 반응과 메세지를 남길 수 있습니다.

### 팀 규칙

🕓 **코어 타임: PM 2:00 - PM 6:00** 

(안 되는 날이 있을 경우 최소 하루 전까지 말해주기)

🕓 **스크럼 시간: PM 2:00**

최대 15분 이내 마치기
- 지난 데일리 스크럼부터 지금까지 내가 완수한 사항
- 다음 데일리 스크럼까지 내가 완수해야하는 사항
- 현재 장애가 되고 있는 (곤란하고 어려운 것) 사항

### 개발환경

- Front : `HTML, React, SCSS`
- Back-end : 제공된 `API` 활용
- 버전 및 이슈관리 : `Github, Github Project`
- 협업 툴 : `Discord, Notion, Github, Git`
- 서비스 배포 환경 : `Netlify`
- 디자인 : [`Figma 디자인](https://www.figma.com/file/cbZ9PNKSFg4mS7Lf1roZlp/AAA---%E1%84%85%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%86%BC?type=design&node-id=0%3A1&mode=design&t=HhPJMSdq5WMlY0wk-1)`
    
    ### 컨벤션 🔗
    
    - [브랜치 전략](https://github.com/mxkxx1011/Rolling/wiki/%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5-%E2%80%90-github-flow)
    - [코드 컨벤션](https://github.com/mxkxx1011/Rolling/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)
    - [커밋 컨벤션](https://github.com/mxkxx1011/Rolling/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

<br>

## 2. 팀원 소개 및 역할 분담

![민경](https://github.com/mxkxx1011/Rolling/assets/100355178/3fd27118-bf0e-409a-9b55-ee7e94e7b672)

### 😎 최민경 (팀장)

- 페이지
    - 롤링페이퍼 메시지 list 페이지 (/post/id, /post/id/edit 페이지)
- 컴포넌트
    - 카드, 카드리스트, 옵션, 스켈레톤(카드, 카드리스트) 컴포넌트
- 기능
    - 메시지 리스트 무한스크롤 적용
    - 페이지 삭제, 선택 삭제, 전체 선택 삭제
    - 이모지 post 요청 기능
    - 카카오톡 공유, URL copy
- 역할
    - 깃허브 관리, 배포, 초기 세팅(컬러, 폰트), 코드리뷰를 통한 개선사항 논의


![광호인](https://github.com/mxkxx1011/Rolling/assets/100355178/bbb57c9c-6a86-4162-92d6-7231b88ee376)

### 🥔 김광호 (팀원)

- 페이지
    - 롤링페이퍼 list 페이지 (/list 페이지)
- 컴포넌트
    - 텍스트필드, 드롭다운 컴포넌트
- 기능
    - 통합 API 함수 작성
        - 공통 Axios 함수 작성
        - Recipient, Message, Reaction API 작성
        - API 에러처리
    - 카드 리스트 컴포넌트 캐러셀 형식 구현
- 역할
    - 발표


![재현님](https://github.com/mxkxx1011/Rolling/assets/100355178/bd8d8450-1f53-4b4c-bd11-42f52fb96b40)

### 😆 박재현 (팀원)

- 페이지
    - 롤링페이퍼 메시지 작성 페이지 (/post/id/message 페이지)
- 컴포넌트
    - 헤더, 라벨, 에러메시지 컴포넌트
- 기능
    - input 유효성 검사 및 에러 처리
    - 무작위 이름 생성 기능 추가
    - 텍스트 에디터 모듈 폰트 색상 선택 기능 추가
    - 메시지 추가 post 요청
- 역할
    - 코드리뷰를 통한 개선사항 논의
    - git 브랜치 전략 정리
    - 프로젝트 계획 수립


![소영님](https://github.com/mxkxx1011/Rolling/assets/100355178/59f09d98-52cf-4722-becd-e5f68535cc5c)

### 🤩 오소영 (팀원)

- 페이지
    - 롤링페이퍼 작성 페이지 (/post 페이지)
- 컴포넌트
    - 모달, 토스트, 뱃지 컴포넌트
- 기능
    - input 유효성 검사 및 에러 처리
    - 롤링페이퍼 추가 post 요청 기능
    - 토글 버튼에 따른 옵션 이미지 불러오기
    - 배경 이미지 랜덤 버튼 추가
- 역할
    - 디자인 담당


![한주님](https://github.com/mxkxx1011/Rolling/assets/100355178/cb14a112-7f98-4e89-bdd2-f13813646517)


### 😵‍💫 정한주 (팀원)

- 페이지
    - 랜딩 페이지 (/ 페이지)
- 컴포넌트
    - 기본 버튼
    - 화살표, 휴지통, 플러스 버튼
    - 버튼 토글 컴포넌트
- 기능
    - 카드리스트 hover 애니메이션 추가


<br>

## 3. 채택한 기술 & 브랜치 전략
### SCSS

- nesting(중첩)을 통해 HTML 구조와 유사한 방식으로 스타일을작성할 수 있는 scss를 선택했습니다.
- scss의 장점
    - 변수를 사용하여 색상, 폰트 크기, 간격 등의 값을 저장하고 재사용할 수 있습니다.
    - 반복되는 CSS 코드 조각을 믹스인으로 정의하고 필요할 때마다 호출하여 사용할 수 있습니다
    - 조건, 반복문 및 연산 기능을 제공해 복잡한 스타일 규칙을 간단하게 정의할 수 있습니다.

### eslint, prettier

- 코드 스타일에 대한 일관성을 쉽게 유지하고 스타일 컨벤션을 자동적으로 관리하기 위해 eslint와 prettier를 사용했습니다.
- 기타 컨벤션은 [코드 컨벤션](https://github.com/mxkxx1011/Rolling/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98)을 참고했습니다.

### 브랜치 전략

- github flow를 기반으로 개발에는 develop과 feature브랜치를 사용했습니다.
- **main** : 배포단계에서 사용하는 브랜치로, 작업이 끝난 후 develop에서 main으로 머지합니다
- **develop** : 개발단계에서 main 브랜치의 역할을 하는 브랜치로 항상 최신 내역을 유지하고 있으며, feature 브랜치로부터 작업이 끝나서 코드리뷰를 마친 pr은 develop으로 머지합니다.
- **feature** : 특정 기능을 개발하기 위한 브랜치로 develop으로 부터 분기하여 사용해, 개발 과정에서 다른 기능이나 버그 수정 작업과 충돌 없이 개발을 진행하도록 했습니다.

## 4. 프로젝트 구조
```
📦Rolling
 ┣ 📂node_modules
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂images
 ┃ ┃ ┗ 📂styles
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┣ 📂option
 ┃ ┃ ┣ ...
 ┃ ┣ 📂constants
 ┃ ┣ 📂context
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜CallAPI.jsx
 ┃ ┣ 📂hooks
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┣ 📂list
 ┃ ┃ ┣ 📂message
 ┃ ┃ ┣ 📂postmessage
 ┃ ┃ ┣ 📂postpage
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┗ 📜NotFoundPage.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜FormatDate.jsx
 ┃ ┃ ┣ 📜Scroll.jsx
 ┃ ┃ ┣ ...
 ┃ ┣ 📜App.jsx
 ┃ ┗ 📜index.jsx
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc.json
 ┣ 📜jsconfig.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

## 5. 프로젝트 일정
- 6/7 주제 선정
- 6/8 - 6/9 상세 분석 및 컨벤션 수립
- 6/10 폴더 구조 컨벤션 수립
- 6/10 - 6/12 R&R 분배 및 컴포넌트 구현
- 6/12 - 6/14 웹 페이지 기본 퍼블리싱 구현 및 1차 점검
- 6/15 - 6/18 페이지 기본 기능 완성 및 2차 점검
- 6/19 - 6/21 추가 기능 구현 및 3차 점검
- 6/22 리팩토링
- 6/23 발표 자료 제작 및 최종 배포

## 6. 페이지별 시연 및 기능 설명

### [메인페이지]
![메인 페이지](https://github.com/mxkxx1011/Rolling/assets/100355178/6eb3e19e-80ab-42ba-8936-2061276e17b8)


### [롤링페이퍼 리스트 페이지]


## 7. 프로젝트 이슈

## 8. 개선 사항 (추가 기능)

## 9. 프로젝트 후기 

### 최민경
### 김광호
### 박재현
### 오소영
### 정한주
