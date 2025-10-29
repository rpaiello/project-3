import { useState } from "react";

function ToDoForm({addCard}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleChange = (e) => {
        if (e.target.id == 'formTitle') {
            setTitle(e.target.value);
        } else if (e.target.id == 'formBody') {
            setBody(e.target.value);
        } else {
            return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCard(title, body);
        setTitle("");
        setBody("");
    }

    return(
        <form>
            <div className="form-row">
                <div>
                    <label htmlFor="formTitle">Title</label>
                    <input type="text" name="formTitle" id="formTitle" value={title} placeholder='ex. "Go Shopping"' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="formBody">Body</label>
                    <textarea name="formBody" id="formBody" value={body} placeholder='ex. "Milk, Eggs, Cheese..."' onChange={handleChange}></textarea>
                </div>
                <div>
                    <input type="submit" onClick={handleSubmit}/>
                </div>
            </div>
            <hr />
        </form>
    )
}

export default ToDoForm;