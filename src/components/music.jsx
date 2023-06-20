import './music.css';
import React, {Component}  from 'react';

export default class Album extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className="music__wrapper">
                <img src={this.props.img} alt="" />
                    <h2>Название альбома: {this.props.nameAlbum}</h2>
                    <h4>Исполнитель: {this.props.nameGroup}</h4>
                    <h4>Год издания: {this.props.year}</h4>
            </div>
        )
    }

}