import React, { Component, useEffect, useRef } from 'react';
import FullCalendar, { EventApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import timeGrid, { DayTimeColsView } from '@fullcalendar/timegrid';
import rrule from '@fullcalendar/rrule';
import axios from 'axios';
import firebase from "../config/firebase-config"


import Frees from './Frees'
import Subjects from './Subjects'
import Sessions from './Sessions'
import AddFree from './AddFree'
import { useState } from 'react'
import './profcomps.css'
import AddEventModal from './AddEventModal';
import moment from 'moment';

function TuteeProfile() { //This needs to be "serverified"

    const [frees, setFrees] = useState([])
    const [sessions, setSessions] = useState([])
    

    const [showAddFree2, setShowAddFree] = useState (false)

    const [free, setFree] = useState([])
    const [session, setSession] = useState([])

    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    const onEventAdded = (event) => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,
        });
    }

    async function handleEventAdd(data) {
        console.log("data!!!"+data)
        await axios.put('https://us-central1-milton-tutor.cloudfunctions.net/user/FDhtGoOP4lebRlKHda6l', data.event);
        // console.log("here");
        // const user = firebase.auth.currentUser;
        // const token = user && (await user.getIdToken());
        // const res = await fetch("https://us-central1-milton-tutor.cloudfunctions.net/user", {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       Authorization: `Bearer ${token}`,
        //       'origin': ["https://example.com"]
        //     },
        //   });
        // console.log(res.json());
        // return res.json();
    }

    async function handleDatesSet(data) {
        const response = await axios.get("/api/calendar/get-events?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString());
        setEvents(response.data);
    }

    

    // const handleDateClick = dateClickInfo => {
        
    //   };

    
    useEffect(() => {
        

        const getFrees = async () => {
            console.log("hey!")
            const res = await axios.get('https://us-central1-milton-tutor.cloudfunctions.net/user/test1')
            const data = await res.data
            console.log("data: "+data.start+data.end+data.title)
            setFrees(data)
        }
        // const getSessions = async () => {
        //     const res = await fetch('http://localhost:5000/sessions')
        //     const data2 = await res.json()
        //     setSessions(data2)
        // }


        getFrees()
        // getSessions()
    

    }, [])

    // const addFree = async (free) => {
    //     const res = await fetch('http://localhost:5000/frees', {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(free)
    // })

    // const data  = await res.json()

    // setFrees([...frees, data])
    // }


        return (
            <div className="App-bg">
            <section>
            <button onClick={() => setModalOpen(true)} className = "conf-button-event">Add Event</button>
                <div style={{position: "relative", zIndex: 0, width: "1300px"}}>
                <FullCalendar 
                    ref={calendarRef}
                    events={events}
                    plugins={[dayGridPlugin, interaction, timeGrid, rrule]}
                    initialView="dayGridMonth"
                    eventAdd={(event) => handleEventAdd(event)}
                    datesSet={(date) => handleDatesSet(date)}
                    timeZone="est"
                    
                    headerToolbar={{
left: 'dayGridMonth,timeGridWeek,timeGridDay',
center: 'title',
right: 'prev,next today'
}
}
                    editable="true"
                    selectable="true"
                    eventClick={
  function(arg){
    console.log(arg);
    if (window.confirm('Are you sure you want to delete this event?')==true) {
arg.event.remove()
}
    // alert(arg.event.title)
    // alert(arg.event.start)
  }
}

                    
                />
                </div>
                <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
            </section>
</div>

            /* <div className="App-bg">
                   

                   <div class="row"> */

                    /* <div class="column">
                        <Sessions session = { sessions }/>
                    </div>
             
                    <div class="column">

                    {showAddFree2 && <AddFree onAddFree={addFree}/>}
                    <Frees free={frees} onAddFree = {()=>setShowAddFree(!showAddFree2)} showAddFree={showAddFree2}/>
                        
                    </div> */

//                     <section>
//                     <button onClick={() => setModalOpen(true)}>Add Event</button>
//                         <div style={{position: "relative", zIndex: 0}}>
//                         <FullCalendar 
//                             ref={calendarRef}
//                             plugins={[dayGridPlugin, interaction, timeGrid, rrule]}
//                             initialView="dayGridMonth"
//                             timeZone="est"
//                             header={{
//      left: 'prev,next today',
//      center: 'title',
//      right: 'dayGridMonth,timeGridWeek,timeGridDay'
//      }
//    }
//                             editable="true"
//                             eventClick={
//           function(arg){
//             console.log(arg);
//             if (window.confirm('Are you sure you want to delete this event?')==true) {
//         arg.event.remove()
//       }
            // alert(arg.event.title)
            // alert(arg.event.start)
        //   }
        // }
    //     eventMouseEnter={
    //         function(info) {
    //         var tis=info.el;
    //         var popup=info.event.extendedProps.popup;
    //         // var tooltip = '<div class="tooltipevent" style="top:'+($(tis).offset().top-5)+'px;left:'+($(tis).offset().left+($(tis).width())/2)+'px"><div>' + popup.title + '</div><div>' + popup.description + '</div></div>';
    //         // var $tooltip = $(tooltip).appendTo('body');
    //         var tooltip = new Tooltip(info.el, {
    //   title: info.event.extendedProps.title,
    //   placement: "top",
    //   trigger: "click",
    //   container: "body"
    // });
    //     }
    //     }
        // eventMouseLeave={function(info) {           
        //     $(info.el).css('z-index', 8);
        //     $('.tooltipevent').remove();
        // }}
        // events={[    
//    { 
//      title: 'One Day',
//       popup: {
//           title: 'One Day',
//           description: 'This is the description',
//       }, 
//      backgroundColor: '#c1391c',
//      rrule: {        
//         dtstart: '2021-08-01T10:30:00',
//         until: '2021-08-01T19:30:00',        
//         },          
//     },    

    // {     
    //  title: 'Daily',
    //  popup: {
    //       title: 'Daily',
    //       description: 'This is Daily the description',
    //   },       
    //  backgroundColor: '#bcc11c',
    //  rrule: {        
    //     freq: 'daily',
    //     dtstart: '2021-08-02T10:30:00',
    //     until: '2021-08-05T19:30:00',        
    //     },          
    // }, 
    // {     
    //  title: 'Weekly Event',
    //  popup: {
    //       title: 'Daily',
    //       description: 'This is Daily the description',
    //   },             
    //  backgroundColor: '#1cc1ab',
    //  rrule: {        
    //     freq: 'weekly',
    //     dtstart: '2021-08-06T10:30:00',
    //     until: '2021-08-20T19:30:00',        
    //     },          
    // },    
    // {     
    //  title: 'Two Weekly Event',
    //  popup: {
    //       title: 'Daily',
    //       description: 'This is Daily the description',
    //   },             
    //  backgroundColor: '#1c60c1',
    //  rrule: {        
    //     interval: 2,
    //     freq: 'weekly',
    //     dtstart: '2021-08-07T10:30:00',
    //     until: '2021-08-30T19:30:00',        
    //     },          
    // },
    // {     
    //  title: 'Four Weekl Event',
    //  popup: {
    //       title: 'Daily',
    //       description: 'This is Daily the description',
    //   },             
    //  backgroundColor: '#c11cbc',
    //  rrule: {        
    //     interval: 4,
    //     freq: 'weekly',
    //     dtstart: '2021-08-01T10:30:00',
    //     until: '2021-12-30T19:30:00',        
    //     },          
    // },       
    // ]}
                    //     />
                    //     </div>
                    //     <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
                    // </section>

                    
            
            //     </div>    
            // </div>
           
        );
        
    }

    export default TuteeProfile