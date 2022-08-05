# Intenty
W każdej wersji Discord.js intenty podaje się w inny sposób. Ten plik pokazuje, jak poprawnie podać intenty dla wybranej wersji.

## Discord.js 12
```js
const client = new Discord.Client();
```

## Discord.js 13
```js
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});
```
## Discord.js 14
```js
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers
  ]
});
```
