"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const storyParts = [
  {
    author: "Bolaji",
    text: `On February 25, 2019, it all started with a WhatsApp text, "Good morning Reacher".

I had to check the profile picture and that was the moment I knew she would be my wife.

As a sure guy, I made use of my arsenal of punchlines. We scheduled our first meeting at the Faculty of Admin basement. That was probably one of the countable days I bathed twice, wore my brogues and set out to meet the beautiful girl in person.

My first visit to her hostel in OAU was a funny one. You should see how my superwoman was shy and sweating under a blowing fan. That is what you call aura!

I noticed it was becoming something huge when I cancelled watching a Liverpool UCL match to see her on short notice just after three weeks of knowing each other.

We have had memories, quiet moments, disagreements, deep conversations, and shared dreams.

Cheers to more in and outside Nigeria.`,
  },
  {
    author: "Fisayo",
    text: `In my 300 level, I volunteered with Reach, an NGO that reaches out to teenagers.

In my final year, we had a big project at the NGO to reach out to a village in Ife, tagged Reacher and the Reached 1.0.

I was tasked to reach out to members to make donations for the project. I reached out to everyone on the group page and Bolaji happened to be one of them. His response was unique. He asked if I was an Ijebu woman or an accounting student as I was straight to business 😂. His sense of humour did it for me.

I realized he was my senior colleague and one question led to another, then we became friends. After some months, we transitioned to boyfriend and girlfriend.

We have chatted every day since the "Good morning Reacher" in 2019 till date, even on days my hand was too weak to chat.`,
  },
];

// Typewriter hook
function useTypewriter(text: string, speed = 30) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayedText;
}

function StoryCard({
  author,
  text,
  idx,
  className,
}: {
  author: string;
  text: string;
  idx: number;
  className?: string;
}) {
  const typedText = useTypewriter(text);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.3 }}
      className={`p-4 lg:p-8 rounded-xl shadow-md w-full lg:w-1/2 text-left
        ${
          idx % 2 === 0
            ? "bg-[#1b3d2f] text-white"
            : "bg-[#ffe5d4] text-gray-800"
        }
        ${className ?? ""}`}
    >
      <h3
        className={`text-2xl font-bold mb-6 ${
          idx % 2 === 0 ? "!text-[#ffe5d4]" : "text-gray-900"
        }`}
      >
        {author}
      </h3>
      <p className="whitespace-pre-line">{typedText}</p>
    </motion.div>
  );
}

export default function Story() {
  return (
    <main className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 text-lg">
          From a WhatsApp DM to countless memories together ❤️
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Bolaji's story */}
        <StoryCard
          key={0}
          author={storyParts[0].author}
          text={storyParts[0].text}
          idx={0}
          className="order-2 lg:order-1 mt-20 lg:mt-0" // Desktop: first, Mobile: second
        />

        {/* Screenshot */}
        <motion.div
          className="w-full lg:w-1/2 mx-auto p-0 lg:p-6 rounded-xl shadow-md bg-gray-100 h-screen lg:h-[600px] order-1 lg:order-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-center mt-6 lg:mt-2 mb-6 text-gray-500 text-xl font-bold">
            Our very first WhatsApp chat ❤️
          </p>
          <div className="relative w-full h-full">
            <Image
              src="/firstchat.jpeg"
              alt="First chat screenshot"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Fisayo's story */}
        <StoryCard
          key={1}
          author={storyParts[1].author}
          text={storyParts[1].text}
          idx={1}
          className="order-3 lg:order-3" // Stays last on all screens
        />
      </div>
    </main>
  );
}
