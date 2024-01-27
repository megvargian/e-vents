import { stringify } from "postcss";

export const usePostMaker = () => {
    const sendEmail = async () => {
        const sendData = {
          From: "e-vents@sarpysevents.com",
          To: "kouyoumdjianmike@gmail.com",
          Subject: "Postmark test",
          TextBody: "Hello dear Postmark user.",
          HtmlBody:
            "<html><body><strong>Hello</strong> dear Postmark user.</body></html>",
        };

        // try {
        //   const { data, refresh, error } = useFetch(
        //     "/.netlify/functions/sendEmails",
        //     {
        //       baseURL: "",
        //       method: "POST",
        //       body: JSON.stringify(sendData),
        //       headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //         "X-Postmark-Server-Token": process.env.POSTMARK_API_KEY as string,
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        //         "Access-Control-Allow-Headers": "Content-Type",
        //       },
        //     }
        //   );
        //   await refresh();
        //   if (data.value) {
        //     console.log("Email sent successfully!");
        //   } else {
        //     console.error("Failed to send email.");
        //   }
        // } catch (error) {
        //   console.error("Error sending email:", error);
        // }
          const {data, refresh, error} = useFetch('/.netlify/functions/sendEmails', {
            method: "POST",
            body: JSON.stringify(sendData),
          });
          await refresh
          console.log(data.value)
          console.log(error.value)
      };

    return {
        sendEmail
    }
}