import React from 'react';
import './Track.css';

export class Track extends React.Component{
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.renderAction = this.renderAction.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack(){
        this.props.onAdd(
            {name: this.props.name, artist: this.props.artist, album: this.props.album, id: this.props.id, uri: this.props.uri}
        );
    }

    removeTrack(){
        this.props.onRemove(
            {id: this.props.id}
        );
    }
    
    renderAction(isRemoval){
        return isRemoval ? <button className="Track-action" onClick={this.removeTrack}>-</button> : <button className="Track-action" onClick={this.addTrack}>+</button>
    }
    
    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.artist} | {this.props.album}
                    {this.renderAction(this.props.isRemoval)}
                    </p>
                    
                </div>
                <button className="Track-action"></button>
            </div>
        )
    }
}