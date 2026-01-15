---
title: "How to Build and Deploy a Full-Stack Contact Form Using Google Sheets"
date: "2026-01-02"
description: "A step-by-step tutorial to build and deploy a full-stack contact form that stores submissions directly into Google Sheets using Google Apps Script."
image: "/blog-images/B03.png"
slug: "contact-form-google-sheets"
---

# How to Build and Deploy a Full-Stack Contact Form Using Google Sheets

![Full-Stack Contact Form Using Google Sheets](/blog-images/B03.png)

A contact form is a must-have for any portfolio or business website. In this tutorial, I’ll show how to build a **full-stack contact form** that stores messages directly into **Google Sheets**, without using a traditional backend server.

---

## Architecture Overview

The system works as follows:

`Frontend Form` → `JavaScript Fetch` → `Google Apps Script` → `Google Sheet`

This approach is lightweight, scalable, and perfect for portfolio websites.

---

## Frontend Contact Form

```html
<form id="contactForm">
  <input name="name" placeholder="Your Name" required />
  <input name="email" type="email" placeholder="Your Email" required />
  <input name="subject" placeholder="Subject" required />
  <textarea name="message" placeholder="Message"></textarea>
  <button type="submit">Send</button>
</form>
```

### JavaScript Submit Handler

```javascript
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  await fetch(WEB_APP_URL, {
    method: "POST",
    mode: "no-cors", // Crucial for Google Apps Script
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  form.reset();
  alert("Message Sent!");
});
```

---

## Google Apps Script Backend

To handle the data, we use Google Apps Script.

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.subject,
    data.message
  ]);

  return ContentService.createTextOutput("Success");
}
```

---

## Deployment Steps

1.  **Create Google Sheet** with headers (Date, Name, Email, Subject, Message).
2.  Open **Extensions** → **Apps Script**.
3.  Paste the code above into `Code.gs`.
4.  **Deploy as Web App**:
    *   Execute as: **Me**
    *   Who has access: **Anyone**
5.  **Copy deployment URL** and use it as your `WEB_APP_URL`.

Once deployed, the form works on any hosted website without CORS issues (using `no-cors` mode).

---

## Why This Approach Works

*   **No backend server required** – completely serverless.
*   **Free and reliable** – powered by Google's infrastructure.
*   **Easy Maintenance** – data is instantly viewable in a spreadsheet.
*   **Perfect for portfolios** – simple setup for low-volume forms.

---

## Conclusion

This tutorial demonstrates how full-stack problems can be solved using simple, serverless tools. Google Sheets combined with Apps Script offers a powerful alternative for lightweight data storage.

Happy building! 🚀
