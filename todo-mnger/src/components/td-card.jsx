import { useEffect, useState } from 'react';
import './td-card.css'

function ToDoCard({title, body, id, index, deleteCard}) {
    const [checked, setChecked] = useState(false);
    const [month, dayOf, hour, minute] = [id.getMonth(), id.getDate(), id.getHours() < 10 ? `0${id.getHours()}` : id.getHours(), id.getMinutes() < 10 ? `0${id.getMinutes()}` : id.getMinutes()]

    const del = () => {
        deleteCard(id);
    }

    const handleCheck = () => {
        const self = document.querySelector(`#id${id.getTime()}`);
        setChecked(!checked);
        if (!checked) {
            self.style.textDecoration = `line-through`;
        } else {
            self.style.textDecoration = `none`;
        }
    }

    return (
        <div className="todo-card">
            <div className="metainfo">
                <span id='index'>#{index+1}</span>
                <br />
                <span>{month}-{dayOf} {hour}:{minute}</span>
            </div>
            <hr />
            <div className="form-row">
                <div>
                    <input type="checkbox" checked={checked} onChange={handleCheck} />
                </div>
                <div className='bodytext' id={`id${id.getTime()}`}>
                    <b id='title'>{title}</b>
                    <p id='body'>{body}</p>
                </div>
            </div>
            <p className="del" onClick={del}>delete?</p>
        </div>
    )
}

export default ToDoCard;