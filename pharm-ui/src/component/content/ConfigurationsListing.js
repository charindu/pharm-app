import React, {Component} from 'react';
import axios from "axios";

class ConfigurationsListing extends Component {

    constructor(pros) {
        super(pros);
        this.state = {
            roles: [],
            provinces: [],
            districts: [],
            isSaved:false
        };
    }

    componentDidMount() {
        console.log("componentDidMount > executing..")
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        /*fetch('/configurations/loadAll', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                this.setState({ roles: data.rolesList, provinces: data.provincesList, districts: data.districtsList, isSaved:data.isSuccess })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
*/
        axios.get('/configurations/loadAll', {headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({ roles: res.data.rolesList, provinces: res.data.provincesList, districts: res.data.districtsList, isSaved:res.data.isSuccess })
            }).catch( err =>{
            console.error('There was an error!', err);
        })
    }

    render() {
        const activeRoles = this.state.roles;
        const activeProvinces = this.state.provinces;
        const activeDistricts = this.state.districts;

        return(
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <div className="card card-primary card-outline card-outline-tabs">
                                    <div className="card-header p-0 border-bottom-0">
                                        <ul className="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="tabRoles"
                                                   data-toggle="pill" href="#contectRoles" role="tab"
                                                   aria-controls="tabRoles" aria-selected="true">Roles</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="tabProvinces" data-toggle="pill"
                                                   href="#contentProvinces" role="tab"
                                                   aria-controls="tabProvinces"
                                                   aria-selected="false">Provinces</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="tabDistricts"
                                                   data-toggle="pill" href="#contentDistricts" role="tab"
                                                   aria-controls="tabDistricts"
                                                   aria-selected="false">Districts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="tabCountry"
                                                   data-toggle="pill" href="#contentCountry" role="tab"
                                                   aria-controls="tabCountry"
                                                   aria-selected="false">Country</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="tab-content" id="custom-tabs-four-tabContent">
                                            <div className="tab-pane fade show active" id="contectRoles"
                                                 role="tabpanel" aria-labelledby="tabRoles">
                                                <table id="tblRoles" className="table table-bordered table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {activeRoles.map((role, i) => (
                                                        <tr>
                                                            <td>{role.code}</td>
                                                            <td>{role.roleName}</td>
                                                            <td>
                                                                <div className="row">
                                                                    <div className="col-1 col-sm-1">
                                                                        <button type="button"
                                                                                className="btn btn-outline-success btn-flat">
                                                                            <i className="far fa-edit"></i>
                                                                        </button>
                                                                    </div>
                                                                    <div className="col-1 col-sm-1">
                                                                        <button type="button"
                                                                                className="btn btn-outline-danger btn-flat">
                                                                            <i className="far fa-trash-alt"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane fade" id="contentProvinces" role="tabpanel"
                                                 aria-labelledby="tabProvinces">
                                                <table id="tblProvince" className="table table-bordered table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {activeProvinces.map((province, i) => (
                                                        <tr>
                                                            <td>{province.code}</td>
                                                            <td>{province.provinceName}</td>
                                                            <td>ac</td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane fade" id="contentDistricts" role="tabpanel"
                                                 aria-labelledby="tabDistricts">
                                                <table id="tblDistricts" className="table table-bordered table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>Name</th>
                                                        <th>Province</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {activeDistricts.map((district, i) => (
                                                        <tr>
                                                            <td>{district.code}</td>
                                                            <td>{district.districtName}</td>
                                                            <td>{district.province.provinceName}</td>
                                                            <td>action</td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane fade" id="contentCountry" role="tabpanel"
                                                 aria-labelledby="tabCountry">
                                                <table id="tblCountry" className="table table-bordered table-striped">
                                                    <thead>
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>Name</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
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

export default ConfigurationsListing;