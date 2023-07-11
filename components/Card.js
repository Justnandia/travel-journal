import React from "react"

export default function Card(props) {
    return(
        <div className="card">
            <img className="card--image" src={`${props.item.imageUrl}`}/>
            <div className="card-content-container">
                <div className="card-stats">
                    <img  src="../images/pin.png" className="card--pin"/>
                    <span className="location">{props.item.location}</span>
                    <a href='' className="card-link" >View on Google Maps</a>
                </div>
                <h3 className="title">{props.item.title}</h3>
                <span className="date">{props.item.startDate} - {props.item.endDate}</span>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}