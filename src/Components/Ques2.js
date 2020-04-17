import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react'

class Ques2 extends Component{
    state = {};
    handleChange = (e, { value }) => {
        console.log("Question 2: Option " + value.toUpperCase() + " is selected at "+ new Date().toLocaleTimeString());
        this.setState({ value });
        const timeAnswer = new Date().toLocaleTimeString();
        this.props.onSelectAnswer2(timeAnswer);
    };

    render() {
        return (
            <Form>
                <Form.Field>
                    <b>Question 2 : What is the name of the contest?</b>
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='River of Spirit'
                        name='radioGroup'
                        value='a'
                        checked={this.state.value === 'a'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='River of words'
                        name='radioGroup'
                        value='b'
                        checked={this.state.value === 'b'}
                        onChange={this.handleChange}
                    />

                </Form.Field>
                <Form.Field>
                    <Radio
                        label='River of Wisdom'
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

export default Ques2;