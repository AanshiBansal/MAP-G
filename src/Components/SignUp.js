import React,{ Component } from 'react'
import { Form, Input, Button, Select } from 'semantic-ui-react'
import {connect} from "react-redux";
import {registerUser} from "../Actions";

const genderOptions = [
    { text: 'Male', value: 1 },
    { text: 'Female', value: 2 },
    { text: 'Other', value: 3 },
];
const experienceOptions = [
    { text: 'School', value: 1 },
    { text: 'College', value: 2 },
];

class SignUp extends Component{
    state = {
        email:this.props.userInfo.email,
        name:this.props.userInfo.name,
        age:null,
        teachingExp:null,
        teachingField:2,
        openID:this.props.userInfo.openID,
        gender:1,
        games_played:[false,false,false,false,false],
        loading:false
    };
    handleChange = (e,{id,value}) => this.setState({[id]:parseInt(value)});

    handleSubmit = () => {
        this.setState({
            loading: true
        });
        const data = {...this.state};
        delete data.loading;
        console.log(data);
        this.props.registerUser(data, () => {
            this.setState(
                {
                        loading: false
                });
            console.log(this.props.history);
            this.props.history.push('/');
        });
    };
    render(){
        return(
            <div>
            <Form onSubmit = {this.handleSubmit} loading={this.state.loading} >
                <Form.Input
                    control={Input}
                    label='Email'
                    value={this.state.email} readOnly
                />
                <Form.Input
                    control={Input}
                    label='Name'
                    value={this.state.name} readOnly
                />

                <Form.Group width='equal'>
                    <Form.Field
                        required
                        id='gender'
                        control={Select}
                        options={genderOptions}
                        label='Gender'
                        placeholder='Gender'
                        value={this.state.gender}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        required
                        id='age'
                        label='Age'
                        placeholder='Age'
                        type='number'
                        onChange={this.handleChange}
                    />

                </Form.Group>
                <Form.Group>
                    <Form.Field required
                        id={'teachingField'}
                        control={Select}
                        options={experienceOptions}
                        label='Teaching Field'
                        placeholder='Teaching Field'
                        value={this.state.teachingField}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        required
                        id='teachingExp'
                        control={Input}
                        label='Teaching Experience'
                        placeholder='In Years'
                        type='number'
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Field
                    control={Button}
                    content='Register'
                />
            </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userInfo: state.auth.userInfo };
};

export default connect(
    mapStateToProps,{registerUser}
)(SignUp);