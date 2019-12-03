import React  from 'react';
import Ques from './Ques';
import AudioPlayer from "react-h5-audio-player";
import soundfile from '../Content/audio_record.mp3'
import Ques2 from "./Ques2";
import Ques3 from "./Ques3";
import { Button } from 'semantic-ui-react'

class Game2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { time: new Date() }; // initialise the state
    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000); // every 1 seconds
        this.reset = this.reset.bind(this);
    }

    componentWillUnmount() { // delete the interval just before component is removed
        clearInterval(this.update);
    }

    reset =()=>{
        alert("Game completed successfully.");

    };

    render() {
        const { time } = this.state; // retrieve the time from state

        return (<div style={{margin : "30px"}}>
            {/*<h1>Digital Clock</h1>*/}
            {/*<h2>
                 print the string prettily
                {time.toLocaleTimeString()}
            </h2>*/}
            <h1 style={{textAlign: 'center', color: 'orange'}}> GAME 1 </h1>
            <AudioPlayer ref={c => (this.player = c)}
                         autoPlay = {false}
                         src={soundfile}
                         onPlay={e => console.log("Audio started playing : "+time.toLocaleTimeString())}
                         onPause={e => console.log("Audio is paused : "+time.toLocaleTimeString())}
                         onEnded={e => console.log("Audio ended : "+time.toLocaleTimeString())}
                         onDragMove={e => console.log("Audio is being adjusted : "+time.toLocaleTimeString())}
            />
            {/*<Button onClick={this.reset}>Reset</Button>*/}
            <br/>
            <Ques  />
            <br />
            <Ques2 />
            <br />
            <Ques3 />
            <br />

            {/*<Segment basic textAlign={"center"}>*/}
            {/*    <Button primary style={{textAlign: "center"}} onClick={this.reset}>SUBMIT</Button>*/}
            {/*</Segment>*/}
            <Button primary floated="right" onClick={this.reset}>SUBMIT</Button>

        </div>);
    }
}
export default Game2;