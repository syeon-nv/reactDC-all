import React, { Component } from "react";

class Habit extends Component {
  // habitList 에서 받은 props : onIncrement, onDecrement, onDelete / habit / key
  // onIncrement, onDecrement, onDelete : state 값을 변경할 함수들
  // habit: 하나의 컴포넌트(현재의 컴포넌트)

  handleIncrement = () => {
    // props로 받았던 onIncrement 함수로 현재 habit을 상위 컴포넌트로 전달함
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { habit } = this.props;
    return (
      <li className="habit">
        <span className="habit-name"> {habit.name}</span>
        <span className="habit-count">{habit.count}</span>
        <button
          className="habit-btn habit-increase"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          className="habit-btn habit-decrease"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <button className="habit-btn habit-delete" onClick={this.handleDelete}>
          x
        </button>
      </li>
    );
  }
}

export default Habit;
