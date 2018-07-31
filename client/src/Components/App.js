import React from 'react';
import TopBar from './topBar';
import EventHeader from './eventHeader.js';
import EventAboutHost from './eventAboutHost';
import EventViews from './eventViews';
import EventHeaderDescription from './eventHeaderDescription';
import { render } from 'react-dom';
import styles from './style.css'


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = null;
        this.artifacts = ['http://simpleicon.com/wp-content/uploads/watch-2.png', 
                            'https://vignette.wikia.nocookie.net/spongebobfanon/images/c/cc/Paper-ripped_318-11313.jpg/revision/latest?cb=20140817181453',
                            'https://image.flaticon.com/icons/png/512/14/14558.png'] //little image icons for the artifacts
    }

    render() {
        return (
            <div>
                <TopBar />
                <div className={styles.headerBody} >
                    <section>
                        <div className={styles.eventHeaderTitlePadding}>
                            <h1 className={styles.eventHeaderTitle}>
                                Wolf Encounter
                            </h1>
                        </div>
                    </section>
                    <EventHeader artifacts={this.artifacts} />
                    <EventViews />
                    <EventAboutHost />
                    <EventHeaderDescription />
                </div>
            </div>
        )
    }
}

export default App