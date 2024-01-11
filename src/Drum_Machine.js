import './Drum_Machine.css';
import DrumPad from './Drum_Pad';
import Display from './Display';
import { useState } from 'react';


function DrumMachine() {
  const [text, setText] = useState('');

  let displayMessage = '';
  const modifyDisplay = (data) => {
    setText(data);
  }


  return (
    <div id='drum-machine'>
      <div className='drum-pad-holder'>
        <DrumPad 
          soundID='Heater-1'
          text="Q"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
          parentCallback={modifyDisplay}
        />
        <DrumPad 
          soundID='Heater-2'
          text="W"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
          parentCallback={modifyDisplay}
        />
        <DrumPad 
          soundID='Heater-3'
          text="E"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
          parentCallback={modifyDisplay}
        />
        <DrumPad 
          soundID='Heater-4'
          text="A"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
          parentCallback={modifyDisplay}
        />
        <DrumPad 
          soundID='Clap'
          text="S"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
          parentCallback={modifyDisplay}
        />
        <DrumPad 
          soundID='Open-HH'
          text="D"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
          parentCallback={modifyDisplay}
        />
        <DrumPad 
          soundID='Kick-n-Hat'
          text="Z"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
          parentCallback={modifyDisplay}
        />
        <DrumPad 
          soundID='Kick'
          text="X"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
          parentCallback={modifyDisplay}
        />
        <DrumPad 
          soundID='Closed-HH'
          text="C"
          audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
          parentCallback={modifyDisplay}
        />
      </div>

      <Display
        msg={text}
      />

    </div>
  );
}

export default DrumMachine;
