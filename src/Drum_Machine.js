import './Drum_Machine.css';
import DrumPad from './Drum_Pad';
import Display from './Display';

function DrumMachine() {
  return (
    <div id='drum-machine'>
      <DrumPad 
        soundID='Heater-1'
        text="Q"
        audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
      />
      <DrumPad 
        soundID='Heater-2'
        text="W"
        audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
      />
    </div>
  );
}

export default DrumMachine;
