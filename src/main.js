import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <div>
              <h1>React with hot reloading is the cats pajamas! so there</h1>
              <h2>Leave me alone</h2>
            </div>
        )
    }
}

render(<App></App>, document.getElementById('app'));
