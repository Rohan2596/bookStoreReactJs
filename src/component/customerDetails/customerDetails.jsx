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
            formHide: false,
            hidden: false,
            divHide: false,
            buttonHide: true,
            item: null
        };
        console.log(this.props.detail)
        this.state.item = this.props.detail;
        console.log("======>" + this.state.item[0].title)
        // this.state.item = JSON.parse(sessionStorage.getItem("User1"));

    }
    formHide = () => {
        this.setState({ formHide: true })
        console.log("done");
    }
    editDetails = () => {
        this.setState({ formfilled: !this.state.formfilled });
        this.setState({ buttonHide: !this.state.buttonHide });
        this.setState({ hidden: !this.state.hidden });

    }
    handleValueChange = (event) => {

        const { name, value } = event.target
        console.log(this.setState({
            [name]: value
        }))
    }

    onSubmit = (e) => {
        this.setState({ formfilled: !this.state.formfilled });
        this.setState({ buttonHide: !this.state.buttonHide });
        this.setState({ hidden: !this.state.hidden });
        this.setState({ divHide: true })

    }
    onCheckout = () => {
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
        var result = new service().customerDetails(details);
        console.log(result);
    }


    render() {
        // for (let i = 0; i < this.state.item.length; i++) {
        //     let item = null;
        //     item = this.state.item[i];
        var Books = this.state.item.map((item, i) => {
            return (
                <div>
                    <div className="divHide" style={{ display: this.state.divHide ? 'block' : 'none' }}>
                        <div>
                            <div className="cart-image">
                                <img className='image' src={item.image}></img>
                                <div className="book-title">{item.title}
                                    <div className="book-author">{item.author}</div>
                                    <div className="book-price"> Rs.{item.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <Button className="editButton" component="span"
                    style={{
                        marginLeft: '90%'
                    }}
                    onClick={this.formHide}>Edit</Button>

                <div className='subMain'>
                    <div className="border" >
                        <div className='orderSummary'>CustomerDetails</div>
                        <div className='formHide' style={{ display: this.state.formHide ? 'block' : 'none' }}>
                            <Button className="editButton" component="span"
                                style={{
                                    marginLeft: '90%',
                                    display: this.state.hidden ? 'block' : 'none'
                                }}
                                onClick={this.editDetails}>Edit</Button>

                            <div className='content'>
                                <div className='name'>
                                    <TextField id="outlined-basic" className='textField' label="Name" name="Name" variant="outlined" value={this.state.Name} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} />
                                </div>
                                <div className='phonenumber'>
                                    <TextField id="outlined-basic" className='testField' label="Phone Number" name="Phone_Number" variant="outlined" value={this.state.Phone_Number} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} />
                                </div>
                            </div>
                            <div className='content'>
                                <div className='name'>
                                    <TextField id="outlined-basic" className='textField' label="Pincode" variant="outlined" name="Pincode" value={this.state.Pincode} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} />
                                </div>
                                <div className='phonenumber'>
                                    <TextField id="outlined-basic" className='textField' label="Email" variant="outlined" name="Email" value={this.state.Email} variant="outlined" onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} />
                                </div>
                            </div>
                            <div className='address'>
                                <TextField id="outlined-multiline-static" style={{ width: '66%' }} label="Address" name="Address" multiline rows="3" value={this.state.Address} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} variant="outlined" />
                            </div>
                            <div className='content'>
                                <div className='name'>
                                    <TextField id="outlined-basic" className='textField' label="city/town" name="city" variant="outlined" value={this.state.city} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} />
                                </div>
                                <div className='phonenumber'>
                                    <TextField id="outlined-basic" className='textField' label="Landmark" name="LandMark" variant="outlined" value={this.state.LandMark} onChange={(event) => this.handleValueChange(event)} disabled={this.state.formfilled} />
                                </div>
                            </div>

                            <div style={{ paddingLeft: '2%', paddingBottom: '1%' }}>Type</div>
                            <FormControl component="fieldset" style={{ paddingLeft: '2%' }}>
                                <RadioGroup aria-label="Type" color="primary" name="Type" row>
                                    <FormControlLabel
                                        value="Home"
                                        onChange={(event) => this.handleValueChange(event)}
                                        control={<Radio />}
                                        disabled={this.state.formfilled}
                                        label="Home" />

                                    <FormControlLabel
                                        value="Work" control={<Radio />}
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled}
                                        label="Work" />

                                    <FormControlLabel
                                        value="Other"
                                        onChange={(event) => this.handleValueChange(event)}
                                        disabled={this.state.formfilled}
                                        control={<Radio />}
                                        label="Other" />
                                </RadioGroup>
                            </FormControl>

                            <div className='continue' style={{ display: this.state.buttonHide ? 'block' : 'none' }} onClick={this.onSubmit} >CONTINUE</div>
                        </div>
                    </div>

                </div>
                <div className='border' >
                    <div className="orderSummary">Order Summary</div>
                    {Books}
                    <div className="buttonHide" style={{ display: this.state.divHide ? 'block' : 'none' }}>
                        <Button onClick={this.onCheckout} variant="contained" color="primary">done</Button>
                    </div>
                </div>
            </div>
        );
    }
    // }
}
export default CustomerDetails;