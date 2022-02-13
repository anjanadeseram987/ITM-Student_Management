import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
           
        }
    }

    render() {
        return (
            <div>
                <header className="header"> 
                    <nav className= "navbar navbar-expand-md navbar-dqark bg-dark">
                        <div className="navbar-brand"> Student Management System</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;