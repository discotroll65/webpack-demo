import React from 'react';
import ReactDOM from 'react-dom';

import ClickCounter from './click_counter.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    console.log('hi');
    ReactDOM.render(<ClickCounter></ClickCounter>, root);
});