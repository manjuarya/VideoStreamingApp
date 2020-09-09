// React core
import React from 'react';
import { Link } from "react-router-dom";

function Card(props) {
	// Render
	return (
		<article className="Card">
			<Link to={'/video/' + props.prop.id}>
				<img className="preview" src={require('../../assets/images/' + props.prop.media + '.jpg')} alt={props.prop.description}></img>
			</Link>

			<div className="meta-data">
				<div className="left" >
					<img className="channel-thumb" src={require('../../assets/images/channels/' + props.prop.channelThumb + '.jpg')} alt="Channel thumbnail" />
				</div>
				<div className="right">
					<h1 className="title">{props.prop.title}</h1>
					<p className="description">{props.prop.channelName}</p>
					<p className="description">{props.prop.views} views</p>
				</div>
			</div>
		</article>
	)
}

export default Card;