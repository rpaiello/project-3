import ToDoCard from "./td-card";
import { useState } from "react";
import './td-display.css';

function ToDoDisplay({cards, deleteCard}) {

    console.log(cards);
    return (
        <>
            <div className="todo-container">
                {cards.map((card, index) => 
            <ToDoCard key={card.id} title={card.title} body={card.body} id={card.id} index={index} deleteCard={deleteCard} /> )}
            </div>
        </>
    )
}

export default ToDoDisplay;