const e=`---\r
title: "How to Build and Deploy a Full-Stack Contact Form Using Google Sheets"\r
date: "2026-01-02"\r
description: "A step-by-step tutorial to build and deploy a full-stack contact form that stores submissions directly into Google Sheets using Google Apps Script."\r
image: "/blog-images/B03.png"\r
slug: "contact-form-google-sheets"\r
---\r
\r
# How to Build and Deploy a Full-Stack Contact Form Using Google Sheets\r
\r
A contact form is a must-have for any portfolio or business website. In this tutorial, I’ll show how to build a **full-stack contact form** that stores messages directly into **Google Sheets**, without using a traditional backend server.\r
\r
---\r
\r
## Architecture Overview\r
\r
The system works as follows:\r
\r
\`Frontend Form\` → \`JavaScript Fetch\` → \`Google Apps Script\` → \`Google Sheet\`\r
\r
This approach is lightweight, scalable, and perfect for portfolio websites.\r
\r
---\r
\r
## Frontend Contact Form\r
\r
\`\`\`html\r
<form id="contactForm">\r
  <input name="name" placeholder="Your Name" required />\r
  <input name="email" type="email" placeholder="Your Email" required />\r
  <input name="subject" placeholder="Subject" required />\r
  <textarea name="message" placeholder="Message"></textarea>\r
  <button type="submit">Send</button>\r
</form>\r
\`\`\`\r
\r
### JavaScript Submit Handler\r
\r
\`\`\`javascript\r
form.addEventListener("submit", async (e) => {\r
  e.preventDefault();\r
\r
  const data = {\r
    name: form.name.value,\r
    email: form.email.value,\r
    subject: form.subject.value,\r
    message: form.message.value\r
  };\r
\r
  await fetch(WEB_APP_URL, {\r
    method: "POST",\r
    mode: "no-cors", // Crucial for Google Apps Script\r
    headers: { "Content-Type": "application/json" },\r
    body: JSON.stringify(data)\r
  });\r
\r
  form.reset();\r
  alert("Message Sent!");\r
});\r
\`\`\`\r
\r
---\r
\r
## Google Apps Script Backend\r
\r
To handle the data, we use Google Apps Script.\r
\r
\`\`\`javascript\r
function doPost(e) {\r
  const sheet = SpreadsheetApp.getActiveSheet();\r
  const data = JSON.parse(e.postData.contents);\r
\r
  sheet.appendRow([\r
    new Date(),\r
    data.name,\r
    data.email,\r
    data.subject,\r
    data.message\r
  ]);\r
\r
  return ContentService.createTextOutput("Success");\r
}\r
\`\`\`\r
\r
---\r
\r
## Deployment Steps\r
\r
1.  **Create Google Sheet** with headers (Date, Name, Email, Subject, Message).\r
2.  Open **Extensions** → **Apps Script**.\r
3.  Paste the code above into \`Code.gs\`.\r
4.  **Deploy as Web App**:\r
    *   Execute as: **Me**\r
    *   Who has access: **Anyone**\r
5.  **Copy deployment URL** and use it as your \`WEB_APP_URL\`.\r
\r
Once deployed, the form works on any hosted website without CORS issues (using \`no-cors\` mode).\r
\r
---\r
\r
## Why This Approach Works\r
\r
*   **No backend server required** – completely serverless.\r
*   **Free and reliable** – powered by Google's infrastructure.\r
*   **Easy Maintenance** – data is instantly viewable in a spreadsheet.\r
*   **Perfect for portfolios** – simple setup for low-volume forms.\r
\r
---\r
\r
## Conclusion\r
\r
This tutorial demonstrates how full-stack problems can be solved using simple, serverless tools. Google Sheets combined with Apps Script offers a powerful alternative for lightweight data storage.\r
\r
Happy building! 🚀\r
`;export{e as default};
