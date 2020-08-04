import React from 'react';


class DrumPad extends React.Component {
    constructor(props) {
      super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    
    handleClick() {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.description)
    }
    
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    window.focus()
  }
  
    handleKeyDown(event) {
    if (event.keyCode === this.props.letter.charCodeAt())
      {this.audio.play()
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.description)
      }
    }
    
    
    
    render() {
      return (
        <div className = "drum-pad" id = {this.props.id} onClick = {this.handleClick}>
          <div className="p-container"><p>{this.props.letter}</p></div>
          <audio
            ref = {ref => this.audio = ref}
            id = {this.props.letter}
            src = {this.props.sound}
            className =' clip'
            >
          </audio>
        </div>
      );
    }
  }

  export default DrumPad
  