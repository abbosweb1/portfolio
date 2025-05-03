// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import "./App.css";

// const TelegramBotForm = () => {
//     const [message, setMessage] = useState('');
//     const [phone, setPhone] = useState('');

//     const TELEGRAM_BOT_TOKEN = '7849113011:AAE74V4FYl5scAmSkMwvenYiChgHHs-vJG8'; 
//     const CHAT_ID = '6181440042';         

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const fullMessage = `📩 Yangi so‘rov:\n\n📝 Xabar: ${message}\n📞 Telefon: ${phone}`;

//         const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
//         const payload = {
//             chat_id: CHAT_ID,
//             text: fullMessage,
//         };

//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(payload),
//             });

//             if (response.ok) {
//                 // alert("✅ Xabar muvaffaqiyatli yuborildi!");
//                 toast.success('✅ Xabar muvaffaqiyatli yuborildi!')
//                 setMessage('');
//                 setPhone('');
//             } else {
//                 alert('⚠️ Xatolik yuz berdi. Qayta urinib ko‘ring.');
//             }
//         } catch (error) {
//             // alert('❌ Serverga ulanishda xato yuz berdi.');
//             toast.success('❌ Serverga ulanishda xato yuz berdi.')
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className='form-container'>
//             <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder='Xabar kiriting'
//                 required
//             />
//             <br />
//             <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder='Telefon raqam'
//                 required
//             />
//             <br />
//             <button type='submit'>Yuborish</button>
//         </form>
//     );
// };

// export default TelegramBotForm;
