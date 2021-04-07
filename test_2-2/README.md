2-2. React app으로 Pie Chart를 구현. Data 파트를 서버로부터 전송받아, 변화하는 Pie Chart 구현.

- react-google-chart 라이브러리를 활용하여 Pie Chart를 구현.

- Node.js의 express를 사용하여 Chart data를 axios로 받아와 적용.(Chart data는 데이터베이스를 사용하지 않고 파일로 임시 저장)

- 개발환경에서 서버와 클라이언트 포트 충돌을 막기위해 proxy meddleware 활용.
