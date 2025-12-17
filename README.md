📹 Screen Recorder MVP

A minimal screen recording web app built as an MVP assignment.
Users can record their screen, preview the recording, upload it, and get a shareable public playback URL.


---

🚀 Features

🎥 Screen recording using browser Media APIs

⏹ Start / Stop recording controls

👀 Instant preview after recording

⬆ Upload recorded video to server

🔗 Public playback page (/watch/[id])

⚡ Simple, fast MVP-focused implementation



---

🛠 Tech Stack

Next.js (App Router)

TypeScript

MediaRecorder API

Node.js API Routes

HTML5 <video> playback



---

📂 Project Structure

app/
 ├─ page.tsx            # Screen recording UI
 ├─ api/upload/route.ts # Video upload API
 ├─ watch/[id]/page.tsx # Public video playback page

public/
 └─ uploads/            # Runtime uploaded videos (gitignored)


---

▶ How It Works

1. User clicks Start Recording


2. Browser captures the screen


3. User clicks Stop Recording


4. Recorded video is previewed


5. User uploads the video


6. App redirects to a shareable watch URL



Example:

/watch/1a20305f-2f45-478c-a6a3-366792497e06

Anyone with this link can view the recording.


---

🧪 Running Locally

npm install
npm run dev

Open:

http://localhost:3000


---

⚠ Notes

Uploaded videos are runtime-only and ignored via .gitignore

This project is intentionally kept simple and MVP-focused

No authentication or cloud storage is implemented



---

📌 Future Improvements

Cloud storage (S3 / Cloudinary)

Authentication

Recording audio options

Video list dashboard

Deletion & expiration of recordings



---

👤 Author

Priyanshu Porwal
Built as part of an internship / MVP assignment to demonstrate:

Frontend + backend integration

Media handling in the browser

Clean project structuring
