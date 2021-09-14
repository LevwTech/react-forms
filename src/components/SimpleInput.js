import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  function onChangeHandler(e) {
    setEnteredName(e.target.value);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(enteredName);
    setEnteredName("");
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={onChangeHandler}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
