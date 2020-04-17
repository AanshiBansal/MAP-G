import React  from 'react';
import Ques from './Ques';
import AudioPlayer from "react-h5-audio-player";
import soundfile from '../Content/audio_record.mp3'
import Ques2 from "./Ques2";
import Ques3 from "./Ques3";
import {Button, Header, Icon, Modal} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {listeningClicked} from "../Actions";

class Game2 extends React.Component{
    constructor(props) {
        super(props);
        this.onSelectAnswer = this.onSelectAnswer.bind(this);
        this.onSelectAnswer2 = this.onSelectAnswer2.bind(this);
        this.onSelectAnswer3 = this.onSelectAnswer3.bind(this);
        this.state = {
            time: new Date(),
            modalOpen: false,
            redirecthome: false,
            audioStart:[],
            audioPause:[],
            audioEnd:[],
            audioAdjust:[],
            answer1: '',
            answer2:'',
            answer3:''
        };// initialise the state
    }
    openClose = () => {
        // console.log(this.state.answer1);
        // console.log(this.state.answer2);
        // console.log(this.state.answer3);
        this.props.listeningClicked({
            emailId: this.props.userInfo.email,
            pauseTimeStart:this.state.audioPause,
            pauseTimeEnd:this.state.audioStart,
            adjusTimings:this.state.audioAdjust,
            endTimings:this.state.audioEnd,
            ans1:this.state.answer1,
            ans2:this.state.answer2,
            ans3:this.state.answer3
        });
        this.setState({ modalOpe: true });
    };
    closeClose = (event) => {
        this.props.listeningClicked({
            emailId: this.props.userInfo.email,
            pauseTimeStart:this.state.audioPause,
            pauseTimeEnd:this.state.audioStart,
            adjusTimings:this.state.audioAdjust,
            endTimings:this.state.audioEnd,
            ans1:this.state.answer1,
            ans2:this.state.answer2,
            ans3:this.state.answer3
        });
        this.setState({ redirecthome: true });
    };
    onSelectAnswer(ansValue){
        console.log(ansValue);
        this.setState({
            answer1: ansValue
        });
    }

    onSelectAnswer2(ansValue){
        console.log(ansValue);
        this.setState({
            answer2: ansValue
        });
    }

    onSelectAnswer3(ansValue){
        console.log(ansValue);
        this.setState({
            answer3: ansValue
        });
    }


    handleClick = (a,b) => {
        const { time } = this.state;
        if(b===0) {
            this.state.audioStart.push(time.toLocaleTimeString());
        }
        if(b===1) {
            this.state.audioPause.push(time.toLocaleString());
        }
        if(b===2) {
            this.state.audioEnd.push(time.toLocaleString());
        }
        if(b===3) {
            this.state.audioAdjust.push(time.toLocaleString());
        }
    };

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000); // every 1 seconds
    }
    componentWillUnmount() {
        // delete the interval just before component is removed
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state; // retrieve the time from state
        return (<div style={{margin : "30px"}}>
            <AudioPlayer ref={c => (this.player = c)}
                         autoPlay = {false}
                         src={soundfile}
                         onPlay={e => { this.handleClick(time.toLocaleString(),0);console.log("Audio started playing : "+time.toLocaleTimeString())}}
                         onPause={e => { this.handleClick(time.toLocaleString(),1);console.log("Audio is paused : "+time.toLocaleTimeString())}}
                         onEnded={e => { this.handleClick(time.toLocaleString(),2);console.log("Audio ended : "+time.toLocaleTimeString())}}
                         onDragMove={e =>{this.handleClick(time.toLocaleString(),3); console.log("Audio is being adjusted : "+time.toLocaleTimeString())}}
            />
            <br/>
            <Ques onSelectAnswer={this.onSelectAnswer} />
            <br />
            <Ques2 onSelectAnswer2={this.onSelectAnswer2}/>
            <br />
            <Ques3 onSelectAnswer3={this.onSelectAnswer3}/>
            <br />
            <Modal
                open={this.state.modalOpe}
                onClose={this.closeClose}
                basic
                size='small'
            >
                <Header icon='browser' content='Information'/>
                <Modal.Content>
                    <h3>
                         Game complete.
                    </h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.closeClose} inverted>
                        <Icon name='checkmark'/> Got it
                    </Button>
                </Modal.Actions>
            </Modal>
            { (this.state.redirecthome) ? <Redirect to="/"/> : null }
            <Button primary floated="right" onClick={this.openClose}>SUBMIT</Button>
                </div>);
    }
}
const mapStateToProps = (state) => {
    return {  listeningData: state.list.listeningData, userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {listeningClicked})(Game2);
