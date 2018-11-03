import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Homepage from './Homepage'
import Header from './Header'
import CustomBar from './CustomBar'
import Footer from './Footer'

class App extends React.Component {

    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <Router>
                <div className='fullWrapper'>
                    <Header />
                    <CustomBar />
                    <Route exact path='/' render={(props)=>(
                        <Homepage /> 
                    )}/>
                    <Footer /> 
                </div>
            </Router>
    )
    }
    
  }

export default App