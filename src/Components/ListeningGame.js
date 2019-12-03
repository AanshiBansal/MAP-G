import React, {Component} from 'react';
import {Button, Header,Icon, Modal, Card} from 'semantic-ui-react'
import ReactStopwatch from 'react-stopwatch';
import Game2 from "./Game2";

export default class ListeningGame extends Component{
    state = {
        modalOpen: false,
        stopWatch:false
    };

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false,stopWatch:true });

    componentDidMount() {
        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleOpen();
    }

    componentWillUnmount() {

    }

    render() {
        return(
            <div>
                <Modal
                    //trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
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
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:02:00"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => console.log('Finish')}
                    render={({formatted, hours, minutes, seconds}) => {
                        const sec = 60*minutes + seconds;
                        return (
                            <div style={{float:'right'}}>
                                <Card header = {'Time spent : '+ sec + ' seconds'} meta ='Total time : 120 seconds' />
                            </div>
                        );
                    }}
                />

                <Game2 />
            </div>
        )
    }
}
