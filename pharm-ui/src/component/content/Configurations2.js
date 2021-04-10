import React, {Component} from 'react';
import Select from 'react-select';

class Configurations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options : [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
            ],
            selectedOption: null,
        };
    }


    render() {
        const { selectedOption } = this.state;
        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Select2 (Default Theme)</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Minimal</label>
                                            <Select options={this.state.options} isMulti/>
                                        </div>
                                        <div className="form-group">
                                            <label>Disabled</label>
                                            <Select options={this.state.options} isMulti/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Multiple</label>
                                            <Select options={this.state.options} isMulti/>
                                        </div>
                                        <div className="form-group">
                                            <label>Disabled Result</label>
                                            <Select options={this.state.options} isMulti/>
                                        </div>
                                    </div>
                                </div>

                                <h5>Custom Color Variants</h5>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Minimal (.select2-danger)</label>
                                            <Select options={this.state.options} isMulti/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Multiple (.select2-purple)</label>
                                            <div className="select2-purple">
                                                <Select options={this.state.options} isMulti/>
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

export default Configurations;