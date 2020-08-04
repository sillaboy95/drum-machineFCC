import React from 'react';
import { DrumPad } from './components'


const myDrumPads = [{
  id: 'q',
  letter: 'Q', 
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  description: 'Heater-1'}, 
 {
  id: 'w',
  letter: 'W',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
 description: 'Heater-2'},
{
  id: 'e',
  letter: 'E',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  description: 'Heater-3'},
{
  id: 'a',
  letter: 'A',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  description: 'Heater-4'},
{
  id: 's',
  letter: 'S',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  description: 'Clap'},
{
  id: 'd',
  letter: 'D',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  description: 'Open-HH'},
{
  id: 'z',
  letter: 'Z',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  description: "Kick-n'-Hat"},
{
  id: 'x',
  letter: 'X',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  description: 'Kick'},
{
  id: 'c',
  letter: 'C',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  description: 'Closed-HH'}                    
]


  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Click or Press Key'
    };
 this.handleDisplay = this.handleDisplay.bind(this);
   
  }
  
  handleDisplay(display) {
    this.setState({display})
  }
  
  render() {
    return (
      <div className="container-fluid" id = "drum-machine">
        <div className="title-container"><h1>FCC Drum Machine</h1></div>
        <div className="drumpad-container">
          <div className="description-container">
          <h3 id = "display">{this.state.display}</h3></div>
          <div id = "keyboard">
          {myDrumPads.map(obj => 
            <DrumPad 
              id = {obj.id}
              letter = {obj.letter}
              sound = {obj.sound}
              description = {obj.description}
              handleDisplay = {this.handleDisplay}
            />)}
        </div>
        </div>
      </div>
    );
  }
}


export default App;
