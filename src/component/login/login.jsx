import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../login/login.css'
import customer from '../../service/service'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            passwordHide: true,
            errors: {
                userName: '',
                password: ''
            },
        };
        // console.log('asdfasdf', this.props.formDetails)
    }

    handleValueChange = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'userName':
                errors.userName = value.length < 3
                    ? 'minimum 3 characters !'
                    : '';
                break;
            case 'password':
                errors.password = value.length < 5
                    ? 'minimum 5 characters for password!'
                    : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => {
            console.log(errors)
        })
    }

    onSubmit = () => {
        const validateForm = (errors) => {
            let valid = false;
            
            if (this.state.userName.length > 3 && this.state.password.length > 4) {
                valid = true;
                Object.values(errors).forEach(
                    (val) => val.length > 0 && (valid = false)
                );
                return valid;
            }
        }
        if (validateForm(this.state.errors)) {
            const details = {
                userName: this.state.userName,
                password: this.state.password
            };
            console.log("fdererty",details);
            new customer().getCustomerDetails(details).then(data => {
                this.props.history.push('/customerSummery',{data: data});
                console.log("data====>",data)
            })
            
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className='detailsContactsLogin'> LOGIN
                                <div style={{ marginBottom: "5%", backgroundColor: "aliceblue" }}>
                        <TextField
                            id="outlined-basic"
                            className='textField'
                            label="UserName"
                            name="userName"
                            variant="outlined"
                            required
                            value={this.state.userName}
                            onChange={(event) => this.handleValueChange(event)}
                        />
                        {errors.userName.length > 0 && <span className="error">{errors.userName}</span>}
                    </div>
                    <div style={{ backgroundColor: "aliceblue" }}>
                        <TextField
                            id="outlined-basic1"
                            className='textField'
                            type={this.state.passwordHide ? "password" : "text"}
                            label="password"
                            name="password"
                            required
                            variant="outlined"
                            value={this.state.password}
                            onChange={(event) => this.handleValueChange(event)}
                        />
                        {errors.password.length > 0 && <span className="error">{errors.password}</span>}
                    </div>
                    <Button variant="contained" color="primary" style={{ marginBottom: "3%", marginLeft: "13%", marginTop: "5%" }} onClick={() => { this.onSubmit() }} >
                        LOGIN
                    </Button>
                </div>
            </div>

        )
    }
}
export default Login;