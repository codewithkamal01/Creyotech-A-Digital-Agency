import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, X, Sparkles, FileText, CalendarDays } from "lucide-react";

import assets from "../../assets/assets";
import { quickActions, welcomeMessages } from "./chatData";
import { getBotReply } from "./chatEngine";

function ChatWindow({ close }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  /*Welcome Animation*/

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      if (i >= welcomeMessages.length) {
        clearInterval(timer);
        return;
      }

      setMessages((prev) => [...prev, welcomeMessages[i]]);

      i++;
    }, 700);

    return () => clearInterval(timer);
  }, []);

  /*Auto Scroll*/

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /* ---------------- Send ---------------- */

  const sendMessage = (customText = null) => {
    const text = customText || input;

    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    setInput("");

    setLoading(true);

    setTimeout(() => {
      const reply = getBotReply(text);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);

      setLoading(false);
    }, 900);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
fixed
left-6
bottom-28
z-50
flex
h-112.5
w-87.5
max-sm:left-2
max-sm:right-2
max-sm:bottom-20
max-sm:w-auto
max-sm:h-[72dvh]
max-sm:max-h-120
max-sm:rounded-2xl
max-sm:shadow-[0_15px_50px_rgba(0,0,0,0.16)]
max-h-[calc(100vh-96px)]
flex-col
overflow-hidden
rounded-[20px]
border
border-border-light
bg-white
shadow-[0_25px_80px_rgba(0,0,0,0.15)]
dark:border-border-dark
dark:bg-bg-dark
"
    >
      {/*  HEADER */}

      <div className="bg-primary px-3 py-3 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={assets.supportAgent}
              alt=""
              className="h-10 w-10 rounded-full object-cover max-sm:h-8 max-sm:w-8"
            />

            <div>
              <h2 className="font-semibold max-sm:text-sm">Cora</h2>

              <p className="text-xs text-white/80 max-sm:text-[11px]">Creyotech Support</p>
            </div>
          </div>

          <button onClick={close}>
            <X size={18} />
          </button>
        </div>

        <div className="mt-2 flex items-center gap-2 text-[11px]">
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          Active
        </div>
      </div>

      {/*QUICK ACTIONS*/}

      <div
        className="
flex overflow-x-auto gap-2 horizontal-scrollbar
border-b
border-border-light
bg-bg-soft
px-3
py-2
max-sm:flex-wrap
max-sm:gap-1.5
max-sm:px-2
max-sm:py-1.5
dark:border-border-dark
dark:bg-white/3
"
      >
        {quickActions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.text}
              onClick={() => sendMessage(item.text)}
              className="
flex
shrink-0
items-center
gap-1.5
rounded-full
bg-primary/10
px-2
py-1
text-[11px]
font-medium
text-primary
transition
hover:bg-primary
hover:text-white
max-sm:text-[10px]
max-sm:px-2
max-sm:py-1
"
            >
              <Icon size={14} />

              {item.text}
            </button>
          );
        })}
      </div>

      {/*CHAT */}

      <div
        className="
    flex-1
    overflow-y-auto
    hide-scrollbar
    space-y-4
px-3
py-3
max-sm:px-2
max-sm:py-2
"
      >
        {messages.filter(Boolean).map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className={`
max-w-[88%]
sm:max-w-[80%]
rounded-3xl
px-3
py-2.5
text-sm
leading-6
max-sm:text-[13px]
max-sm:leading-5

${
  message.role === "assistant"
    ? `
bg-bg-soft
text-text-primary

dark:bg-white/5
dark:text-white
`
    : `
bg-primary
text-white
`
}
`}
            >
              {message.text}
            </motion.div>
          </div>
        ))}

        {/* Typing */}

        {loading && (
          <div className="flex">
            <div className="rounded-full bg-bg-soft px-4 py-3 dark:bg-white/5">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-primary animate-bounce"></span>

                <span className="h-2 w-2 rounded-full bg-primary animate-bounce delay-100"></span>

                <span className="h-2 w-2 rounded-full bg-primary animate-bounce delay-200"></span>
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}

      <div
        className="
flex
items-center
gap-2
rounded-2xl
border
border-border-light
bg-bg-soft
px-3
py-2
max-sm:px-2
max-sm:py-2
dark:border-border-dark
dark:bg-white/3
"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask us anything..."
          className="
flex-1
bg-transparent
py-2.5
text-sm
outline-none
max-sm:py-2
max-sm:text-[13px]
dark:text-white
"
        />

        <button
          onClick={() => sendMessage()}
          className="
flex
h-9
w-9
items-center
justify-center
rounded-full
bg-primary
text-white
transition
hover:scale-105
max-sm:h-8
max-sm:w-8
"
        >
          <Send size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export default ChatWindow;
