import React, { useEffect, useState } from "react";

const texts = [
  "study buddy.",
  "math mentor.",
  "essay helper.",
  "science guide.",
  "AI-powered tutor."
];

export default function KhanmigoHeading() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      // Pause before next word
      const pause = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Wait before changing word

      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex]);

  return (
    <h1 className="display-5 fw-semibold text-center">
      Khanmigo is your always-available <br />
      <span className="text-primary typing-text">{displayedText}</span>
      <span className="blinking-cursor">|</span>
    </h1>
  );
}
