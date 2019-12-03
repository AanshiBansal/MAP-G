import React, {Component} from 'react';
import {Button, Header,Icon, Modal, Card} from 'semantic-ui-react'
import ReactStopwatch from 'react-stopwatch';
import Piles from './Piles'
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
                        <h3>The goal of this game is to win as much money as possible by drawing cards. Some cards will earn you a reward, but some cards will have penality and you will loose money. You will start with a $2000 loan. Click on any of the four piles to draw a card from that pile. You are free to switch from one pile to another at any time, and as often as you wish. Continue drawing cards until the game is over.</h3>
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
                    limit="00:00:60"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => console.log('Finish')}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div >
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 60 seconds'/>
                            </div>
                        );
                    }}
                />

                <Game2 />
            </div>
        )
    }
}
