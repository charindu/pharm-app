import React, {Component} from 'react';
import Select from "react-select";

class Configurations extends Component {

    roleObj = {
        code: '',
        roleName: ''
    };
    provinceObj = {
        code: '',
        provinceName: ''
    };
    districtObj = {
        code: '',
        districtName: '',
        province:{
            id:''
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            role: this.roleObj,
            province: this.provinceObj,
            district: this.districtObj,
            provincesList: [],
            isSaved: false
        };
    }

    componentDidMount() {
        console.log("componentDidMount > executing..")
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('/province/loadActiveProvinces', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                this.setState({ provincesList: data.provincesList });
                this.createProvinceOptions();
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    createProvinceOptions = () =>{
        let provincesList = this.state.provincesList;
        let provinces = [];

        provincesList.map(function(item) {
            provinces.push({
                'value' : item.id,
                'label'  : `${item.code}-${item.provinceName}`
            })
        });
        this.setState({ provincesList: provinces });
    }

    handleRoleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let role = {...this.state.role};
        if (name == 'code') {
            role[name] = value.toUpperCase();
        } else {
            role[name] = value;
        }
        this.setState({role});
    }

    handleProvinceChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let province = {...this.state.province};
        if (name == 'code') {
            province[name] = value.toUpperCase();
        } else {
            province[name] = value;
        }
        this.setState({province});
    }

    handleDistrictChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let district = {...this.state.district};
        if (name == 'code') {
            district[name] = value.toUpperCase();
        } else {
            district[name] = value;
        }
        this.setState({district});
    }

    handleDistrictProvinceSelectionChange = (selectedOption) => {
        console.log(`Option selected:`, selectedOption);
        let district = {...this.state.district};
        district.province.id = selectedOption.value;
        this.setState({district});
    }

    handleRoleSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.role)
        };
        fetch('/role/create', requestOptions)
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

    handleProvinceSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.province)
        };
        fetch('/province/create', requestOptions)
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

    handleDistrictSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.district)
        };
        fetch('/district/create', requestOptions)
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
        const {role} = this.state;
        const {province} = this.state;
        const {district} = this.state;

        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card card-default">
                                    <div className="card-header">
                                        <h3 className="card-title">Role</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Role Code</label>
                                                        <input type="text" className="form-control" maxLength={3}
                                                               id="inpRoleCode" placeholder="Role Code"
                                                               name="code" onChange={this.handleRoleChange}
                                                               value={role.code || ''}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Role Name</label>
                                                        <input type="text" className="form-control"
                                                               id="inpRoleName" placeholder="Role Name"
                                                               name="roleName" onChange={this.handleRoleChange}
                                                               value={role.roleName || ''}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary float-right" onClick={this.handleRoleSubmit}>Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card card-default">
                                    <div className="card-header">
                                        <h3 className="card-title">Province</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Province Code</label>
                                                        <input type="text" className="form-control" maxLength={3}
                                                               id="inpProvCode" placeholder="Province/State Code"
                                                               name="code" onChange={this.handleProvinceChange}
                                                               value={province.code || ''}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Province Name</label>
                                                        <input type="text" className="form-control"
                                                               id="inpProvinceName" placeholder="Province Name"
                                                               name="provinceName" onChange={this.handleProvinceChange}
                                                               value={province.provinceName || ''}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary float-right" onClick={this.handleProvinceSubmit}>Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card card-default">
                                    <div className="card-header">
                                        <h3 className="card-title">District</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">District Code</label>
                                                        <input type="text" className="form-control" maxLength={3}
                                                               id="inpDistCode" placeholder="District Code"
                                                               name="code" onChange={this.handleDistrictChange}
                                                               value={district.code || ''}/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">District Name</label>
                                                        <input type="text" className="form-control"
                                                               id="inpDistName" placeholder="District Name"
                                                               name="districtName" onChange={this.handleDistrictChange}
                                                               value={district.districtName || ''}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Province</label>
                                                        <Select options={this.state.provincesList}
                                                                onChange={this.handleDistrictProvinceSelectionChange} /*value={district.province.id || ''}*/ />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary float-right" onClick={this.handleDistrictSubmit}>Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-6">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Configurations;