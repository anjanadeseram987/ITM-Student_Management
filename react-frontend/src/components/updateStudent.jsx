import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class updateStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''

        }
        this.onChange = this.onChange.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        this.cancel = this.cancel.bind(this);
    }
 componentDidMount(){
     StudentService.getStudentById(this.state.id).then((res)=>{
         let student = res.data;
         this.setState({
             firstName:student.firstName,
             lastName:student.lastName,
             emailId:student.emailId
         });
     });
 }
    updateStudent = (e) => {
        e.preventDefault();
        let student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };

        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student,this.state.id).then(res =>{
            this.props.history.push('/students');
        });
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
                            <h3 className="text-center"> Edit Student Details</h3>
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
                                        <div className="form-group">
                                        <label>Last Name</label>
                                        <input
                                            placeholder="Last Name"
                                            name="lastName"
                                            className="form-control"
                                            value={this.state.lastName}
                                            onChange={this.onChange}
                                        />
                                        </div>
                                        <br></br>
                                        <div className="form-group">
                                        <label>Email Id</label>
                                        <input
                                            placeholder="Email Id"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.emailId}
                                            onChange={this.onChange}
                                        />
                                        </div>
                                        <br></br>
                                    </div>
                                    <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                                    <button className="btn btn-success" onClick={this.updateStudent} style={{ marginLeft: "40px" }}>Save</button> 
                                </form>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default updateStudent;