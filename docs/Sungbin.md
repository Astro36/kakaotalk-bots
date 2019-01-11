# 새카봇

## 제작

성빈

## 패키지명

[com.sungbin.kakaotalk.bot]()

## 엔진

Rhino 1.7.9

## API

### function response(room: string, message: string, sender: string, isGroupChat: boolean, replier: android.app.Notification.Action, imageDb: ImageDB)

메세지(message)가 왔을 떄 호출되는 함수입니다.

- `room`: 메시지가 수신된 방
- `message`: 수신한 메시지
- `sender`: 메시지를 전송한 사람의 이름
- `isGroupChat`: 단체 채팅방 여부
- `replier`: Notification.Action
- `imageDb`: 이미지를 저장해두는 객체
  - `.getProfileBase64(): string`: 전송자의 프로필 이미지를 Base64로 인코딩하여 가져옴

### Api.deleteHtml(html: string): string

HTML 태그들을 제거한 문자열을 반환합니다.

### Api.getHtml(url: string): string

주어진 주소의 사이트의 HTML을 반환합니다.

### Api.reply(room: string, message: string)

room이라는 이름을 가진 방으로 content라는 내용을 전송합니다.

### Api.replyShowAll(preview: string, moreview: string)

preview라는 텍스트 다음에 전체보기 버튼을 누르고 전체보기 내용으로 moreview를 작성하고 전송합니다.

### Api.replyShowAll(room: string, preview: string, moreview: string)

preview라는 텍스트 다음에 전체보기 버튼을 누르고 전체보기 내용으로 moreview를 작성하고 room이라는 이름을 가진 방으로 전송합니다.

### Api.translate(language: string, text: string): string

구글 번역기로 text라는 문장을 주어진 언어로 번역합니다.

### Clock.analog(): android.widget.AnalogClock

아날로그 시계를 반환합니다.

**주의: `android.widget.AnalogClock`은 API 23에서 DEPRECATED 되었습니다.**

### Clock.digtal(): android.widget.DigitalClock

디지털 시계를 반환합니다.

**주의: `android.widget.DigitalClock`은 API 17에서 DEPRECATED 되었습니다. android.widget.TextClock을 사용하세요.**

### Clock.text(): android.widget.TextClock

텍스트 시계를 반환합니다.

### Date.getNow(): string

현재 날짜를 반환합니다.

### DB.delete(name: string)

주어진 이름의 DB를 삭제합니다.

### DB.read(name: string): string?

주어진 이름의 DB를 반환합니다.

### DB.save(name: string, value: string)

주어진 이름의 DB에 값을 저장합니다.

### Device.getAndroidSDKVersion(): number

기기의 SDK 버전을 반환합니다.

### Device.getAndroidVersion(): number

기기의 안드로이드 버전을 반환합니다.

### Device.getBattey(): number

현재 남은 베터리 량을 반환합니다.

### Device.getIsCharging(): boolean

현재 충전 상태를 반환합니다.

### Device.getPhoneModel(): string

기기의 모델명을 반환합니다.

### Game.rcp(type: string)

가위바위보를 진행합니다

Example:

```javascript
Game.rcp("가위");
Game.rcp("바위");
Game.rcp("보");
```

### Time.getNow(): string

현재 시간을 반환합니다.

### Utils.makeNoti(title: string, content: string)

Notification을 생성합니다.

### Utils.makeToast(content: string)

Toast을 생성합니다.

### Utils.makeVibration(time: number)

time초 동안 진동을 울립니다.
