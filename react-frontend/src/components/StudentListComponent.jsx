import React, { Component } from 'react';
import '../css/student.css';
import StudentService from '../services/StudentService';

class StudentListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            students:[]
        }
        this.addStudent = this.addStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.viewStudent=this.viewStudent.bind(this);

    }


    updateStudent(id){
        this.props.history.push(`/update-student/${id}`);
    }

    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudents().then((res)=>{
            this.setState({students:res.data});
        });
    }

    addStudent(){
        this.props.history.push(`/add-student`);
    }

    deleteStudent(id){
        //rest api
        StudentService.deleteStudent(id).then(res => {
            this.setState({students:this.state.students.filter(student => student.id !==id)});
        });
    }

   
    render() {
        return (
            <div>
                <br></br><br></br><br></br>
                    <h2 className="text-center">Student List</h2> <br></br>
                    <button type="button"className="btn btn-success" onClick={this.addStudent}style={{ marginBottom: "10px" }}>New Student </button>
                    <div className="row">
                        
                        </div>
                    <div className="row">
                        <table className = "table tbale-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Student First Name</th>
                                    <th>Student Last Name</th>
                                    <th>Student Email Id</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student=>
                                        <tr key = {student.id}>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td>{student.emailId}</td>
                                            <td> <button type="button" className="btn btn-primary" onClick={() => this.viewStudent(student.id)}>View </button>
                                            <button type="button"className="btn btn-warning" onClick={() => this.updateStudent(student.id)}style={{ marginLeft: "10px" }}>Update </button>
                                            <button type="button"className="btn btn-danger" onClick={ () => this.deleteStudent(student.id)}style={{ marginLeft: "10px" }}>Delete </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>


            </div>
        );
    }
}

export default StudentListComponent;