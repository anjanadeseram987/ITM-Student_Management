import React, { Component } from 'react';
import StudentService from '../services/StudentService';


class ViewStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }


    render() {
        return (
            <div>
                <br></br> <br></br> <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student First Name: </label><br></br>
                            <div> { this.state.student.firstName }</div><br></br>
                        </div>
                        <div className = "row">
                            <label> Student Last Name: </label><br></br>
                            <div> { this.state.student.lastName }</div><br></br>
                        </div>
                        <div className = "row">
                            <label> Student Email ID: </label><br></br>
                            <div> { this.state.student.emailId }</div><br></br>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewStudent;