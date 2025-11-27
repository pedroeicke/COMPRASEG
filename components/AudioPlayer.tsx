import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Note: Using a placeholder audio file. In production, replace with actual tactical soundtrack.
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        audioRef.current.volume = 0.3; // Low volume for background
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} src={audioUrl} loop />
      <button 
        onClick={toggleAudio}
        className="bg-navy-900/80 backdrop-blur border border-white/20 hover:border-operational-yellow text-white p-3 rounded-full shadow-lg transition-all hover:scale-105 group"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-operational-yellow" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-white" />
        )}
      </button>
      {!isPlaying && (
        <span className="absolute left-14 top-2 text-xs bg-navy-900 text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Trilha Sonora
        </span>
      )}
    </div>
  );
};