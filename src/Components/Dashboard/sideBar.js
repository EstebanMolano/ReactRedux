import React, { Component } from 'react';
import './sideBar.css';
import { GoAlert } from "react-icons/go";
import { TiDocument } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProjectFormList from "../ProjectFormList";
import ProjectFormOrder from "../ProjectFormOrder";

class sideBar extends Component {


    render() {
        return (
            <div class="wrapper">
                <Router>
                    <nav id="sidebar">
                        <div class="sidebar-header">
                        <p class="font-italic">Challenger React</p>
                        </div>
                        <ul class="list-unstyled components">
                            <li>
                                <TiDocument/>
                                <a href="#">
                                    <Link to="/">List of Products</Link>
                                </a>

                            </li>
                            <li> 
                                <FiShoppingCart/>
                                <a href="#">
                                    <Link to="/orderer">Products Orderer</Link>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div id="content">
                        <Switch>
                            <Route exact path="/" component={ProjectFormList} />
                            <Route exact path="/orderer" component={ProjectFormOrder} />
                        </Switch>
                    </div>
                </Router>
            </div>

        );
    }
}

export default sideBar;