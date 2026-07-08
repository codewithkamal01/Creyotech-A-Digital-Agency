import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import ChatWindow from "./ChatWindow";
import assets from "../../assets/assets";

function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const shown = localStorage.getItem("creyotech-chat");

    if (shown) return;

    const timer = setTimeout(() => {
      setShowBubble(true);
      localStorage.setItem("creyotech-chat", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openChat = () => {
    setChatOpen(true);
    setShowBubble(false);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  return (
    <>
      {/*Popup*/}

      <AnimatePresence>
        {showBubble && !chatOpen && (
          <motion.button
            initial={{
              opacity: 0,
              y: 20,
              x: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={openChat}
            className="
              fixed
              bottom-28
              left-6
              z-40
              flex
              items-center
              gap-3
              rounded-full
              border
              border-border-light
              bg-white
              px-4
              py-3
              shadow-2xl
              max-sm:left-1/2
              max-sm:bottom-4
              max-sm:-translate-x-1/2
              max-sm:w-[calc(100vw-32px)]
              dark:border-border-dark
              dark:bg-bg-dark
            "
          >
            <div>
              <p className="text-sm font-semibold text-text-primary dark:text-white">
                Need help?
              </p>
              <p className="text-xs text-text-secondary dark:text-white/70">
                Tap to chat with Cora.
              </p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/*Floating Avatar*/}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        onClick={openChat}
        aria-label="Open chat"
        className="
          fixed
          bottom-6
          left-6
          z-50
          h-16
          w-16
          overflow-hidden
          rounded-full
          border-4
          border-white
          bg-white
          shadow-[0_15px_40px_rgba(80,68,229,0.35)]
          dark:border-slate-700
        "
      >
        <img
          src={assets.supportAgent}
          alt="Support"
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Online */}

        <span
          className="
            absolute
            bottom-1
            right-1
            h-4
            w-4
            rounded-full
            border-2
            border-white
            bg-green-500
          "
        />

        {/* Pulse */}

        <span
          className="
            absolute
            bottom-1
            right-1
            h-4
            w-4
            animate-ping
            rounded-full
            bg-green-500/60
          "
        />
      </motion.button>

      {/*Chat */}

      <AnimatePresence>
        {chatOpen && <ChatWindow close={closeChat} />}
      </AnimatePresence>
    </>
  );
}

export default ChatWidget;
