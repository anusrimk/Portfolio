import React, { useEffect, useState } from "react";

function Landing() {
  const fullText = "Anusri Karmokar";
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingSpeed = 120; // Typing speed per character
    let deletingSpeed = 60; // Deleting speed per character
    let delayBeforeDeleting = 1500; // Pause after full text is displayed
    let delayBeforeTyping = 500; // Pause after deleting

    if (!isDeleting && index < fullText.length) {
      // Typing forward
      setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // Deleting backward
      setTimeout(() => {
        setDisplayText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (index === fullText.length) {
      // Wait before deleting
      setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
    } else if (index === 0 && isDeleting) {
      // Wait before typing again
      setTimeout(() => setIsDeleting(false), delayBeforeTyping);
    }
  }, [index, isDeleting]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section className="w-full h-full bg-background flex flex-col justify-center gap-4 items-start p-20">
      <h1 className="font-pixel text-5xl">Hola, this is</h1>

      {/* Typewriter Effect */}
      <div className="w-full h-20 mb-8">
        <h1 className="font-pixel text-8xl text-main">
          {displayText}
          {cursorVisible && <span className="text-text-light">|</span>}
        </h1>
      </div>

      <h1 className="font-pixel text-4xl mt-4 text-main">
        &quot;Pixels, Passion & Purpose – Where Design Meets Experience.&quot;
      </h1>
    </section>
  );
}

export default Landing;
