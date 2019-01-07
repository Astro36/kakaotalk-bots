# KakaoTalk Bot Compatibility Scripts

> 카카오톡 봇 호환성 스크립트

## Index

- 바렛봇 -> 졸브봇
- 수용봇 -> 졸브봇

## Files

- [standard-to-jellbrick.js](./standard-to-jellbrick.js): 젤브봇에서 Standard 봇 API를 제공합니다.
- [perk-to-standard.js](./perk-to-standard.js): Standard 봇에서 수용봇 API를 제공합니다.
- [xfl-to-standard.js](./xfl-to-standard.js): Standard 봇에서 바렛봇 API를 제공합니다.

## 바렛봇 -> 졸브봇

> 바렛봇 스크립트를 졸브봇에서 사용할 수 있게합니다.

```javascript
// standard-to-jellbrick.js를 복사해 스크립트 최상단에 붙여넣습니다.
(...)(this);

// xfl-to-standard.js를 바로 밑에 붙여넣습니다. (순서 중요)
(...)(this);

// 바렛봇 봇 코드를 붙여넣습니다.
function response(message, room, sender, replier, imageDb) {
    if (room === "카카토옥 봇 개발 방" && message === "안녕") {
        replier.reply(room, "안녕하세요!");
    }
}
```

- [standard-to-jellbrick.js](./standard-to-jellbrick.js)
- [xfl-to-standard.js](./xfl-to-standard.js)

## 수용봇 -> 졸브봇

> 수용봇 스크립트를 졸브봇에서 사용할 수 있게합니다.

```javascript
// standard-to-jellbrick.js를 복사해 스크립트 최상단에 붙여넣습니다.
(...)(this);

// perk-to-standard.js를 바로 밑에 붙여넣습니다. (순서 중요)
(...)(this);

// 수용봇 봇 코드를 붙여넣습니다.
function catchMessage(room, sender, message) {
    if (room === "카카토옥 봇 개발 방" && message === "안녕") {
        Bot.send(room, "안녕하세요!");
    }
}
```

- [standard-to-jellbrick.js](./standard-to-jellbrick.js)
- [perk-to-standard.js](./perk-to-standard.js)
