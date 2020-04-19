import React, { Component } from 'react';
import {Card, Header, Icon, Image, Modal} from "semantic-ui-react";
import ReactStopwatch from 'react-stopwatch';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {emotionGame,emotionAns} from "../../Actions";

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
    handleOpen = (event) =>  {
        const timestamp = Date.now(); // This would be the timestamp you want to format
        console.log("Emotion detected for picture 14 " + event.target.id + " at " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
        const timeAnswer = new Date().toLocaleTimeString();
        this.props.emotionAns({a:event.target.id,b:14,c:timeAnswer});
        this.setState({ modalOpen: true })
    };
    handleClose = (event) => {
        this.props.emotionGame();
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
                    <Button id='Anger'onClick={this.handleOpen}>Anger</Button>
                    <Button id='Determination' onClick={this.handleOpen}>Determination</Button>
                    <Button id='Disgust' onClick={this.handleOpen}>Disgust</Button>
                    <Button id='Happiness' onClick={this.handleOpen}>Happiness</Button>
                    <Button id='Hope' onClick={this.handleOpen}>Hope</Button>
                    <Button id='Fear' onClick={this.handleOpen}>Fear</Button>
                    <Button id='Sadness' onClick={this.handleOpen}>Sadness</Button>
                    <Button id='Pain' onClick={this.handleOpen}>Pain</Button>
                    <Button id='Surprise' onClick={this.handleOpen}>Surprise</Button>
                    <Button id='Puzzle' onClick={this.handleOpen}>Puzzle element</Button>
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

const mapStateToProps = (state) => {
    return {  emotionData: state.emo.emotionData, userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {emotionGame, emotionAns})(Emotion14);