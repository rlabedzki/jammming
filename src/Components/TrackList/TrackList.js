import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component{
    render(){
        return(
            <div className="TrackList">
                {this.props.tracks.map(track => {
                    return <Track key={track.id} id={track.id} uri={track.uri} name={track.name} album={track.album} artist={track.artist} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
                })}
            </div>
        )
    }
}