import React  from 'react';
import Ques from './Ques';
import AudioPlayer from "react-h5-audio-player";
import soundfile from '../Content/audio_record.mp3'
import Ques2 from "./Ques2";
import Ques3 from "./Ques3";
import {Button, Header, Icon, Modal} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {listeningClicked, listeningAns, listeningGame} from "../Actions";

class Game2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            modalOpen: false,
            redirecthome: false
        };// initialise the state
    }
    openClose = () => {
        this.setState({ modalOpe: true });
    };
    closeClose = (event) => {
        this.props.listeningGame();
        this.setState({ redirecthome: true });
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
                         onPlay={e => { this.props.listeningClicked({a:time.toLocaleString(),b:0});console.log("Audio started playing : "+time.toLocaleTimeString())}}
                         onPause={e => { this.props.listeningClicked({a:time.toLocaleString(),b:1});console.log("Audio is paused : "+time.toLocaleTimeString())}}
                         onEnded={e => { this.props.listeningClicked({a:time.toLocaleString(),b:2});console.log("Audio ended : "+time.toLocaleTimeString())}}
                         onDragMove={e =>{this.props.listeningClicked({a:time.toLocaleString(),b:3}); console.log("Audio is being adjusted : "+time.toLocaleTimeString())}}
            />
            <br/>
            <Ques onSelectAnswer={(ans,tim)=>{this.props.listeningAns({a:ans,b:1,c:tim})}} />
            <br />
            <Ques2 onSelectAnswer2={(ans,tim)=>{this.props.listeningAns({a:ans,b:2,c:tim})}}/>
            <br />
            <Ques3 onSelectAnswer3={(ans,tim)=>{this.props.listeningAns({a:ans,b:3,c:tim})}}/>
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
    return {userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {listeningClicked,listeningAns,listeningGame})(Game2);
