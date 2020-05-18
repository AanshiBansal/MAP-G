import React, { Component } from 'react'
import { Button } from 'semantic-ui-react/index'
import soundfile from '../Content/audio_record2.mp3'


class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {

            play: false,
            pause: true

        };
        this.audio = new Audio(soundfile);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);

    }

    play(){
        this.setState({
            play: true,
            pause: false
        });
        console.log(this.audio);
        this.audio.play();
    }

    pause(){
        this.setState({ play: false, pause: true });
        this.audio.pause();
    }

    render() {

        return (
            <div>
                <Button onClick={this.play}>Play</Button>
                <Button onClick={this.pause}>Pause</Button>
            </div>
        );
    }
}


export default Music;