'use client';

import { cn } from '../utils/cn';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

import PropTypes from 'prop-types';

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: 'easeInOut',
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <div>
        {Array.length > 0 && (
          <div>
            <motion.div ref={scope} className="inline text-left">
              {wordsArray.map((word, idx) => {
                return (
                  <div key={`word-${idx}`} className="inline-block">
                    {word.text.map((char, index) => (
                      <motion.span
                        initial={{}}
                        key={`char-${index}`}
                        className={cn(
                          `  opacity-0 hidden`,
                          word.className
                        )}
                      >
                        {char}
                      </motion.span>
                    ))}
                    &nbsp;
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      className={cn(
        'text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-left',
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500',
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

TypewriterEffect.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      className: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  cursorClassName: PropTypes.string,
};
