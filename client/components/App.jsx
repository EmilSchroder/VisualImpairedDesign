import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Homepage from './Homepage'

class App extends React.Component {

    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <Router>
                <React.Fragment>

                <Route exact path='/' render={(props)=>(
                    <Homepage /> 
                )}/>
                    
                </React.Fragment>
            </Router>
    )
    }
    
  }

export default App