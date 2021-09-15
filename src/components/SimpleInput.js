import { useEffect, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [validate, setValidate] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid =
    enteredName.trim().length > -1 &&
    enteredName.trim().length < 11 &&
    enteredName.trim() !== "";

  useEffect(() => {
    if (enteredNameIsValid) setFormIsValid(true);
    else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]);

  function validateInput() {
    if (enteredNameIsValid) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }

  function onBlurHandler(e) {
    console.log("onBlur event is for leaving focus");
  }

  function onChangeHandler(e) {
    setEnteredName(e.target.value);
    validateInput();
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    // if (enteredName.trim() === "") return;
    console.log(enteredName);
    setEnteredName("");
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={`form-control ${!validate ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          style={
            validate
              ? { border: "2px solid green" }
              : { border: "2px solid red" }
          }
          value={enteredName}
          type="text"
          id="name"
        />
      </div>
      {!validate && <p className="error-text">Please enter a valid name</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
