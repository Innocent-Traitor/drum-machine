import './Drum_Pad.css';
import { useEffect } from 'react';

function DrumPad({soundID, text, audioSrc}) {
    useEffect(() =>  {
        const handleKeyPress = (e) => {
            const key = e.key;
            if (key === text.toLowerCase()) {
                playSound();

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

  return (
    <div className="drum-pad">
      <button 
        className='drum-pad-button'
        id={soundID} 
        onClick={playSound}
      >
        {text}
      </button>
    </div>
  );
}

export default DrumPad;