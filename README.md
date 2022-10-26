## Simple To-do list

### 프로젝트 소개
심플한 투두 리스트 프로젝트입니다.
- [프로젝트 배포 링크](https://todo-list-omega-smoky.vercel.app/)
<br>
  
### 프로젝트 실행 방법
```
$ yarn install
$ yarn start
```
<br>

### 프로젝트 주요 기능
- Login
- Join
- To-do CRUD
<br>

### 프로젝트 구조
<img width="293" alt="스크린샷 2022-10-26 오후 7 26 59" src="https://user-images.githubusercontent.com/73919235/198084918-269f1673-10d5-4d6a-85b8-44b6b51c447f.png">

### 코드 설명
#### pages
- Login / Join : 입력한 내용의 유효성 검사 통과 여부에 따라 useState와 useRef 훅으로 버튼의 상태를 관리했습니다.
- Main : 할 일의 완료 여부에 따라 구역을 나눠서 렌더링했습니다.

#### components
- Form / Todo : 할 일 입력 폼 부분과 할 일 카드를 컴포넌트로 분리했습니다.

#### server
- instance.js : Axios 객체를 만들었으며, 인터셉터를 사용해 인증 토큰을 관리했습니다.
- api.js : 앱에서 사용하는 API 요청을 한곳에 모아서 사용했습니다.
<br>
