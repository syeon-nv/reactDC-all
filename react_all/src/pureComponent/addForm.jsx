import React, { PureComponent } from "react";

class AddForm extends PureComponent {
  // addForm.jsx :: 해당 컴포넌트는 한 번 생성된 이후에는 따로 할당 받아야 할 props 가 없기 때문에 pureComponent를 상속하도록 해, 성능 개선을 꾀해야 함
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const val = this.inputRef.current.value;
    val && this.props.onAdd(val);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form
        className="addhabit-form"
        ref={this.formRef}
        onSubmit={this.onSubmit}
      >
        <input
          className="input-habit"
          type="text"
          placeholder="Enter your new habit!"
          ref={this.inputRef}
        />

        <button className="submit-habit">Add</button>
      </form>
    );
  }
}

export default AddForm;
