import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react'
import {connect} from "react-redux";
import {listeningClicked} from "../Actions";

class Ques2 extends Component{
    state = {};
    handleChange = (e, { value }) => {
        console.log("Question 2: Option " + value.toUpperCase() + " is selected at "+ new Date().toLocaleTimeString());
        this.setState({ value });
        const timeAnswer = new Date().toLocaleTimeString();
        const ema=this.props.userInfo.email;
        this.props.onSelectAnswer2(ema,timeAnswer, value.toUpperCase());
    };
    render() {
        return (
            <Form>
                <Form.Field>
                    <b>Question 2 : Which dessert is not vegetarian?</b>
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Jelly'
                        name='radioGroup'
                        value='a'
                        checked={this.state.value === 'a'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Apple Pudding'
                        name='radioGroup'
                        value='b'
                        checked={this.state.value === 'b'}
                        onChange={this.handleChange}
                    />

                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Cake Jar'
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

export default connect(mapStateToProps, {listeningClicked})(Ques2);