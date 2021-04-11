import React, {Component} from 'react';

class UserList extends Component {

    constructor(pros) {
        super(pros);
        this.state = {
            usersList: []
        };
    }

    componentDidMount() {
        console.log("componentDidMount > executing..")
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/user/usersListing', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                this.setState({ usersList: data.activeUsers })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    render() {

        const activeUsers = (this.state.usersList);
        console.log(activeUsers);
        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Mobile No.</th>
                                                <th>Address</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {activeUsers.map((user, i) => (
                                                <tr>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.mobileNumber}</td>
                                                    <td>{user.address}</td>
                                                </tr>
                                            ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default UserList;