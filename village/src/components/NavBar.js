import React from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component{
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/smurf-form">Add Smurf</Link>
            </nav>
        )
    }
}