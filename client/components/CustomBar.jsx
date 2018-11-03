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
        document.getElementsByClassName('synopsisWords')[0].style.flexBasis = '37%';
    }

    middleistFontSize(){
        document.getElementsByTagName('html')[0].style.fontSize = '22pt'
        document.getElementsByClassName('synopsisWords')[0].style.flexBasis = '100%';
    }

    largestFontSize(){
        document.getElementsByTagName('html')[0].style.fontSize = '24pt'
        document.getElementsByClassName('synopsisWords')[0].style.flexBasis = '100%';
    }

    dark(){
        document.getElementsByTagName('html')[0].style.backgroundColor= 'rgba(25, 3, 77,1)';
        document.getElementsByTagName('html')[0].style.color = 'white'
        document.getElementsByClassName('headAndBar')[0].style.backgroundColor= 'black';
        document.getElementsByClassName('headAndBar')[0].style.color = 'white';
    }

    light(){
        document.getElementsByTagName('html')[0].style.backgroundColor= 'white';
        document.getElementsByTagName('html')[0].style.color = 'rgba(25, 3, 77,1)';
        document.getElementsByClassName('headAndBar')[0].style.backgroundColor= 'rgba(25, 3, 77, 0.158)';
        document.getElementsByClassName('headAndBar')[0].style.color = 'rgba(25, 3, 77, 1)';
    }

    render(){
    return (
        <div className='customHolder headAndBar'>
            <nav className='custom headAndBar'>
                <div>
                    <button className='smallest' alt='small font' onClick={()=> this.smallestFontSize()}>A</button>
                    <button className='middleist' alt='middle font' onClick={()=> this.middleistFontSize()}>A</button>
                    <button className='largest' alt='large font' onClick={()=> this.largestFontSize()}>A</button>
                </div>
                <div>
                    <button className='dark' alt='dark screen theme' onClick={()=> this.dark()}>Dark</button>
                    <button className='light' alt='light screen theme' onClick={()=> this.light()}>Light</button>
                    
                </div>
            </nav>
        </div>
    )
    }
}

export default CustomBar