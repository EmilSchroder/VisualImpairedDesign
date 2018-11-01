import React from 'react'

class CustomBar extends React.Component {
    constructor(props){
        super(props)

        this.smallestFontSize = this.smallestFontSize.bind(this)
        this.middleistFontSize = this.middleistFontSize.bind(this)
        this.largestFontSize = this.largestFontSize.bind(this)
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


    render(){
    return (
        <div>
            <nav>
                <div>
                    <button className='smallest' onClick={()=> this.smallestFontSize()}>A</button>
                    <button className='middleist' onClick={()=> this.middleistFontSize()}>A</button>
                    <button className='largest' onClick={()=> this.largestFontSize()}>A</button>
                </div>
            </nav>
        </div>
    )
    }
}

export default CustomBar