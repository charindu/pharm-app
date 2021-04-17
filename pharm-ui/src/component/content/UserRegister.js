import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';
import {ToastProvider, useToasts} from 'react-toast-notifications'
import ToastMessage from "../common/ToastMessage";

class UserRegister extends Component {

    userArr = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobileNumber: '',
        address: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            user: this.userArr,
            isSaved:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let user = {...this.state.user};
        user[name] = value;
        this.setState({user});
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.user);
        console.log(this.state.user)
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.user)
        };
        fetch('/user/create', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                this.setState({ isSaved: data.isSuccess })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    render() {

        /*if(this.state.isSaved){
            return (
                <div className="content-wrapper">
                    <section className="content">
                        <div className="container-fluid">
                            <Alert variant='success'>
                                This is a success alert—check it out!
                            </Alert>
                        </div>
                    </section>
                </div>
            )
        }*/

        const {user} = this.state;
        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-primary">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">First Name</label>
                                                        <input type="text" className="form-control"
                                                               id="inpFirstName" placeholder="First Name"
                                                               name="firstName" onChange={this.handleChange} value={user.firstName || ''} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Last Name</label>
                                                        <input type="text" className="form-control"
                                                               id="inpLastName" placeholder="Last Name"
                                                               name="lastName" onChange={this.handleChange} value={user.lastName || ''} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Email</label>
                                                        <input type="text" className="form-control"
                                                               id="inpEmail" placeholder="Email"
                                                               name="email" onChange={this.handleChange} value={user.email || ''} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Password</label>
                                                        <input type="password" className="form-control"
                                                               id="inpPassword" placeholder="Password"
                                                               name="password" onChange={this.handleChange} value={user.password || ''} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Mobile No</label>
                                                        <input type="text" className="form-control"
                                                               id="inpMobileNumber" placeholder="Mobile No"
                                                               name="mobileNumber" onChange={this.handleChange} value={user.mobileNumber || ''} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Address</label>
                                                        <input type="text" className="form-control"
                                                               id="inpAddress" placeholder="Address"
                                                               name="address" onChange={this.handleChange} value={user.address || ''} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary float-right">Register</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default UserRegister;