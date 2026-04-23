import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import PostForm from "../components/PostForm";

const URL = import.meta.env.VITE_SUPABASE_URL;
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_APIKEY,
  "Content-Type": "application/json"
};

export default function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadPost() {
      // TODO:
      // 1. Hent ét post via id
      // 2. Brug querystring: ?id=eq.${id}
      // 3. Gem første element i post state
      //
      // Ekstra bagefter:
      // - loading
      // - try/catch
      // - fejlbesked
      console.log(id, URL, headers);
    }

    loadPost();
  }, [id]);

  async function handleSubmit(postData) {
    // TODO:
    // 1. Send PATCH request til post med id
    // 2. Navigér tilbage til detail-siden ved succes
    //
    // Ekstra bagefter:
    // - isSubmitting
    // - try/catch
    // - fejlbesked
    console.log(postData, id);
    navigate(`/posts/${id}`);
  }

  if (isLoading) return <p className="status-msg">Loading post...</p>;

  return (
    <main className="app">
      <h1 className="page-title">Update Post</h1>
      {errorMessage && !post ? (
        <p className="status-banner status-banner-error">{errorMessage}</p>
      ) : (
        <PostForm
          onSubmit={handleSubmit}
          postToUpdate={post || { image: "", caption: "" }}
          isSubmitting={isSubmitting}
          errorMessage={errorMessage}
        />
      )}
    </main>
  );
}
