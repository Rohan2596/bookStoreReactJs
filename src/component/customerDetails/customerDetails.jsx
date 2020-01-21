import React, { Component } from 'react';
import './customerDetails.css';
import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import service from '../../service/service'

class CustomerDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Phone_Number: '',
            Pincode: '',
            Email: '',
            Address: '',
            city: '',
            LandMark: '',
            formfilled: false,
            hidden:false
        };

    }
    editDetails = () => {
        this.setState({ formfilled: !this.state.formfilled });
    }
    handleValueChange = (event) => {

        const { name, value } = event.target
        console.log(this.setState({
            [name]: value
        }))
    }

    handleLogin = (e) => {
        this.setState({ formfilled: !this.state.formfilled });
        this.setState({hidden:!this.state.hidden});
        const details = {
            Name: this.state.Name,
            Phone_Number: this.state.Phone_Number,
            Pincode: this.state.Pincode,
            Address: this.state.Address,
            city: this.state.city,
            Email: this.state.Email,
            LandMark: this.state.LandMark,
            Type: this.state.Type

        };
        console.log(details);
       var result= new service().customerDetails(details);
       console.log(result);
    }

    render() {
        return (
            <div className='main'>
                <div className='upper'>
                    <div className='dashboard'>
                        <div className='logo'>
                            <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="optional" />
                        </div>
                        <div className='title'>Bookstore</div>
                        <div className='search'>Search</div>
                    </div>
                </div>
                <div className='subMain'>
                    <div className='lowerP' style={{ height: '530px' }}>
                        <div className='customerDetails'>CustomerDetails</div>
                        <Button component="span" 
                        style={{ marginLeft: "90%", display: this.state.hidden ? 'block' : 'none'}} 
                         
                         onClick={this.editDetails}>Edit</Button>
                        <div className='content'>
                            <div className='name'>
                                <TextField id="outlined-basic" label="Name" name="Name" variant="outlined" value={this.state.Name} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} style={{ width: '35%', marginRight: '0%' }} style={{ width: '100%' }} />
                            </div>
                            <div className='phonenumber'>
                                <TextField id="outlined-basic" label="Phone Number" name="Phone_Number" variant="outlined" value={this.state.Phone_Number} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} style={{ width: '35%', marginRight: '0%' }} style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className='content'>
                            <div className='name'>
                                <TextField id="outlined-basic" label="Pincode" variant="outlined" name="Pincode" value={this.state.Pincode} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} style={{ width: '35%', marginRight: '0%' }} style={{ width: '100%' }} />
                            </div>
                            <div className='phonenumber'>
                                <TextField id="outlined-basic" label="Email" variant="outlined" name="Email" value={this.state.Email} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} style={{ width: '35%', marginRight: '0%' }} style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className='address'>
                            <TextField id="outlined-multiline-static" label="Address" name="Address" multiline rows="3" value={this.state.Address} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} style={{ width: '35%', marginRight: '0%' }} variant="outlined" style={{ width: '66%' }} />
                        </div>
                        <div className='content'>
                            <div className='name'>
                                <TextField id="outlined-basic" label="city/town" name="city" variant="outlined" value={this.state.city} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} style={{ width: '35%', marginRight: '0%' }} style={{ width: '100%' }} />
                            </div>
                            <div className='phonenumber'>
                                <TextField id="outlined-basic" label="Landmark" name="LandMark" variant="outlined" value={this.state.LandMark} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} style={{ width: '100%' }} />
                            </div>
                        </div>

                        <div style={{ paddingLeft: '2%', paddingBottom: '1%' }}>Type</div>
                        <FormControl component="fieldset" style={{ paddingLeft: '2%' }}>
                            {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
                            <RadioGroup aria-label="Type" color="primary" name="Type" row>
                                <FormControlLabel
                                    value="Home"
                                    // checked={this.state.radio === 'Home'} 
                                    onChange={(event) => this.handleValueChange(event)}
                                    control={<Radio />}
                                    disabled={this.state.formfilled}
                                    label="Home" />

                                <FormControlLabel
                                    value="Work" control={<Radio />}
                                    // checked={this.state.radio === 'Work'} 
                                    onChange={(event) => this.handleValueChange(event)}
                                    disabled={this.state.formfilled}
                                    label="Work" />

                                <FormControlLabel
                                    // value="bottom"
                                    // control={<Radio color="primary" />}
                                    // label="Other"
                                    // labelPlacement="end"
                                    value="Other"
                                    // checked={this.state.radio === 'Other'}
                                    onChange={(event) => this.handleValueChange(event)}
                                    disabled={this.state.formfilled}
                                    control={<Radio />}
                                    label="Other" />
                                {/* /> */}

                            </RadioGroup>
                        </FormControl> 

                        <div className='continue' style={{ float: 'right' }} onClick={this.handleLogin} >CONTINUE</div>



                    </div>
                    <div className='lowerP'>
                        Order summary
                    </div>
                </div>

            </div>
        );
    }
}
export default CustomerDetails;