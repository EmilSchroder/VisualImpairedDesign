import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOM Content Loaded'), () =>{
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
}