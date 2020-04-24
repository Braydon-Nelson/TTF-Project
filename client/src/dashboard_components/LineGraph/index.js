import React from 'react';
import { render } from 'react-dom';
import LineGraph from "./LineGraph.js"


const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

const App = () => (
    <div style={styles}>
        <LineGraph />
    </div>
);

render(<App />, document.getElementById('root'));



export default LineGraph