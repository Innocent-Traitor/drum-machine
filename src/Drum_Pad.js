import './Drum_Pad.css';
import { useEffect } from 'react';

function DrumPad({soundID, text, audioSrc, parentCallback}) {
    useEffect(() =>  {
        const handleKeyPress = (e) => {
            const key = e.key;
            if (key === text.toLowerCase() || key.toUpperCase() === text) {
              handleClick();

            }
        };
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    });

    const snd = document.getElementById(text);
    const playSound = () => {
        snd.play();
        snd.currentTime=0;

    }

    const handleClick = () => {
      playSound();
      parentCallback(soundID);
    }

  return (
    <div className="drum-pad-div">
      <button 
        className='drum-pad' 
        onClick={handleClick}
        id={soundID}
      >
        <audio className='clip' src={audioSrc} id={text}></audio>
        {text}
      </button>
    </div>
  );
}

export default DrumPad;