import React, { Component } from 'react';
import Frees from './Frees'
import Subjects from './Subjects'
import Sessions from './Sessions'
import './profcomps.css'

export default class TuteeProfile extends Component {
    render() {
        return (
         
            <div className="App-bg">
                   

                   <div class="row">

                    <div class="column">
                        <Sessions />
                    </div>
             
                    <div class="column">
                        <Frees />
                        
                    </div>
            
                </div>    
            </div>
           
        );
    }
}