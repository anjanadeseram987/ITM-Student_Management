import React, { Component } from 'react';
import '../css/student.css';
import StudentService from '../services/StudentService';

class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''

        }
        this.onChange = this.onChange.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    addStudent = (e) => {
        e.preventDefault();
        let student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };

        console.log('student => ' + JSON.stringify(student));

        StudentService.createStudent(student).then(res=>{
            this.props.history.push('/students');
        })
    }

    cancel() {
        this.props.history.push('/students');
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div> <br></br> <br></br> <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Student </h3>
                            <div className="card body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input
                                            placeholder="First Name"
                                            name="firstName"
                                            className="form-control"
                                            value={this.state.firstName}
                                            onChange={this.onChange}
                                        />
                                        <br></br>
                                        <label>Last Name</label>
                                        <input
                                            placeholder="Last Name"
                                            name="lastName"
                                            className="form-control"
                                            value={this.state.lastName}
                                            onChange={this.onChange}
                                        />
                                        <br></br>
                                        <label>Email Id</label>
                                        <input
                                            placeholder="Email Id"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.emailId}
                                            onChange={this.onChange}
                                        />
                                        <br></br>
                                    </div>
                                    <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                                    <button className="btn btn-success" onClick={this.addStudent} style={{ marginLeft: "40px" }}>Save</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddStudent;