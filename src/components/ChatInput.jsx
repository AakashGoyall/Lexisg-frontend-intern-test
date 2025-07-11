import { useState } from "react";
import Loader from "./Loader"

export default function ChatInput({ onSubmit, loading }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim() || loading) return;
    onSubmit(query);
    setQuery("");
  };

  const handleEnter = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();  // Stop newline
          if(!loading){
            onSubmit(query);
            setQuery("");
        }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border-t pt-2"
    >
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="Ask a legal question..."
        rows="1"
        className="flex-1 p-3 border rounded mr-3 resize-none outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 disabled:bg-grey-400 text-white px-4 py-3 rounded cursor-pointer hover:bg-blue-400"
      >
        {loading ? <Loader /> : "Send"}
      </button>
    </form>
  );
}
