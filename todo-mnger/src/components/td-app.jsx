import { useState } from "react";
import ToDoForm from "./td-form";
import ToDoDisplay from "./td-display";

function ToDoApp() {
    const [cards, setCards] = useState([]);

    const deleteCard = (id) => {
        const cardsMinusOne = cards.filter(card => card.id !== id);
        setCards(cardsMinusOne);
    }

    const addCard = (title, body) => {
        const newCard = {title: title, body: body, id: Date.now()};
        setCards([...cards, newCard]);
    }

    return(
        <>
            <ToDoForm addCard={addCard} />
            <ToDoDisplay cards={cards} deleteCard={deleteCard} />  
        </>
    )
}

export default ToDoApp;