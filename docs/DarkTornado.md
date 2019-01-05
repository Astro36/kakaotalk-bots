# 바렛봇

## 제작

Dark Tornado

## 패키지명

[com.darktornado.kakaobot](https://play.google.com/store/apps/details?id=com.darktornado.kakaobot)

## 엔진

Rhino v1.7.9

## API

> 개발자님이 군대에 가신 관계로 상세한 API 문서를 작성하지 못했습니다.

Example:

```javascript
function response(room, message, sender, isGroupChat, replier) {
    if (room === "카카토옥 봇 개발 방" && message === "안녕") {
        replier.reply(room, "안녕하세요!");
    }
}
```

### function response(room: string, message: string, sender: string, isGroupChat: boolean, replier: ?, imageDb: ?)

메세지(message)가 왔을 떄 호출되는 함수입니다.

- `room`: 메시지가 수신된 방
- `message`: 수신한 메시지
- `sender`: 메시지를 전송한 사람의 이름
- `isGroupChat`: 그룹채팅 여부
- `replier`: 응답용 객체
  - `.reply(message: string, [room: string], [hideToast: boolean])`: 메세지 전송
- `imageDb`: 이미지를 저장해두는 객체
  - `.getProfileImage(): string`: 전송자의 프로필 이미지를 Base64로 인코딩하여 가져옴
  - `.getProfileBase64(): string`: 전송자의 프로필 이미지를 Base64로 인코딩하여 가져옴
