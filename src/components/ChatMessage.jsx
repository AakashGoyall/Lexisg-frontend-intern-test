import Citation from "./Citation";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`p-3 rounded-lg max-w-md ${
          isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        <div>{message.content}</div>
        {message.citations &&
          message.citations.map((citation, idx) => (
            <Citation key={idx} citation={citation} />
          ))}
      </div>
    </div>
  );
}
