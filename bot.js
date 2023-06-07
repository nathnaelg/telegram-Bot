const Telegraf = require('telegraf');

const bot = new Telegraf('6261040992:AAFwMFbftlS-zDJmehAMbQWYhbtsA3PHEf8');
//code

/*bot.start((ctx) =>{
    ctx.reply("Hello, Welcome to this Bot");
})

bot.help((ctx) =>{
    ctx.reply("You have entered the help command");
})
bot.settings((ctx) =>{
    ctx.reply("You have entered the settings command");
})*/

bot.hears("cat", (ctx) => {
    cx.reply("Meow");
} )
bot.launch();
