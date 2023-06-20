import './portfolio.css'
import React, {Component} from 'react'

export default class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            telephone: `${this.props.telephone}`,
            email: `${this.props.email}`,
            town: `${this.props.town}`
        }
    }; 

    changeValueTelephone = () =>{
        const input = document.querySelector(`#tel`);
        input.value = this.props.telephone
    }

    changeValueEmail = () =>{
        const input = document.querySelector(`#email`);
        input.value = this.props.email
    }

    changeValueTown = () =>{
        const input = document.querySelector(`#town`);
        input.value = this.props.town
    }

    render(){
        return(
            <div className="portfolio__wrapper">
                <img src={this.props.img} alt="" />

                <div className="portfolio__info">
                    <h2>{this.props.name}</h2>
                    <div className="info">
                        <h4>Телефон:</h4>
                        <div className="input">
                            <input type="text" id='tel' defaultValue={this.state.telephone}/>
                            <button onClick={this.changeValueTelephone}>вернуть</button>
                        </div>
                    </div>

                    <div className="info">
                        <h4>email:</h4>
                        <div className="input">
                            <input type="email" id='email' defaultValue={this.state.email}/>
                            <button onClick={this.changeValueEmail}>вернуть</button>
                        </div>
                    </div>

                    <div className="info">
                        <h4>город проживания:</h4>
                        <div className="input">
                            <input type="text" id='town' defaultValue={this.state.town}/>
                            <button onClick={this.changeValueTown}>вернуть</button>
                        </div>
                    </div>


                    <h4>образование:</h4>
                    <ul>
                        {this.props.experiences.map(experience => (
                            <li key={experience}>{experience}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}