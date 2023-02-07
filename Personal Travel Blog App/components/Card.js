import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image"/> 
            <div className="card--stats">
                <img src="../images/location-red-icon-simple-design-free-vector.jpg" className="card--locationImage"/>
                <span className="card--location"> {props.location} </span>
                <span className="card--location"><a href = {props.googleMapsUrl} > View on Google Maps </a> </span>
                <h1 className="card--title"> {props.title} </h1>
                <h3 className= "card--date"> {props.startDate} - {props.endDate}</h3> 
                <h3 className="card--description"> {props.description} </h3>
        
                </div>           
        </div>

        
        
    )
}