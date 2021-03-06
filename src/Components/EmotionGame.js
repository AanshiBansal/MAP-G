import React, {Component} from 'react';
import {Button, Header, Icon, Modal, Card, Segment} from 'semantic-ui-react'
import ReactStopwatch from 'react-stopwatch';
import {connect} from "react-redux";
import {emotionAns, emotionGame} from "../Actions";
import {Redirect} from "react-router-dom";
import Emotion1 from "./EmotionQues/Emotion1";

class EmotionGame extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            redirectstate: false,
            modalOpen: false,
            stopWatch:false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,

        });
    }

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false,stopWatch:true });

    componentDidMount() {
        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleOpen();
    }

    render() {
        return(
            <div>
                <Segment clearing>
                    <Header as='h1' floated='left'>
                        Emotion Predictor
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
                        <h3>
                            <p>You will be shown paragraphs of people with different facial expressions. Choose the word you feel describes best how the person is feeling.</p>
                            <p>Some photographs will be accompanied by a short story describing the situation, where you will have 30 seconds to answer.Other paragraphs will be presented alone, where you will have 7 seconds to answer.</p>
                            <p>Make sure to read each story complete. Some appear same but express a different emotion.</p>
                        </h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                { (this.state.stopWatch) ? <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:30"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => this._onButtonClick()}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div style={{float:'right'}}>
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 30 seconds'/>
                            </div>
                        );
                    }}
                /> :null }
                { (this.state.showComponent) ? <Redirect to="/emotion2"/> : null }
                <Emotion1 />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {emotionAns,emotionGame})(EmotionGame);
