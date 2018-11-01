import React from 'react'

class CustomBar extends React.Component {
    constructor(props){
        super(props)

        this.smallestFontSize = this.smallestFontSize.bind(this)
        this.middleistFontSize = this.middleistFontSize.bind(this)
        this.largestFontSize = this.largestFontSize.bind(this)
        this.dark = this.dark.bind(this)
        this.light = this.light.bind(this)
    }

    smallestFontSize(){
        document.getElementsByTagName('html')[0].style.fontSize = '18pt'
    }

    middleistFontSize(){
        document.getElementsByTagName('html')[0].style.fontSize = '22pt'
    }

    largestFontSize(){
        document.getElementsByTagName('html')[0].style.fontSize = '24pt'
    }

    dark(){
        document.getElementsByTagName('html')[0].style.backgroundColor= 'rgba(25, 3, 77,1)';
        document.getElementsByTagName('html')[0].style.color = 'white'
        document.getElementsByTagName('header')[0].style.backgroundColor= 'black';
        document.getElementsByTagName('header')[0].style.color = 'white';
    }

    light(){
        document.getElementsByTagName('html')[0].style.backgroundColor= 'white';
        document.getElementsByTagName('html')[0].style.color = 'rgba(25, 3, 77,1)';
        document.getElementsByTagName('header')[0].style.backgroundColor= 'rgba(25, 3, 77, 0.158)';
        document.getElementsByTagName('header')[0].style.color = 'rgba(25, 3, 77, 1)';
    }

    render(){
    return (
        <div>
            <nav className='custom'>
                <div>
                    <button className='smallest' onClick={()=> this.smallestFontSize()}>A</button>
                    <button className='middleist' onClick={()=> this.middleistFontSize()}>A</button>
                    <button className='largest' onClick={()=> this.largestFontSize()}>A</button>
                </div>
                <div>
                    <button className='dark' onClick={()=> this.dark()}>Dark</button>
                    <button className='light' onClick={()=> this.light()}>Light</button>
                    
                </div>
            </nav>
        </div>
    )
    }
}

export default CustomBar