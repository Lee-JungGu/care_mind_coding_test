#2-3. React, React-redux, Redux로 로그인 상태 UI 구현.

- 서버에 User 파일을 만들고 회원가입을 통해 로그인할 수 있도록 임시 구현.

- 회원가입시 User 파일에 푸시된 정보를 가지고 로그인 했을때 유저 정보를 받아와 Mypage에 렌더링.

- bcrypt를 활용하여 비밀번호를 암호화 하였고 Json web token을 활용하여 토큰 생성.

- 로그인시 jwt을 로컬스토리지에 저장. 로컬스토리지에 토큰 유무에 따라 들어갈 수 있는 페이지 제한.

- 로그아웃시 로컬스토리지에 웹토큰 삭제, 로그인 페이지로 이동.

- Redux로 user action과 user reducer을 통해 state 활용.
