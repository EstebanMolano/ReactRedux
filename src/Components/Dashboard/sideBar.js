import React, { Component } from 'react';
import './sideBar.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProjectFormList from "../ProjectFormList";
import ProjectFormOrder from "../ProjectFormOrder";

class sideBar extends Component {


    render(){
        return(
            <div class="wrapper">
                <Router>
                <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Challenger React</h3>
                    <strong>BS</strong>
                </div>

                
                <ul class="list-unstyled components">
                    <li>
                        <a href="#">
                            <i class="glyphicon glyphicon-paperclip"></i>
                            <Link to="/">Home</Link>
                        </a>
                        
                    </li>
                    
                    <li>
                        <a href="#">
                            <i class="glyphicon glyphicon-paperclip"></i>
                            <Link to="/orderer">Products</Link>
                        </a>
                    </li>
                    
                </ul>
            
           
         
          </nav>

      
        <div id="content">

            <Switch>
            <Route exact path="/" component={ProjectFormList}/>
            <Route exact path="/orderer" component={ProjectFormOrder}/>
          </Switch>
             </div>
        </Router>
            </div>
            
        );
    }

}

export default sideBar;