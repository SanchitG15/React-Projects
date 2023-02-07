import React from "react";
import ReactDOM from "react-dom";
import Card from "./Components/Card.js"
import data from "./data.js"

export default function App(){
   const cards = data.map(item => {
            return(
                <Card
                    imageUrl = {item.imageUrl}
                    location = {item.location}
                    googleMapsUrl = {item.googleMapsUrl}
                    title = {item.title}
                    startDate = {item.startDate}
                    endDate = {item.endDate}
                    description = {item.description}                               
                />
            )
        })
        
    return(
        <div>
        {cards}
        </div>
    )
}