import React from 'react';

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           date: new Date(),
           timezone: 1,
        }
    }


    render(){
        const tempo = this.state.date.getTime() + this.props.timezone *3600 *1000;
        const time = new Date(tempo);
        console.log(tempo);
        
        return(
            <div className="clock">
                <h2 className="city">{this.props.country}</h2>
                <h2 className="time">{time.toLocaleTimeString()}</h2>
               <img src={this.props.img} alt="dio"/>
            </div>
        )
    }

    changeTime = () =>{
        this.setState({
            date: new Date(),
        })
    }

    componentDidMount(){
        this.interval = setInterval(this.changeTime, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
}
export default Clock;