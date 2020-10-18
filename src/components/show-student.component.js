import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class showStudent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            number: 0,
            entryClass: '',
            entryYear: 0,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/students/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                age: res.data.age,
                number: res.data.number,
                entryClass: res.data.entryClass,
                entryYear: res.data.entryYear,
            })
            // console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <div className="card text-white bg-dark mb-3">
                <div className="card-header">Student ID: {this.state.number}</div>
                <div className="card-body">
                <h5 className="card-title">{this.state.firstName} {this.state.lastName}, {this.state.age}</h5>
                <p className="card-text">{this.state.firstName} is currently studying: {this.state.entryClass}</p>
                <p className="card-text">{this.state.firstName}'s entry year was: {this.state.entryYear}</p>
                <Link to={"/"}>Back</Link>
                </div>
            </div>

            </div>
        );
    }
}

export default showStudent;