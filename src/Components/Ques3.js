import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react'
import {connect} from "react-redux";
import {listeningClicked} from "../Actions";

class Ques3 extends Component{
    state = {};
    handleChange = (e, { value }) => {
        console.log("Question 3: Option " + value.toUpperCase() + " is selected at "+ new Date().toLocaleTimeString());
        this.setState({ value });
        const timeAnswer = new Date().toLocaleTimeString();
        const ema=this.props.userInfo.email;
        this.props.onSelectAnswer3(ema,timeAnswer,value.toUpperCase());
    };
    render() {
        return (
            <Form>
                <Form.Field>
                    <b>Question 3 : Did the customer order dessert straight away?</b>
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='No, she wanted to wait'
                        name='radioGroup'
                        value='a'
                        checked={this.state.value === 'a'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Yes, she wanted it with the food'
                        name='radioGroup'
                        value='b'
                        checked={this.state.value === 'b'}
                        onChange={this.handleChange}
                    />

                </Form.Field>
                <Form.Field>
                    <Radio
                        label='She was confused'
                        name='radioGroup'
                        value='c'
                        checked={this.state.value === 'c'}
                        onChange={this.handleChange}
                    />

                </Form.Field>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {  listeningData: state.list.listeningData, userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {listeningClicked})(Ques3);