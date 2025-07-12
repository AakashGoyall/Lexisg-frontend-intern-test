import { useState,useRef, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null)

  const handleSubmit = (query) => {
    if (!query.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { role: "user", content: query },
    ];
    setMessages(newMessages);
    setLoading(true);

    // Simulate AI answer
    setTimeout(() => {
      const fakeResponse = {
        answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects",

citations: [

{  

  text: "As the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",  
  source: "Dani_Devi_v_Pritam_Singh.pdf",  
  link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"  

},
        ],
      };

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: fakeResponse.answer,
          citations: fakeResponse.citations,
        },
      ]);

      setLoading(false);
    }, 1500);
  };

  // Auto scrolling as latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'})

  }, [messages])

  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col h-[100dvh]">
      <div className="flex-1 overflow-y-auto px-4 mb-4 relative">
      {messages.length === 0 && <div className="md:text-4xl font-[600] text-[black] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl">What can I help with?</div>}

        {messages && messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {loading && (
          <div className="text-sm text-gray-500">Lexi is typing...</div>
        )}
        <div ref={bottomRef} />
      </div>
      <ChatInput onSubmit={handleSubmit} loading={loading} />
    </div>
  );
}
