import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Typing Speed Randomness for realism
      setDelta(isDeleting ? deletingSpeed : typingSpeed - Math.random() * 50);

      if (!isDeleting && text === fullText) {
        // Finished typing word, pause before deleting
        setDelta(pauseTime);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        // Finished deleting, start next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(typingSpeed);
      }
    };

    const ticker = setTimeout(handleTyping, delta);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime, delta]);

  return (
    <span className="border-r-2 border-blue-500 pr-1 animate-pulse font-bold text-blue-600 dark:text-blue-400">
      {text}
    </span>
  );
};

export default Typewriter;
