import React, { Component } from 'react';


class Header extends Component {
   constructor(props) {
       super(props);

       this.state = {
           keywords: ''
       }
       console.log(props)
   }
   
   inputChange(event) {
        this.setState({
            keywords: event.target.value
        })
   } 



    render() {

        return (
            <header className="logo" 
            onClick={() => console.log('clicked')}>
                <div>Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
            </header>
        )
    }
}

export default Header;