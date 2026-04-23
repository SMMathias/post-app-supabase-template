import { useState } from "react";
import { useNavigate } from "react-router";
import PostForm from "../components/PostForm";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json"
};

export default function CreatePage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(postData) {
    // TODO:
    // 1. Send POST request med fetch
    // 2. Brug JSON.stringify(postData)
    // 3. Navigér tilbage til forsiden ved succes
    //
    // Ekstra bagefter:
    // - isSubmitting
    // - try/catch
    // - fejlbesked
    console.log(postData, URL, headers);
    navigate("/");
  }

  return (
    <main className="app">
      <h1 className="page-title">Create Post</h1>
      <PostForm onSubmit={handleSubmit} isSubmitting={isSubmitting} errorMessage={errorMessage} />
    </main>
  );
}
