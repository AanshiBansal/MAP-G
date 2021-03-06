import React, {Component} from 'react';
import {Button, Header, Icon, Modal, Card, Segment} from 'semantic-ui-react'
import ReactStopwatch from 'react-stopwatch';
import Piles from './Piles'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {pileGame,disable} from "../Actions";

class PileChoosing extends Component{
    state = {
        modalOpen: false,
        stopWatch:false,
        modalOpen2:false,
        redirectHome: false
    };

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false, stopWatch:true });
    openClose = () => {
        this.props.disable({id:2});
        this.props.pileGame();
        this.setState({ modalOpen2: true });
    };
    closeClose = () => {
        this.setState({ redirectHome: true });
    };

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
                <Segment clearing>
                    <Header as='h1' floated='left'>
                        Choose The Pile
                    </Header>
                </Segment>
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
                { (this.state.stopWatch) ?  <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:30"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => this.openClose()}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div style={{float:'right'}}>
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 30 seconds'/>
                            </div>
                        );
                    }}
                /> : null }

                <Modal
                    //trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
                    open={this.state.modalOpen2}
                    onClose={this.closeClose}
                    basic
                    size='small'
                >
                    <Header icon='browser' content='Information'/>
                    <Modal.Content>
                        <h3>
                            Game complete
                        </h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.closeClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                { (this.state.redirectHome) ? <Redirect to="/"/> : null }

                <Piles />
            </div>
        )
    }
}
export default connect(null, { pileGame,disable })(PileChoosing);