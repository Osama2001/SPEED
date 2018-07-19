const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
var moment = require('moment')
const fs = require('fs');
const cooldown = new Set();
var moment = require('moment')
var Canvas = require('canvas');
var jimp = require('jimp');
const prefix = "-";
const embed = new Discord.RichEmbed()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
      console.log('----------------');
    console.log('By Osama_DK');
    console.log('----------------');
});

client.on('ready', () => {
    client.user.setGame(`SPEEDXCRAFT`, "http://twitch.tv/Streammingg")	
}



 client.on('message', message => {
if(message.content.startsWith(prefix +'sug')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      const A8tra7Room = message.guild.channels.find("name", "suggestions")
      if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   let a8tra7 = message.content.split(' ').slice(1).join(' ')
   var m8tr7 = message.author.id
if(!message.guild.channels.find("name","suggestions")) return message.channel.send('انشء روم باسم   \`suggestions \`')
   var ThxForSug = new Discord.RichEmbed()
      .setColor('WHITE')
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`شكراً على اقتراحك !`)
.setDescription(`**Your Suggestion** : ${a8tra7}`)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
      .setColor('WHITE')
   .setTitle(`هل انت متأكد من ارسال الاقتراح؟ معك دقيقه قبل الالغاء`)
.setDescription(`Suggestion : **${a8tra7}**`)
		 .setFooter('SPEEDXCRAFT' , client.user.avatarURL)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('GOLD')
   .setThumbnail(message.author.avatarURL)
   .setTitle(`New Suggestion :bell:`)
   .setDescription(`From : __<@${m8tr7}>__\n\nSuggestion: **${a8tra7}**`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(6000)})
msg.delete();
})
No.on("collect", r => {
message.channel.send('تم الغاء اقتراحط بنجاح :white_check_mark: ').then(message => {message.delete(4000)})
msg.delete();
})
})
}
});   


client.on('message',function(message) {
    let messageArray = message.content.split(" ");
    let args = messageArray[1];
   if(message.content.startsWith(prefix + "counting")) {
	       if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`:false: **| ${message.author.username} you need \`ADMINISTRATOR\` Permission to use this Command !**`)
       if(!args) return message.reply('ℹ ``اختر رقم``');
       let i;
       for (i = 0; i < `${parseInt(args) + 1}`; ++i)
       message.channel.send(i)
   }
});


client.on('message', function(message) {
    
    if(message.content.startsWith(prefix + "report")) {
        if(!message.channel.guild) return message.reply("This Command For Servers Only")
        let staff = message.guild.member(message.author).roles.find('name', 'STAFF');
       
        if(!staff) return message.reply('You Must Have <@469059909569347585> Role To Report Members')
        if (message.author.bot) return;
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        var reporter = message.author.id
        const report = message.guild.channels.find("name", "reports")
        if(!message.guild.channels.find("name","reports")) return message.channel.send('انشء روم باسم   \`reports\`')
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report 📃`")
    .setThumbnail(message.author.avatarURL)
    .setColor('GOLD')
    .addField("**- Reported User:**",mUser,true)
    .addField("**- Reported User ID:**",mUser.id,true)
    .addField("**- Reason:**",messageReason,true)
    .addField("**- Channel:**",message.channel,true)
   .setDescription(`**From** : <@${reporter}>`)
		 .setFooter('SPEEDXCRAFT SUPPORT' , client.user.avatarURL)
    
message.channel.send(Rembed)
message.channel.send("``Are you sure you want to send this report???``").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 60000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 60000 });
reaction1.on("collect", r => {
    report.send(Rembed)
    message.reply("** Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("** Canceled**").then(message => {message.delete(4000)})
msg.delete();
})
})
}
});


   client.login(process.env.BOT_TOKEN);
