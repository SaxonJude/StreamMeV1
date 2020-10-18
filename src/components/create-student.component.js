import React from 'react';
import axios from 'axios';

class createStudent extends React.Component {
    constructor(props){
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            number: 0,
            entryClass: '',
            entryYear: 0,
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value,
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value,
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        });
    }

    onChangeClass(e) {
        this.setState({
            entryClass: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            entryYear: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            number: this.state.number,
            entryClass: this.state.entryClass,
            entryYear: this.state.entryYear
        }

        axios.post('http://localhost:5000/students/add', user)
        .then(res => console.log(res.data));

        this.setState({
            name: '',
            age: 0,
            number: 0,
            entryClass: '',
            entryYear: 0,
        });

        window.location = '/';
    }

    render() {
        return (
          <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Fist Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.onChangeFirstName}
                        />
                <label>Last Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.lastName}
                        onChange={this.onChangeLastName}
                        />
                <label>Age: </label>
                    <input  type="number"
                        required
                        className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeAge}
                        />
                <label>Student Number: </label>
                    <input  type="number"
                        required
                        className="form-control"
                        value={this.state.number}
                        onChange={this.onChangeNumber}
                        />
                <label>Entry Class: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.entryClass}
                        onChange={this.onChangeClass}
                        />
                <label>Entry Year: </label>
                    <input  type="number"
                        required
                        className="form-control"
                        value={this.state.entryYear}
                        onChange={this.onChangeYear}
                        />
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
}

export default createStudent;