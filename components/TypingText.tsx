"use client";

import { useEffect, useMemo, useState } from "react";

type TypingTextProps = {
  words: string[];
};

const TYPING_SPEED = 85;
const DELETING_SPEED = 50;
const HOLD_TIME = 1300;

export default function TypingText({ words }: TypingTextProps) {
  const items = useMemo(() => (words.length > 0 ? words : ["tech nerd."]), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = items[wordIndex % items.length];
    const isComplete = text === currentWord;
    const isEmpty = text.length === 0;

    let timeout = TYPING_SPEED;

    if (isDeleting) {
      timeout = DELETING_SPEED;
    } else if (isComplete) {
      timeout = HOLD_TIME;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setText(currentWord.slice(0, text.length + 1));
        return;
      }

      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isEmpty) {
        setText(currentWord.slice(0, text.length - 1));
        return;
      }

      setIsDeleting(false);
      setWordIndex((index) => (index + 1) % items.length);
    }, timeout);

    return () => clearTimeout(timer);
  }, [isDeleting, items, text, wordIndex]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <span className="ml-0.5 inline-block h-[1.08em] w-px animate-pulse bg-zinc-300" />
    </span>
  );
}
