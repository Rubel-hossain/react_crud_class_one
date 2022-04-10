import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    setLists((prevState) => [
      ...prevState,
      { id: uuidv4(), title: inputValue },
    ]);
    setInputValue("");
    e.preventDefault();
  };

  const handleDelete = (id) => {
    setLists(lists.filter( item => item.id !== id));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto my-5">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Your List"
              required
              onChange={handleInputChange}
              value={inputValue}
            />
            <button className="btn btn-success mt-2">Add List</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <ul className="list-group">
              {lists.map(list => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={list.id}>
                    <div>{ list.title }</div>
                    <div className="action">
                       <button onClick={() => handleDelete(list.id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
