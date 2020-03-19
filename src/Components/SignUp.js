import React,{ Component } from 'react'
import { Form, Input, Button, Select } from 'semantic-ui-react'
import {connect} from "react-redux";

const genderOptions = [
    { key: 'm', text: 'Male', value: 1 },
    { key: 'f', text: 'Female', value: 2 },
    { key: 'o', text: 'Other', value: 3 },
];

class SignUp extends Component{
    render(){
        return(
            <Form>
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder={this.props.userInfo.email} readOnly
                    error={{
                        content: 'Please enter a valid email address',
                        pointing: 'below',
                    }}
                />
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder={this.props.userInfo.fname} readOnly
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder={this.props.userInfo.lname} readOnly
                    />
                </Form.Group>
                <Form.Group width='equal'>
                    <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                        placeholder='Gender'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
                    <Form.Field
                        id='form-input-control-age'
                        control={Input}
                        label='Age'
                        placeholder='Age'
                    />
                    <Form.Field
                        id='form-input-control-experience'
                        control={Input}
                        label='Teaching Experience'
                        placeholder='In Years'
                    />
                </Form.Group>
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirm'
                    label='Label with htmlFor'
                />
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userInfo: state.auth.userInfo };
};

export default connect(
    mapStateToProps,null
)(SignUp);