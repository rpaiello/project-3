import ToDoCard from "./td-card";
import { useState } from "react";

function ToDoDisplay({cards, deleteCard}) {
    return (
        <div className="todo-container">
            {cards.map(card => 
            <ToDoCard title={card.title} body={card.body} id={card.id} deleteCard={deleteCard}/>
        )}
        </div>
    )
}

export default ToDoDisplay;