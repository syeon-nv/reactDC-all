import React, { PureComponent } from "react";

const AddForm = () => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const val = this.inputRef.current.value;
    val && this.props.onAdd(val);
    this.formRef.current.reset();
  };

  const initialState = {
    inputs: {
      name: "",
    },
  };

  return (
    <form className="addhabit-form" ref={formRef} onSubmit={onSubmit}>
      <input
        className="input-habit"
        type="text"
        placeholder="Enter your new habit!"
        ref={inputRef}
      />

      <button className="submit-habit">Add</button>
    </form>
  );
};

export default AddForm;
