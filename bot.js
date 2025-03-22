require('dotenv').config();
const { log } = require('console');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const photoPath = path.join(__dirname, 'massmintlogo.jpg');

    const text = `🚀 *Mass Mint: A New Era of Decentralized NFT Minting!*  

Discover a revolutionary approach to mass NFT minting! While traditional platforms impose restrictions and charge high fees for each mint, *Mass Mint* gives you full control and freedom in creating digital assets.  
    
🔥 *Advantages of Mass Mint:*  
✅ *Mass NFT Minting* – create up to *200 NFTs at once*, saving time and costs.  
✅ *Support for SBT (Soulbound Tokens)* – non-transferable tokens, perfect for certificates, achievements, and digital credentials.  
✅ *Full Decentralization* – no intermediaries or hidden fees, just you and your contract.  
    
🔗 *Below, you can open the app or check out the usage guide.*`;

    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Mass Mint', url: 'https://t.me/MassMintBot/NFT' },
                ],
                [
                    { text: 'Guide', url: 'https://telegra.ph/Kak-polzovatsya-Mass-Mint-bot-03-11#%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8' },
                ],
                [
                    { text: 'Simple Coin Channel', url: 'https://t.me/just_a_simple_coin' },

                ]

            ]
        }
    };

    bot.sendPhoto(chatId, photoPath, { caption: text, ...options });
});
