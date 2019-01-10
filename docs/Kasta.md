# 카스타봇

![../assets/img_kasta_bot.png](../assets/img_kasta_bot.png)

> Unofficial KakaoTalk Standard Bot

## 제작

## 패키지명

[be.zvz.kastabot]()

## 엔진

Rhino 1.7.11 (Unofficial, Compiled by JellBreak)

## API

Example 1:

```javascript
const bot = BotManager.getCurrentBot();

bot.addListener('chat', (room, sender, message) => {
    if (room === '카카오톡 봇 개발 방' && message.getText() === '안녕') {
        bot.reply(room, '안녕하세요!');
    }
});
```

Example 2:

```javascript
const bot = BotManager.getCurrentBot();

bot.addListener('command', (room, sender, command, args) => {
    if (command === '인사' && args[0] === '안녕') {
        bot.reply(room, '안녕하세요!');
    }
});
```

### Bot#addListener(eventName: string, listener: function(room: string, sender: string, message: Message))

```javascript
bot.addListener('chat', (room, sender, message) => {
    if (message.getText() === '안녕') {
        bot.reply(room, '안녕하세요!');
    }
});
```

### Bot#canReply(): boolean

### Bot#getName(): string

### Bot#removeListener(eventName: string)

### Bot#reply(room: string, text: string)

```javascript
bot.reply('카카오톡 봇 개발', '안녕하세요!');
```

### Bot#restart(botName?: string)

### Bot#start(botName?: string)

### Bot#stop(botName?: string)

### BotManager.getAll(): Array.\<Bot>

```javascript
const bots = BotManager.getAll();
```

### BotManager.getCurrentBot(): Bot

```javascript
const bot = BotManager.getCurrentBot();
```

### Message({ text: string, image: string })

```javascript
const message = new Message({ text: '안녕' });
```

### Message#getImage(): string

### Message#getText(): string

### Utils.getContext(): android.content.Context

### Utils.showToast(): android.widget.Toast

### Utils.request(url: string, callback: function(data: string, error: string))

```javascript
Utils.request('https://www.naver.com/', (data, error) => {
    if (data) {
        bot.reply('HTML', data);
    } else {
        bot.reply('오류', error);
    }
});
```

### Utils.requestSync(url: string): string

```javascript
try {
    const html = Utils.requestSync('https://www.naver.com/');
    bot.reply('HTML', html);
} catch (e) {
    bot.reply('오류', e.message);
}
```
