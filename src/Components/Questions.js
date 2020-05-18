import React  from 'react';
import Ques1 from './Ques1';
import Ques2 from "./Ques2";
import Ques3 from "./Ques3";
import {Button, Card, Header, Icon, Modal} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {listeningAns, listeningGame,disable} from "../Actions";
import ReactStopwatch from "react-stopwatch";

class Questions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            redirectHome: false
        };
    }
    handleModelOpen = () => {
        this.setState({ modalOpen: true });
    };
    handleModelClose = () => {
        this.props.disable({id:1});
        this.props.listeningGame();
        this.setState({ redirectHome: true });
    };
    render() {
        return (
            <div style={{margin : "30px"}}>
                <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:10"
                    onCallback={this.handleModelOpen}
                    render={({minutes, seconds}) => {
                        const sec = 60*minutes + seconds;
                        return (
                            <div style={{float:'right'}}>
                                <Card header = {'Time spent : '+ sec + ' seconds'} meta ='Total time : 30 seconds' />
                            </div>
                        );
                    }}
                />
                <br/>
                <Ques1 onSelectAnswer={(email,ans,time)=>{this.props.listeningAns({id:1,emailId:email,a:ans,b:"1",c:time})}} />
                <br />
                <Ques2 onSelectAnswer2={(email,ans,time)=>{this.props.listeningAns({id:2,emailId:email,a:ans,b:"2",c:time})}}/>
                <br />
                <Ques3 onSelectAnswer3={(email,ans,time)=>{this.props.listeningAns({id:3,emailId:email,a:ans,b:"3",c:time})}}/>
                <br />
                <Button primary floated="right" onClick={this.handleModelOpen}>SUBMIT</Button>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleModelClose}
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
                        <Button color='green' onClick={this.handleModelClose} inverted>
                            <Icon name='checkmark'/> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
                { (this.state.redirectHome) ? <Redirect to="/"/> : null }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {userInfo:state.auth.userInfo };
};
export default connect(mapStateToProps, {listeningAns,listeningGame,disable})(Questions);
