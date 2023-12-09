import axios from 'axios';

const telegramBotToken = '6638677813:AAEI6EhlQh55DODQNOIe8xkY-7ws8gDOHiQ';
const chatId = '879142804';

const SetTelegram = async (data) => {
    try {
        const response = await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            chat_id: chatId,
            text: `
                New Client:
                    Name: ${data.name}
                    Phone: ${data.phone}
                    Email: ${data.email}
                    Message: ${data.message}
                `
        });
        if (response.data.ok) {
            console.log('Message sent to Telegram successfully');
        } else {
            console.error('Error while sending message to Telegram');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export default SetTelegram;
