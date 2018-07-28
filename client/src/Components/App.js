import React from 'react';
import TopBar from './topBar';
import EventHeader from './eventHeader.js';
import EventDescription from './eventDescription';
import EventAboutHost from './eventAboutHost';
import { render } from 'react-dom';
// import styles from './style.css'


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <div>
                <TopBar class='top-bar' />
                <div>----------------------</div>
                <EventHeader class='event-header' />
                <div>----------------------</div>
                <EventDescription class='event-description' />
                <div>----------------------</div>
                <EventAboutHost class='event-about-host' />
            </div>
        )
    }
}

export default App