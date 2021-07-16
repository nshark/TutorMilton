import React, { Component } from 'react';
import Frees from './Frees'
import Subjects from './Subjects'
import Tutoring from './Tutoring'
import './profcomps.css'

export default class TuteeProfile extends Component {
    render() {
        return (
         
            <div className="App-bg">
                   

                   <div class="row">

                    <div class="column">
                        <Tutoring />
                    </div>
             
                    <div class="column">
                        <Subjects />
                        <Frees />
                    </div>
            
                </div>    
            </div>
           
        );
    }
}