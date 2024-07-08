const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_50_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgODksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCTmVzY2dscXlJQWxzQmNCM1NuQitYT3pWdDBETHBsYjMyTTZsSG1XUnFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM1OTg4NzM4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjAxNzUwMTY3OTc0Njk1ODFFNzQ4MTQzQzc3QjgwOEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDEwNjUxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInd0M2l6UlBUVFJxTkNpcHBla2ZaSndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmUwMjk5ZmEtODkzMy00ODg1LWIzMjQtY2Y3NjZhNGY0NTA1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgNSxcbiAgICAgIDI3LFxuICAgICAgMjMzLFxuICAgICAgOTgsXG4gICAgICA3NCxcbiAgICAgIDcyLFxuICAgICAgMTk3LFxuICAgICAgMTQ4LFxuICAgICAgMTgyLFxuICAgICAgMTQ1LFxuICAgICAgMTY1LFxuICAgICAgMTkwLFxuICAgICAgNzgsXG4gICAgICA0NyxcbiAgICAgIDI0OCxcbiAgICAgIDEyMCxcbiAgICAgIDE2NyxcbiAgICAgIDMzLFxuICAgICAgMTY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDk4LFxuICAgICAgMTgxLFxuICAgICAgMTMyLFxuICAgICAgMjcsXG4gICAgICAxNzAsXG4gICAgICA1MSxcbiAgICAgIDQ2LFxuICAgICAgMTI0LFxuICAgICAgNyxcbiAgICAgIDcwLFxuICAgICAgMTY5LFxuICAgICAgMTMsXG4gICAgICA0NixcbiAgICAgIDE1OCxcbiAgICAgIDI1NCxcbiAgICAgIDE5MSxcbiAgICAgIDcwLFxuICAgICAgMjI3LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc3TEUySlZMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNTk4ODczODA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQwMzkwMDU3MDA5MzkwOjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXY29EY1FrTVN0dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSTFpYTVIcjJvcUk0SFFtUHFQeGFtaWxrVU1mUmJDblIrK2ZVbVFFT3h6RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIRXI3eGxYRitqbGJxaWhpYUlSUVFKRFcrT1VCNUNUcEVNQks2OWxxSm9RWnpNblUxQlNwWTV2czlhRWdiaG9vclpoT2ZXNzZkSUxvVWR1blBiMVJCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIRjRjSDMwcVdXMmhqbVJCVWxUcVJjckhLOXJTUjZtKzBCRVRYWVdEemhMMnpIbU43ZVMwWk1BSzhBNUVRM251TmMzZHkxRFpXdjkzUlRYZmsxRkZndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNTk4ODczODA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDEwNjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmNoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCY2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrRHpmS1lOWUdIK3RpdDcvZFYzUFk2b1Bnek1UYjFNZ2phWmw1Y2g5aDk0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTg3MTM0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDEwNjQ2MjgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
