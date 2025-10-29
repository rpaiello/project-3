import ToDoCard from "./td-card";
import { useState } from "react";

function ToDoDisplay({cards, deleteCard}) {
    console.log(cards);
    return (
        <div className="todo-container">
            {cards.map((card, index) => 
            <ToDoCard key={card.id} title={card.title} body={card.body} id={card.id} index={index+1} deleteCard={deleteCard} />
        )}
        </div>
    )
}

export default ToDoDisplay;