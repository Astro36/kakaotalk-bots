# 수용봇

## 제작

PERK(개발자: 수용)

[https://github.com/Su-Yong/NewKakaoBot](https://github.com/Su-Yong/NewKakaoBot)

## 패키지명

[com.suyong.kakaobot](https://play.google.com/store/apps/details?id=com.suyong.kakaobot)

## 엔진

Rhino v1.7.7.2

## API

### funciton catchMessage(room: string, sender: string, message: string)

메세지(message)가 왔을 떄 호출되는 함수입니다.

### Bot.initData(key: string, value: string)

주어진 키(key)에 해당하는 저장소를 만들고 값(value)을 집어넣습니다.

### Bot.getContext(): android.content.Context

### Bot.getDataList(): Object

### Bot.send(room: string, message: string)

주어진 방(room)으로 메세지(message)를 보냅니다.

### Bot.saveData(key: string, value: string)

주어진 키(key)에 값(value)을 집어넣습니다.

### Bot.readData(key: string)

주어진 키(key)에 해당하는 값을 반환합니다.

### Util.delay(function(isSuccess: boolean), ms: number)

주어진 시간(ms: 밀리초)동안 쉬었다가 function을 실행합니다. isSuccess을 통해 성공여부를 확인할 수 있습니다.

### Util.log(title: string, message: string)

### Util.parseToHtml(url: string, option: string, function(data: string, error))

웹사이트의 DOM을 파싱하여 HTML로 가져옵니다.

### Util.parseToText(url: string, option: string, function(data: string, error: java.io.IOException))

웹사이트의 DOM을 파싱하여 문자열로 가져옵니다.
