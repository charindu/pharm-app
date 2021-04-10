import React, {Component} from 'react';
import Select from "react-select";

class Configurations extends Component {

    roleObj = {
        roleCode: '',
        roleName: ''
    };
    provinceObj = {
        provinceCode: '',
        provinceName: ''
    };
    districtObj = {
        districtCode: '',
        districtName: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            role: this.roleObj,
            province: this.provinceObj,
            district: this.districtObj
        };
        //this.handleRoleChange = this.handleRoleChange.bind(this);
        //this.handleProvinceChange = this.handleRoleChange.bind(this);
    }

    handleRoleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let role = {...this.state.role};
        if (name == 'roleCode') {
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
        if (name == 'provinceCode') {
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
        if (name == 'districtCode') {
            district[name] = value.toUpperCase();
        } else {
            district[name] = value;
        }
        this.setState({district});
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
                                                               name="roleCode" onChange={this.handleRoleChange}
                                                               value={role.roleCode || ''}/>
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
                                                <button type="submit" className="btn btn-primary float-right">Submit
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
                                                               name="provinceCode" onChange={this.handleProvinceChange}
                                                               value={province.provinceCode || ''}/>
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
                                                <button type="submit" className="btn btn-primary float-right">Submit
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
                                                               name="districtCode" onChange={this.handleDistrictChange}
                                                               value={district.districtCode || ''}/>
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
                                                        <Select options={this.state.options} name="selProvince"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary float-right">Submit
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