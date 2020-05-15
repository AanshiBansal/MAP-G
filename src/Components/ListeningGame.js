import React, {Component} from 'react';
import {Button, Header,Icon, Modal, Card} from 'semantic-ui-react'
import ReactStopwatch from 'react-stopwatch';
import Game2 from "./Game2";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {listeningGame,disable} from "../Actions";

class ListeningGame extends Component{
    state = {
        modalStartOpen: false,
        stopWatch:false,
        modalEndOpen: false,
        redirectHome: false
    };
    handleStartOpen = () => this.setState({ modalStartOpen: true });
    handleStartClose = () => this.setState({ modalStartOpen: false,stopWatch:true });
    handleEndOpen = () => this.setState({ modalEndOpen: true });
    handleEndClose = () => {
        const id = 1;
        this.props.disable({id:id});
        this.setState({ redirectHome: true, isSubmit: true });
        this.props.listeningGame();
    };

    componentDidMount() {
        this.handleStartOpen();
    }

    render() {
        return(
            <div>
                <Modal
                    open={this.state.modalStartOpen}
                    onClose={this.handleStartClose}
                    basic
                    size='small'
                >
                    <Header icon='browser' content='Instructions'/>
                    <Modal.Content>
                        <h3>
                            An audio will be played and certain questions will be displayed. You have to answer those questions in accordance with the audio. The audio can be the played, paused and restated. You have 2 minutes to answer the questions.
                        </h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleStartClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:10"
                    onCallback={this.handleEndOpen}
                    render={({minutes, seconds}) => {
                        const sec = 60*minutes + seconds;
                        return (
                            <div style={{float:'right'}}>
                                <Card header = {'Time spent : '+ sec + ' seconds'} meta ='Total time : 120 seconds' />
                            </div>
                        );
                    }}
                />
                <Modal
                    open={this.state.modalEndOpen}
                    onClose={this.handleEndClose}
                    basic
                    size='small'
                >
                    <Header icon='browser' content='Information'/>
                    <Modal.Content>
                        <h3>
                            Game Complete.
                        </h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleEndClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                { (this.state.redirectHome) ? <Redirect to="/"/> : null }
                <Game2 />
            </div>
        )
    }
}

export default connect(null, { listeningGame,disable })(ListeningGame);


