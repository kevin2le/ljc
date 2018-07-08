import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import{
    Navbar as NavMaterialize,
    NavItem,
    Dropdown,
    Icon
} from 'react-materialize';
import './NavBar.css'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
        user: null
        };
    }
    render() {
        return (
            <div className="NavBar">
            <NavMaterialize brand='TheLittleJerkyCo' href="/" right className = "red" >
                <Dropdown trigger={
                    <a><Icon>menu</Icon></a>
                }>
                    <NavItem><Link to="/" class = "color">Home</Link></NavItem>
                    <NavItem><Link to="/about" className="" class = "color">About</Link></NavItem>
                </Dropdown>
            </NavMaterialize>
            </div>
        );
    }
};

export default NavBar;