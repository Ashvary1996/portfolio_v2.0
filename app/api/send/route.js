import { Resend } from "resend";

const resend = new Resend(process.env.MAIL_KEY);
const htmlTemplate = ({ name, email, subject, message }) => {
    return `
  <div style="font-family: Arial, sans-serif; background:#f6f9fc; padding:20px;">
    
    <div style="max-width:600px; margin:0 auto; background:white; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
      
      <!-- Header -->
      <div style="background:#0f766e; color:white; padding:16px 20px;">
        <h2 style="margin:0;">📩 New Portfolio Message</h2>
      </div>

      <!-- Body -->
      <div style="padding:20px;">
        
        <p style="margin-bottom:12px;"><strong>Name:</strong> ${name}</p>
        <p style="margin-bottom:12px;"><strong>Email:</strong> ${email}</p>
        <p style="margin-bottom:12px;"><strong>Subject:</strong> ${subject}</p>

        <div style="margin-top:16px;">
          <p style="margin-bottom:8px;"><strong>Message:</strong></p>
          <div style="background:#f1f5f9; padding:12px; border-radius:6px;">
            ${message}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div style="background:#f9fafb; padding:12px 20px; font-size:12px; color:#6b7280;">
        Sent from your portfolio contact form 🚀
      </div>

    </div>

  </div>
  `;
};
// const autoReplyTemplate = ({ name }) => {
//     return ` <div
//       style="font-family: Arial, sans-serif; background: #f6f9fc; padding: 20px"
//     >
//       <div
//         style="
//           max-width: 600px;
//           margin: 0 auto;
//           background: white;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
//         "
//       >
//         <!-- Header -->
//         <div style="background: #0f766e; color: white; padding: 16px 20px">
//           <h2 style="margin: 0">Ashvary | Portfolio</h2>
//         </div>

//         <!-- Body -->
//         <div style="padding: 20px; color: #111827">
//           <p>Hey <strong>${name}</strong> 👋,</p>

//           <p style="margin-top: 10px">
//             Thanks for reaching out! I’ve received your message and will get
//             back to you as soon as possible.
//           </p>

//           <p style="margin-top: 10px">
//             Meanwhile, feel free to explore my work or connect with me directly
//             👇
//           </p>

//           <!-- CTA Buttons -->
//           <div style="margin: 20px 0">
//             <a
//               href="https://ashvarygidian.vercel.app"
//               style="
//                 display: inline-block;
//                 margin: 5px;
//                 padding: 10px 16px;
//                 background: #0f766e;
//                 color: white;
//                 text-decoration: none;
//                 border-radius: 6px;
//               "
//             >
//               🌐 Portfolio
//             </a>

//             <a
//               href="https://github.com/Ashvary11"
//               style="
//                 display: inline-block;
//                 margin: 5px;
//                 padding: 10px 16px;
//                 background: #111827;
//                 color: white;
//                 text-decoration: none;
//                 border-radius: 6px;
//               "
//             >
//               💻 GitHub
//             </a>

//             <a
//               href="https://www.linkedin.com/in/ashvary-gidian/"
//               style="
//                 display: inline-block;
//                 margin: 5px;
//                 padding: 10px 16px;
//                 background: #0a66c2;
//                 color: white;
//                 text-decoration: none;
//                 border-radius: 6px;
//               "
//             >
//               🔗 LinkedIn
//             </a>

//             <a
//               href="https://wa.me/917000240904?text=Hi%20Ashvary,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
//               style="
//                 display: inline-block;
//                 margin: 5px;
//                 padding: 10px 16px;
//                 background: #25d366;
//                 color: white;
//                 text-decoration: none;
//                 border-radius: 6px;
//               "
//             >
//               💬 WhatsApp
//             </a>
//           </div>

//           <p style="margin-top: 20px">
//             Looking forward to connecting with you 😊
//           </p>

//           <p style="margin-top: 10px">
//             — <strong>Ashvary Gidian</strong><br />
//             Full Stack Developer (MERN) | NEXT.js
//           </p>
//         </div>

//         <!-- Footer -->
//         <div
//           style="
//             background: #f9fafb;
//             padding: 12px 20px;
//             font-size: 12px;
//             color: #6b7280;
//             text-align: center;
//           "
//         >
//           This is an automated response. I’ll reply personally soon 🚀
//         </div>
//       </div>
//     </div>`;
// };

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();
        //   1. Send to YOU
        const adminMail = await resend.emails.send({
            from: "Ashvary | Portfolio <ashvary.portfolio@resend.dev>",
            to: ["ashvarygidian1996@gmail.com"],
            reply_to: email,
            subject: subject,
            html: htmlTemplate({ name, email, subject, message }),
        });
        //   2. Send auto-reply to USER
        // const userMail = await resend.emails.send({
        //     from: "Ashvary | Portfolio <ashvary.portfolio@resend.dev>",
        //     to: [email],
        //     subject: "Hey! Ashvary here — got your message 👋",
        //     html: autoReplyTemplate({ name }),
        // });
        // console.log("Admin:", adminMail);
        // console.log("User:", userMail);


        return Response.json({
            success: true, adminMail,
            userMail,
        });
    } catch (err) {
        return Response.json({ success: false, error: err.message });
    }
}