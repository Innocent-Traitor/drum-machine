import './Drum_Pad.css';
import { useEffect } from 'react';

function DrumPad({soundID, text, audioSrc, parentCallback}) {
    useEffect(() =>  {
        const handleKeyPress = (e) => {
            const key = e.key;
            if (key === text.toLowerCase()) {
              handleClick();

            }
        };
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    });

    const snd = new Audio(audioSrc);
    const playSound = () => {
        snd.play();
        snd.currentTime=0;
        return;
    }

    const handleClick = () => {
      playSound();
      parentCallback(soundID);
    }

  return (
    <div className="drum-pad">
      <button 
        className='drum-pad-button'
        id={soundID} 
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
}

export default DrumPad;