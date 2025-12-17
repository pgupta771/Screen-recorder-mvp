"use client";

import { useRef, useState } from "react";



export default function Home() {
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const[uploading, setUploading] = useState(false);

  const startRecording = async () => {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });

    const mediaRecorder = new MediaRecorder(screenStream);
    mediaRecorderRef.current = mediaRecorder;

    const chunks: BlobPart[] = [];

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

  mediaRecorder.onstop = () => {
  const blob = new Blob(chunks, { type: "video/webm" });
  setVideoBlob(blob);
  const url = URL.createObjectURL(blob);
  setVideoURL(url);
};

    mediaRecorder.start();
    setRecording(true);
  };
const uploadVideo = async () => {
  if (!videoBlob || uploading) return;

  setUploading(true);

  const formData = new FormData();
  formData.append("file", videoBlob, "recording.webm");

  try {
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    window.location.href = `/watch/${data.id}`;
  } catch (err) {
    alert("Upload failed");
    setUploading(false);
  }
};


  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Screen Recorder</h1>

      {!recording && (
        <button onClick={startRecording}>Start Recording</button>
      )}

      {recording && (
        <button onClick={stopRecording}>Stop Recording</button>
      )}

   {uploading && (
  <p style={{ marginTop: 20 }}>Uploading video, please wait…</p>
)}


      {videoBlob && (
  <button
    onClick={uploadVideo}
    disabled={uploading}
    style={{ marginTop: 10 }}
  >
    {uploading ? "Uploading..." : "Upload Video"}
  </button>
)}

    </main>
  );
}