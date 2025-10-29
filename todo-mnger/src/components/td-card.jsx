import { useState } from 'react';
import './td-card.css'

function ToDoCard({title, body, id, index, deleteCard}) {
    const [checked, setChecked] = useState(false);
    const now = new Date();
    
    console.log(body);

    const del = () => {
        deleteCard(id);
    }

    const handleCheck = (event) => {
        const [thisTitle, thisBody] = [event.target.closest('#title'), event.target.closest('#body')];
        setChecked(!checked);
        if (checked) {
            thisTitle.style.textDecoration = `line-through`;
            thisBody.style.textDecoration = `line-through`;
        } else {
            thisTitle.style.textDecoration = `none`;
            thisBody.style.textDecoration = `none`;
        }
    }

    return (
        <div className="todo-card">
            <h4>#{index}</h4>
            <p>{now.getMonth()} {now.getDate()} {now.getHours()}:{now.getMinutes()}</p>
            <hr />
            <div className="form-row">
                <div>
                    <form>
                        <input type="checkbox" checked={checked} onChange={handleCheck} />
                    </form>
                </div>
                    {/* <h4 id="title">{title}</h4>
                    <p id="body">{body}</p> */}
                <div>
                </div>
            </div>
            <p className="del" onClick={del}></p>
        </div>
    )
}

export default ToDoCard;