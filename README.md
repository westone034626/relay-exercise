# Usage

- prerequisites: relay 기준을 충족하는 graphql server

1. yarn
2. yarn updateSchema
3. yarn relay
4. yarn start

# 삽집 정리

1. relay.config.js의 language를 typescript로 입력해놔서 신경 안쓰고 있었는데 package.json의 relay > language는 javascript로 되어있었어서 에러 발생했던 문제
2. fetchGraphQL에서 header 값 설정 안해줘서 데이터 fetch 계속 실패하던 문제
3. package.json의 homepage 입력을 안해놔서 가상 node에서 ./build 폴더 내부의 main.js 파일에 접근할 때 잘못된 접근 경로로 설정된 문제
