import React from 'react';
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import axios from 'axios';

class Test extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
          <div>
            <Navbar />
            <Landing />
          </div>
        )
    }
}

export default Test;