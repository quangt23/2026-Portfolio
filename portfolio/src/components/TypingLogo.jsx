import { useEffect, useState } from "react";

export default function TypingLogo({ text = "quang", speed = 80 }) {
  const [displayed, setDisplayed] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed(prev => prev + text[i]);
      setI(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [i, text, speed]);

  return (
    <span className="typing-logo">
      <span className="tilde">~/</span>{" "}
      {displayed}
      <span className="cursor">█</span>
    </span>
  );
}