# 젤브봇

## 제작

JellBreak

## 패키지명

[be.zvz.newskbot](https://play.google.com/store/apps/details?id=be.zvz.newskbot)

## 엔진

Rhino 1.7.11

## API

> 최적화 모드를 사용하면 [Closure Compiler](https://developers.google.com/closure/compiler/)가 활송화되어 ES6 문법을 사용할 수 있습니다.

Example:

```javascript
EventManager.getRegister().registerResponse(function (room, message) {
    if (room === "카카토옥 봇 개발 방" && message === "안녕") {
        Api.replyRoom(room, "안녕하세요!");
    }
});
```

### Api.allClearList()

### Api.clearMessageList(): boolean

### Api.gc()

### Api.getContext(): android.content.Context

### Api.getDate(): string

### Api.getMessageList(): Array

### Api.getRoomList(): Array

### Api.getRoomMessageList(room: string): Array

### Api.getRoomSenderMessageList(room: string, sender: string): Array

### Api.getRootView(): android.view.View

### Api.getSenderMessageList(sender: string): Array

### Api.getSessionList(): Array

### Api.listAllClear()

### Api.logger(log: string)

### Api.papagoTranslate(source: string, target: string, text: string, debug: boolean): string

### Api.reload()

### Api.replyRoom(room: string, message: string)

### Api.runFinalization()

### Api.translate(source: string, target: string, text: string, debug: boolean): string

### DateBase.get(key: string)

### DateBase.getDBManager(): io.paperdb.Book

### DateBase.getRawDataBase(key: string): string

### DateBase.removeDataBase(key: string)

### DateBase.set(key: string, value: string)

### EventManager.getRegister(): be.zvz.newskbot.engine.js.event.EventProvider.Register

Example 1 (Recommended):

```javascript
EventManager.getRegister().registerResponse(function (room, message) {
    Api.replyRoom(room, "Echo: " + message);
});
```

Example 2:

```javascript
EventManager.getRegister().registerResponse(function (room, message) {
    Api.replyRoom(room, "Echo: " + message);
}, "com.kakao.talk");
```

Example 3:

```javascript
EventManager.getRegister().response(function (room, message) {
    Api.replyRoom(room, "Echo: " + message);
});
```

Example 4:

```javascript
EventManager.getRegister().response(function (room, message) {
    Api.replyRoom(room, "Echo: " + message);
}, "com.kakao.talk");
```

`Register.response`는 `Register.registerResponse`와 동일합니다.

### EventManager.getResponseList(): Array

### EventManager.getStopEventListenerList(): Array

### EventManager.getUnRegister(): be.zvz.newskbot.engine.js.event.EventProvider.Unregister

### EventManager.reset()

### FastBase64.encode(originalString: string, lineSep: boolean): string

### FastBase64.decode(encodedString: string): string

### Log.i(log: string)

### Log.info(log: string)

### Log.d(log: string)

### Log.debug(log: string)

### Log.e(log: string)

### Log.error(log: string)

### Log.w(log: string)

### Log.warning(log: string)

### ScriptBot.send(room: string, message: string)

### Utils.delay(function(), ms: number)

### Utils.getAndroidVersionCode(): number

### Utils.getAndroidVersionName(): string

### Utils.getDate(): string

### Utils.getKakaoVersionCode(): number

### Utils.getKakaoVersionName(): string

### Utils.getPhoneBrand(): string

### Utils.getPhoneModel(): string

### Utils.getRandomString(digit: number): string

### Utils.getVersionCode(): number

### Utils.getVersionName(): string

### Utils.getWebText(url: string, [userAgent: string]): string

### Utils.getWebTextWithUserAgent(url: string, userAgent: string): string

### Utils.importScript(path: string, name: string)

### Utils.isCompatMode(): boolean

### Utils.isCompileMode(): boolean

### Utils.isLegacyMode(): boolean

### Utils.isOptimizationMode(): boolean

### Utils.NewDialog(title: string, buttonText: string, view: android.view.View): andorid.app:AlertDialog

### Utils.parseToHtml(url: string, option: string, function(data: string, error: java.io.IOException))

### Utils.parseToText(url: string, option: string, function(data: string, error: java.io.IOException))

### Utils.Thread(function)

### Utils.Toast(message: string): android.widget.Toast

### Utils.UIThread(function)
