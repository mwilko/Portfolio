import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, startDelay = 0 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const typeTimeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);

        return () => clearTimeout(typeTimeout);
      }
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, delay, text, startDelay]);

  return <span>{currentText}</span>;
};

export default Typewriter;
