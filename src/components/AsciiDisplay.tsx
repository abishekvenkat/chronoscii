import React from 'react';
import { calculateYearProgress } from '../utils/dateUtils';
import Tooltip from './Tooltip';
import GithubLink from './GithubLink';

const ASCII_ART = `░▒▓███████▓▒░░▒▓████████▓▒░▒▓███████▓▒░░▒▓████████▓▒░ 
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░        
       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░        
 ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░░▒▓███████▓▒░  
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░ 
░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░ 
░▒▓████████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓███████▓▒░  
                                                      
                                                      `;

const AsciiDisplay: React.FC = () => {
  const yearProgress = calculateYearProgress();
  const percentComplete = (yearProgress * 100).toFixed(1);
  const now = new Date();

  const renderAsciiArt = () => {
    const lines = ASCII_ART.split('\n');
    const totalChars = ASCII_ART.replace(/\n/g, '').length;
    const coloredChars = Math.floor(totalChars * yearProgress);
    let charCount = 0;

    return lines.map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {Array.from(line).map((char, charIndex) => {
          const currentCharIndex = charCount++;
          const isColored = currentCharIndex < coloredChars;
          return (
            <span
              key={`${lineIndex}-${charIndex}`}
              className={isColored ? 'text-emerald-500' : 'text-gray-500'}
            >
              {char}
            </span>
          );
        })}
        {lineIndex < lines.length - 1 && '\n'}
      </React.Fragment>
    ));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative p-4">
      <div className="relative group">
        <pre className="font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-pre overflow-x-auto max-w-full">
          {renderAsciiArt()}
        </pre>
        <Tooltip date={now} percentComplete={percentComplete} />
      </div>
      <GithubLink />
    </div>
  );
};

export default AsciiDisplay;