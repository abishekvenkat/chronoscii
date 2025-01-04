import React from 'react';
import { Github } from 'lucide-react';

export default function GithubLink() {
  return (
    <a 
      href="https://github.com/abishekvenkat/chronoscii" 
      target="_blank" 
      rel="noopener noreferrer"
      className="absolute bottom-4 text-gray-500 hover:text-gray-400 transition-colors"
    >
      <Github size={24} />
    </a>
  );
}