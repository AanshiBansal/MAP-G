import React, {Component} from 'react';
import {Button, Header, Icon, Modal, Segment} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {listeningClicked} from "../Actions";
import soundFile from "../Content/audio_record.mp3";
import AudioPlayer from "react-h5-audio-player";

class ListeningGame extends Component{
    state = {
        modalStartOpen: false,
        redirectQues: false
    };
    handleStartOpen = () => this.setState({ modalStartOpen: true });
    handleStartClose = () => this.setState({ modalStartOpen: false });

    componentDidMount() {
        this.handleStartOpen();
    }

    render() {
        return(
            <div>
                <Segment clearing>
                    <Header as='h1' floated='left'>
                        Listening Game
                    </Header>
                </Segment>
                <Modal
                    open={this.state.modalStartOpen}
                    onClose={this.handleStartClose}
                    basic
                    size='small'
                >
                    <Header icon='browser' content='Instructions'/>
                    <Modal.Content>
                        <h3>
                            An audio will be played and after the audio is complete certain questions will be displayed.
                            You have to answer those questions in accordance with the audio.
                            The audio can be the played, paused and restated.
                            You have 30 seconds to answer the questions.
                        </h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleStartClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                <AudioPlayer ref={c => (this.player = c)}
                             autoPlay = {false}
                             src={soundFile}
                             onPlay={e => { this.props.listeningClicked({a:new Date().toLocaleTimeString(),b:0,emailId:this.props.userInfo.email}); console.log("Audio started playing : "+new Date().toLocaleTimeString())}}
                             onPause={e => { this.props.listeningClicked({a:new Date().toLocaleTimeString(),b:1,emailId:this.props.userInfo.email});console.log("Audio is paused : "+new Date().toLocaleTimeString())}}
                             onEnded={e => { this.props.listeningClicked({a:new Date().toLocaleTimeString(),b:2,emailId:this.props.userInfo.email});console.log("Audio ended : "+new Date().toLocaleTimeString()); this.setState({redirectQues:true}); }}
                             onDragMove={e =>{this.props.listeningClicked({a:new Date().toLocaleTimeString(),b:3,emailId:this.props.userInfo.email}); console.log("Audio is being adjusted : "+new Date().toLocaleTimeString())}}
                />
                { (this.state.redirectQues) ? <Redirect to="/listening-questions"/> : null }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { userInfo: state.auth.userInfo};
};
export default connect(mapStateToProps, { listeningClicked })(ListeningGame);


