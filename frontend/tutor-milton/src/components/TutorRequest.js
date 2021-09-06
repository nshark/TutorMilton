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
                    <div className="profComp">
                    <p>Click here to request tutoring</p>
                    <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">Select a Course</button>
                        <div id="myDropdown" class="dropdown-content">
                            
                            <p>Classics</p>
                            <a href="#">Intensive Classical Greek</a>
                            <a href="#">Adv Greek: Plato</a>
                            <a href="#">Latin 2/3 (Accelerated)</a>
                            <a href="#">Adv Latin: Rom Elegy + Lyr (1/2)</a>
                            <a href="#">Latin Literature (AP)</a>
                            <a href="#">Adv Latin: Roman Philosophy (Sem 1)</a>
                            <a href="#">Adv Latin: Selected Read (Sem 2)</a>
                            <a href="#">Latin 1</a>
                            <a href="#">Latin 2</a>
                            <a href="#">Latin 3</a>
                            <a href="#">Latin 4: Lit of the Golden Age</a>
                            
                            <p>Computer Programming</p>
                            <a href="#">Computer Programming 1 (1/2)</a>
                            <a href="#">Comp Prog 2/3: Prog + Apps</a>
                            <a href="#">Computer Programming 2 (1/2)</a>
                            <a href="#">Adv Comp: Program Apps (1/2)</a>
                            <a href="#">Adv Comp: App Math + AI (1/2)</a>
                            <a href="#">Comp Prog: App Engin + Des (1/2)</a>
                            
                            <p>Modern Language</p>
                            <a href="#">Chinese 1</a>
                            <a href="#">Chinese 1p (Prior Study)</a>
                            <a href="#">Chinese 2</a>
                            <a href="#">Chinese 2 (Honors)</a>
                            <a href="#">Chinese 3</a>
                            <a href="#">Chinese 3 (Honors)</a>
                            <a href="#">Chinese 4</a>
                            <a href="#">Chinese 5</a>
                            <a href="#">Chinese 5 (Honors)</a>
                            <a href="#">Advanced Topics Chinese (1/2)</a>
                            <a href="#">Chinese Literature</a>
                            <a href="#">French 1</a>
                            <a href="#">French 1P (Prior Study)</a>
                            <a href="#">French 2</a>
                            <a href="#">French 2 (Honors)</a>
                            <a href="#">French 3</a>
                            <a href="#">French 3 (Honors)</a>
                            <a href="#">French 4: Culture + Literature</a>
                            <a href="#">French 4 (Honors)</a>
                            <a href="#">French 5: Francophone (Sem 1)</a>
                            <a href="#">French 5 (H): Exploration of Lit</a>
                            <a href="#">French 5: Film + Soc (Sem 2)</a>
                            <a href="#">French 6: Adv Studies (1/2)</a>
                            <a href="#">Spanish 1</a>
                            <a href="#">Spanish 1P (Prior Study)</a>
                            <a href="#">Spanish 2</a>
                            <a href="#">Spanish 2/3 (Accelerated)</a>
                            <a href="#">Spanish 2 (Honors)</a>
                            <a href="#">Spanish 3</a>
                            <a href="#">Spanish 3 (Honors)</a>
                            <a href="#">Spanish 4: Culture + Lit</a>
                            <a href="#">Spanish 4 (Honors)</a>
                            <a href="#">Spanish 5: Latin Amer (Sem 1)</a>
                            <a href="#">Spanish 5 (Honors)</a>
                            <a href="#">Spanish 5: El Caribe (Sem 2)</a>
                            <a href="#">Advanced Topics Spanish (1/2)</a>

                            <p>History / Social Science</p>
                            <a href="#">Ancient Civilizations</a>
                            <a href="#">Modern World History: Class IV</a>
                            <a href="#">Modern World History</a>
                            <a href="#">U.S. History</a>
                            <a href="#">U.S. History: Class III</a>
                            <a href="#">The U.S. in the Modern World 1</a>
                            <a href="#">The U.S. in the Modern World 2</a>
                            <a href="#">Adv Hist: Af-Amer Hist (Sem 1)</a>
                            <a href="#">Amer Gov't + Politics (Sem 1)</a>
                            <a href="#">Adv Hist: Asian Amer (Sem 2)</a>
                            <a href="#">Adv Hist: Aztecs-High Tech (Sem 2)</a>
                            <a href="#">Behavioral Economics (Sem 2)</a>
                            <a href="#">Comparative Gov't (Sem 2)</a>
                            <a href="#">Adv Hist: Civil Rights (Sem 2)</a>
                            <a href="#">Global Economics (Sem 2)</a>
                            <a href="#">Adv Hist: Global + Islam (Sem 2)</a>
                            <a href="#">Activism Justice Dig World (1/2)</a>
                            <a href="#">Macroeconomics (Sem 1)</a>
                            <a href="#">Macroeconomics (Sem 2)</a>
                            <a href="#">Adv Hist: Modern China (Sem 1)</a>
                            <a href="#">Adv Hist: Hist Mid East (Sem 1)</a>
                            <a href="#">Microeconomics (Sem 1)</a>
                            <a href="#">Microeconomics (Sem 2)</a>
                            <a href="#">Topics in Psychology (1/2)</a>
                            <a href="#">Religions of Asia (Sem 2)</a>
                            <a href="#">Religions Middle East (Sem 1)</a>
                            <a href="#">Psychology Seminar</a>

                            <p>Mathamatics</p>
                            <a href="#">Algebra 1 + Geometry</a>
                            <a href="#">Proof + Problem Solving</a>
                            <a href="#">Algebraic Concepts + Data Sci. (Honors)</a>
                            <a href="#">Algebraic Concepts + Data Science</a>
                            <a href="#">Advanced Functions (Honors)</a>
                            <a href="#">Advanced Functions w/Comp Science (Honors)</a>
                            <a href="#">Advanced Functions</a>
                            <a href="#">Adv. Statistical Method (Honors)</a>
                            <a href="#">Abstract Algebra + Group Theory</a>
                            <a href="#">Multivariable Calculus</a>
                            <a href="#">Math + Social Justice (Sem 2)</a>
                            <a href="#">Statistics (Honors)</a>
                            <a href="#">Statistics</a>
                            <a href="#">Calc + Applied Econ (Honors)</a>
                            <a href="#">Calculus (Honors)</a>
                            <a href="#">Calculus</a>
                            <a href="#">Calculus (Accelerated)</a>
                            <a href="#">Adv Calculus + Stats (Honors)</a>

                            <p>Classics</p>
                            <a href="#">Advanced Biology</a>
                            <a href="#">Advanced Chemistry</a>
                            <a href="#">Advanced Environmental Science</a>
                            <a href="#">Advanced Physics</a>
                            <a href="#">Biology</a>
                            <a href="#">Biology (Honors)</a>
                            <a href="#">Chemistry</a>
                            <a href="#">Chemistry (Honors)</a>
                            <a href="#">Neuroscience</a>
                            <a href="#">Physics: Class IV</a>
                            <a href="#">Physics</a>
                            <a href="#">Anatomy + Physiology (Sem 1)</a>
                            <a href="#">Anatomy + Physiology (Sem 2)</a>
                            <a href="#">Observational Astronomy (Sem 1)</a>
                            <a href="#">Issues in Enviro Science (Sem 1)</a>
                            <a href="#">Issues in Enviro Science (Sem 2)</a>
                            <a href="#">Geology (1/2)</a>
                            <a href="#">Science in the Modern Age (1/2)</a>
                            <a href="#">Marine Science (Sem 1)</a>
                            <a href="#">Marine Science (Sem 2)</a>
                            <a href="#">Molecular Genetics 1 (Sem 1)</a>
                            <a href="#">Molecular Genetics 2 (Sem 2)</a>
                            <a href="#">Organic Chemistry 1 (Sem 1)</a>
                            <a href="#">Organic Chemistry 2 (Sem 2)</a>

                        </div>
                    </div>

                    <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">Select Your Availabilities</button>
                        <div id="myDropdown" class="dropdown-content">
                            <a href="#">Intensive Classical Greek</a>
                            <a href="#">Adv Greek: Plato</a>
                            <a href="#">Latin 2/3 (Accelerated)</a>
                        </div>
                        <input placeholder="Add Your Teacher's Email" className="txt-Box2" />
                    </div>
                    
                    <div><button className="conf-button">Submit</button></div>
                    
                    </div>

                    </div>
             
                    <div class="column">
                    <div className="profComp">
                    <p>Click here to add a subject to tutor</p>
                   
                    <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">Select a Course</button>
                        <div id="myDropdown" class="dropdown-content">
                            
                            <p>Classics</p>
                            <a href="#">Intensive Classical Greek</a>
                            <a href="#">Adv Greek: Plato</a>
                            <a href="#">Latin 2/3 (Accelerated)</a>
                            <a href="#">Adv Latin: Rom Elegy + Lyr (1/2)</a>
                            <a href="#">Latin Literature (AP)</a>
                            <a href="#">Adv Latin: Roman Philosophy (Sem 1)</a>
                            <a href="#">Adv Latin: Selected Read (Sem 2)</a>
                            <a href="#">Latin 1</a>
                            <a href="#">Latin 2</a>
                            <a href="#">Latin 3</a>
                            <a href="#">Latin 4: Lit of the Golden Age</a>
                            
                            <p>Computer Programming</p>
                            <a href="#">Computer Programming 1 (1/2)</a>
                            <a href="#">Comp Prog 2/3: Prog + Apps</a>
                            <a href="#">Computer Programming 2 (1/2)</a>
                            <a href="#">Adv Comp: Program Apps (1/2)</a>
                            <a href="#">Adv Comp: App Math + AI (1/2)</a>
                            <a href="#">Comp Prog: App Engin + Des (1/2)</a>
                            
                            <p>Modern Language</p>
                            <a href="#">Chinese 1</a>
                            <a href="#">Chinese 1p (Prior Study)</a>
                            <a href="#">Chinese 2</a>
                            <a href="#">Chinese 2 (Honors)</a>
                            <a href="#">Chinese 3</a>
                            <a href="#">Chinese 3 (Honors)</a>
                            <a href="#">Chinese 4</a>
                            <a href="#">Chinese 5</a>
                            <a href="#">Chinese 5 (Honors)</a>
                            <a href="#">Advanced Topics Chinese (1/2)</a>
                            <a href="#">Chinese Literature</a>
                            <a href="#">French 1</a>
                            <a href="#">French 1P (Prior Study)</a>
                            <a href="#">French 2</a>
                            <a href="#">French 2 (Honors)</a>
                            <a href="#">French 3</a>
                            <a href="#">French 3 (Honors)</a>
                            <a href="#">French 4: Culture + Literature</a>
                            <a href="#">French 4 (Honors)</a>
                            <a href="#">French 5: Francophone (Sem 1)</a>
                            <a href="#">French 5 (H): Exploration of Lit</a>
                            <a href="#">French 5: Film + Soc (Sem 2)</a>
                            <a href="#">French 6: Adv Studies (1/2)</a>
                            <a href="#">Spanish 1</a>
                            <a href="#">Spanish 1P (Prior Study)</a>
                            <a href="#">Spanish 2</a>
                            <a href="#">Spanish 2/3 (Accelerated)</a>
                            <a href="#">Spanish 2 (Honors)</a>
                            <a href="#">Spanish 3</a>
                            <a href="#">Spanish 3 (Honors)</a>
                            <a href="#">Spanish 4: Culture + Lit</a>
                            <a href="#">Spanish 4 (Honors)</a>
                            <a href="#">Spanish 5: Latin Amer (Sem 1)</a>
                            <a href="#">Spanish 5 (Honors)</a>
                            <a href="#">Spanish 5: El Caribe (Sem 2)</a>
                            <a href="#">Advanced Topics Spanish (1/2)</a>

                            <p>History / Social Science</p>
                            <a href="#">Ancient Civilizations</a>
                            <a href="#">Modern World History: Class IV</a>
                            <a href="#">Modern World History</a>
                            <a href="#">U.S. History</a>
                            <a href="#">U.S. History: Class III</a>
                            <a href="#">The U.S. in the Modern World 1</a>
                            <a href="#">The U.S. in the Modern World 2</a>
                            <a href="#">Adv Hist: Af-Amer Hist (Sem 1)</a>
                            <a href="#">Amer Gov't + Politics (Sem 1)</a>
                            <a href="#">Adv Hist: Asian Amer (Sem 2)</a>
                            <a href="#">Adv Hist: Aztecs-High Tech (Sem 2)</a>
                            <a href="#">Behavioral Economics (Sem 2)</a>
                            <a href="#">Comparative Gov't (Sem 2)</a>
                            <a href="#">Adv Hist: Civil Rights (Sem 2)</a>
                            <a href="#">Global Economics (Sem 2)</a>
                            <a href="#">Adv Hist: Global + Islam (Sem 2)</a>
                            <a href="#">Activism Justice Dig World (1/2)</a>
                            <a href="#">Macroeconomics (Sem 1)</a>
                            <a href="#">Macroeconomics (Sem 2)</a>
                            <a href="#">Adv Hist: Modern China (Sem 1)</a>
                            <a href="#">Adv Hist: Hist Mid East (Sem 1)</a>
                            <a href="#">Microeconomics (Sem 1)</a>
                            <a href="#">Microeconomics (Sem 2)</a>
                            <a href="#">Topics in Psychology (1/2)</a>
                            <a href="#">Religions of Asia (Sem 2)</a>
                            <a href="#">Religions Middle East (Sem 1)</a>
                            <a href="#">Psychology Seminar</a>

                            <p>Mathamatics</p>
                            <a href="#">Algebra 1 + Geometry</a>
                            <a href="#">Proof + Problem Solving</a>
                            <a href="#">Algebraic Concepts + Data Sci. (Honors)</a>
                            <a href="#">Algebraic Concepts + Data Science</a>
                            <a href="#">Advanced Functions (Honors)</a>
                            <a href="#">Advanced Functions w/Comp Science (Honors)</a>
                            <a href="#">Advanced Functions</a>
                            <a href="#">Adv. Statistical Method (Honors)</a>
                            <a href="#">Abstract Algebra + Group Theory</a>
                            <a href="#">Multivariable Calculus</a>
                            <a href="#">Math + Social Justice (Sem 2)</a>
                            <a href="#">Statistics (Honors)</a>
                            <a href="#">Statistics</a>
                            <a href="#">Calc + Applied Econ (Honors)</a>
                            <a href="#">Calculus (Honors)</a>
                            <a href="#">Calculus</a>
                            <a href="#">Calculus (Accelerated)</a>
                            <a href="#">Adv Calculus + Stats (Honors)</a>

                            <p>Classics</p>
                            <a href="#">Advanced Biology</a>
                            <a href="#">Advanced Chemistry</a>
                            <a href="#">Advanced Environmental Science</a>
                            <a href="#">Advanced Physics</a>
                            <a href="#">Biology</a>
                            <a href="#">Biology (Honors)</a>
                            <a href="#">Chemistry</a>
                            <a href="#">Chemistry (Honors)</a>
                            <a href="#">Neuroscience</a>
                            <a href="#">Physics: Class IV</a>
                            <a href="#">Physics</a>
                            <a href="#">Anatomy + Physiology (Sem 1)</a>
                            <a href="#">Anatomy + Physiology (Sem 2)</a>
                            <a href="#">Observational Astronomy (Sem 1)</a>
                            <a href="#">Issues in Enviro Science (Sem 1)</a>
                            <a href="#">Issues in Enviro Science (Sem 2)</a>
                            <a href="#">Geology (1/2)</a>
                            <a href="#">Science in the Modern Age (1/2)</a>
                            <a href="#">Marine Science (Sem 1)</a>
                            <a href="#">Marine Science (Sem 2)</a>
                            <a href="#">Molecular Genetics 1 (Sem 1)</a>
                            <a href="#">Molecular Genetics 2 (Sem 2)</a>
                            <a href="#">Organic Chemistry 1 (Sem 1)</a>
                            <a href="#">Organic Chemistry 2 (Sem 2)</a>
                            



                            
                        </div>
                    </div>

                    <div class="dropdown">
                    </div>
                    <p></p>
                    <input placeholder="Enter Teacher's Email For Approval" className="txt-Box2" />
                    <div class="custom-pad"><button className="conf-button">Submit</button></div>

                    </div>
                    
                    </div>
                    
                </div>

                    
            </div>
           
        );
    }
}