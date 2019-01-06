# 바렛봇

## 제작

Violet XF

## 패키지명

[com.xfl.kakaotalkbot](https://play.google.com/store/apps/details?id=com.xfl.kakaotalkbot)

## 엔진

Rhino v1.7.9

## API

Example:

```javascript
function response(message, room, sender, replier, imageDb) {
    if (room === "카카토옥 봇 개발 방" && message === "안녕") {
        replier.reply(room, "안녕하세요!");
    }
}
```

### function response(message: string, room: string, sender: string, replier: SessionCacheRepiler, imageDb: ImageDB)

메세지(message)가 왔을 떄 호출되는 함수입니다.

- `message`: 수신한 메시지
- `room`: 메시지가 수신된 방
- `sender`: 메시지를 전송한 사람의 이름
- `replier`: 응답용 객체
  - `.reply(message: string, [room: string], [hideToast: boolean])`: 메세지 전송
- `imageDb`: 이미지를 저장해두는 객체
  - `.getProfileImage(): string`: 전송자의 프로필 이미지를 Base64로 인코딩하여 가져옴
  - `.getProfileBase64(): string`: 전송자의 프로필 이미지를 Base64로 인코딩하여 가져옴

**`통합된 매개변수` 옵션을 켜면, 아래와 같이 사용하실 수 있습니다.**

Example:

```javascript
function response(args) {
    if (args.room === "카카토옥 봇 개발 방" && args.message === "안녕") {
        args.replier.reply(args.room, "안녕하세요!");
    }
}
```

### Api.getContext(): android.content.Context

현재 Context를 가져옴

### Api.getScriptNames(): Array

봇 폴더에 있는 스크립트들의 이름을 배열의 형태로 불러옴

### Api.off()

모든 스크립트의 스위치를 끔

### Api.off(name: string)

특정 스크립트의 스위치를 끔

Example:

```javascript
Api.off("스크립트이름.js");
```

### Api.on()

모든 스크립트의 스위치를 켬

### Api.on(name: string)

특정 스크립트의 스위치를 켬

Example:

```javascript
Api.on("스크립트이름.js");
```

### Api.papagoTranslate(from: string, to: string, text: string): string

파파고 번역 API를 사용함

### Api.reload()

모든 스크립트를 리로드(재컴파일)함

### Api.reload(name: string)

특정 스크립트를 리로드함

Example:

```javascript
Api.reload("스크립트이름.js");
```

### Api.replyRoom(room: string, msg: string, hideText: boolean)

해당 방에 메시지 전송, hideText가 true일 경우 방의 세션이 없을때 토스트 알림을 띄우지 않음

### Api.UIThread(function(), [function(error, result)])

UIThread에서 함수 실행. onComplete는 선택적이고, func의 실행이 완료되면 호출됨.
error는 func에서 오류가 발생했을시 주어지는 Throwable, result는 정상 실행시 return 값

### Utils.getWebText(url: string): string

웹사이트에서 HTML을 가져옴
