import { use, useState } from "react";

function ToDoForm({addCard}) {
    const [content, setContent] = useState({title:"", body:""});

    const handleChange = (e) => {
        if (e.target.id == 'formTitle') {
            setContent({title: e.target.value, body: content.body});
        } else if (e.target.id == 'formBody') {
            setContent({title:content.title, body:e.target.value});
        } else {
            return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addCard({title: content.title, body: content.body, id:Date.now()});
        setContent({title:"", body:""});
    }

    return(
        <form>
            <div className="form-row">
                <div>
                    <label htmlFor="formTitle">Title</label>
                    <input type="text" name="formTitle" id="formTitle" value={content.title} placeholder='ex. "Go Shopping"' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="formBody">Body</label>
                    <textarea name="formBody" id="formBody" value={content.body} placeholder='ex. "Milk, Eggs, Cheese..."' onChange={handleChange}></textarea>
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