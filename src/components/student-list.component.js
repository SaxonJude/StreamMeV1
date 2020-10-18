import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
    <tr>
      <td>{props.student.firstName}</td>
      <td>{props.student.lastName}</td>
      <td>{props.student.age}</td>
      <td>{props.student.number}</td>
      <td>{props.student.entryClass}</td>
      <td>{props.student.entryYear}</td>
      <td>
      <Link to={"/show/"+props.student._id}>Show</Link> | <Link to={"/edit/"+props.student._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStudent(props.student._id) }}>delete</a>
      </td>
    </tr>
);

class studentList extends React.Component {
    constructor(props) {
        super(props);

        this.deleteStudent = this.deleteStudent.bind(this);

        this.state = { students: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/students')
        .then(response => {
            this.setState({ students: response.data });
        })
        .catch(err => {
            console.log(err)
        });
    }

    deleteStudent(id) {
        axios.delete('http://localhost:5000/students/'+id)
        .then(response => response.json('User Deleted!'))
        .catch(err => {
            console.log();
        })
        
        this.setState({
            students: this.state.students.filter(el => el._id !== id)
        })
    }

    studentList() {
        return this.state.students.map(cur => {
            return <Student student={cur} deleteStudent={this.deleteStudent} key={cur._id} />
        })
    }

    render() {
        return (
          <div>
            <h3>Logged Students</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Student Number</th>
                  <th>Entry Class</th>
                  <th>Entry Year</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.studentList() }
              </tbody>
            </table>
          </div>
        )
    }
}

export default studentList;