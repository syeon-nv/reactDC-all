import React, { PureComponent } from "react";

class Habit extends PureComponent {
  /*
      ---- pureComponent 란? ---
      
      얕은 복사로 업데이트를 확인하는 pureComponent
      오브젝트의 key 값이 변함없다면, 업데이트를 감지하지 못함
      따라서, 업데이트 되는 값을 인지시켜야 업데이트가 가능함
    */

  /*
      --- pureComponent 를 쓰는 이유 ---

      react의 기본 특성상, state 가 변경되면 모든 컴포넌트의 render 함수가 계속해서 호출됨
      virtual DOM 에 의해, 업데이트 된 값만 실제 DOM Tree 에 표현이 되지만,
      state 값의 변화가 없는 컴포넌트의 render 함수 또한 불필요하게 호출 되는 것은 좋지 않음
      따라서, state 값의 변화가 있는 컴포넌트의 render 함수만을 호출하도록 하기 위해 pureComponent를 사용함
    */
  handleIncrement = () => {
    /*
       this.props.onIncrement(this.props.habit);
      기존의 일반 component를 사용할 경우의 state 전달방식 > pure 에서는 state 값의 변화를 인지하지 못해 업데이트가 일어나지 않음
    */

    this.props.onIncrement(this.props.count);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name"> {name}</span>
        <span className="habit-count">{count}</span>
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
