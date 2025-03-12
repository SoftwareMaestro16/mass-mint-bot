require('dotenv').config();
const { log } = require('console');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const photoPath = path.join(__dirname, 'massmintlogo.jpg');

    const text = `🚀 *Mass Mint: Новая эра децентрализованного NFT-минта!*  

Откройте для себя революционный подход к массовому выпуску NFT! Пока традиционные платформы накладывают ограничения и взимают высокие комиссии за каждый минт, *Mass Mint* предоставляет вам полный контроль и свободу в создании цифровых активов.  

🔥 *Преимущества Mass Mint:*  
✅ *Массовый выпуск NFT* – создавайте до *200 NFT одновременно*, экономя время и средства.  
✅ *Поддержка SBT (Soulbound Tokens)* – невзаимозаменяемые токены, идеально подходящие для удостоверений, сертификатов и цифровых достижений.  
✅ *Полная децентрализация* – никакого посредничества и скрытых комиссий, только вы и ваш контракт.  

🔗 *Ниже вы можете открыть Приложение или ознакомиться с Гайдом по использованию.*`;

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
