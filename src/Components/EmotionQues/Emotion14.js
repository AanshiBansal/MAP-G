import React, { Component } from 'react';
import {Card, Header, Icon, Image, Modal} from "semantic-ui-react";
import ReactStopwatch from 'react-stopwatch';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import {Redirect} from "react-router-dom";

class Emotion14 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            modalOpen: false,
            redirecthome:false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }
    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = (event) => {
        const timestamp = Date.now(); // This would be the timestamp you want to format
        console.log("Emotion detected for picture 14 " + event.target.id + " at " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
        this.setState({ redirecthome: true });
    };


    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (
            <div>
                <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:05"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => this.handleOpen()}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div style={{float:'right'}}>
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 30 seconds'/>
                            </div>
                        );
                    }}
                />
                <Card header ='14/14' style={{textAlign:'center'}}/>
                <Image src={require('./pic14.jpg')} centered/>
                <br/>
                <p>
                    <span>
                      This is a story of a man who went to the
horse races to bet his last five hundred
dollars. He bet it all on horse number 7.
He is now watching the horses make the
final turn down the stretch to the finish
line. Horse number 9 and horse number 7
are neck and neck. It looks like horse
number 7 is going to take the lead.
                    </span>
                </p>
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button id='Anger'onClick={this.handleClose}>Anger</Button>
                    <Button id='Determination' onClick={this.handleClose}>Determination</Button>
                    <Button id='Disgust' onClick={this.handleClose}>Disgust</Button>
                    <Button id='Happiness' onClick={this.handleClose}>Happiness</Button>
                    <Button id='Hope' onClick={this.handleClose}>Hope</Button>
                    <Button id='Fear' onClick={this.handleClose}>Fear</Button>
                    <Button id='Sadness' onClick={this.handleClose}>Sadness</Button>
                    <Button id='Pain' onClick={this.handleClose}>Pain</Button>
                    <Button id='Surprise' onClick={this.handleClose}>Surprise</Button>
                    <Button id='Puzzle' onClick={this.handleClose}>Puzzle element</Button>
                </p>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size='small'
                >
                    <Header icon='browser' content='Instructions'/>
                    <Modal.Content>
                        <h3>
                            <p> Game complete. </p>
                        </h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                { (this.state.redirecthome) ? <Redirect to="/"/> : null }
            </div>
        )
    }
}

export default Emotion14;