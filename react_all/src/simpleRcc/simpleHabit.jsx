import React, { Component } from "react";

class SimpleHabit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    // state 오브젝트 안의 count를 1 증가시킨 뒤, state를 업데이트 해야 함
    // setState : class component로 작업 시, state 값 변경을 위해 리액트에서 지원하는 state 변경 함수

    this.setState({ count: this.state.count + 1 });
    // setState 안의 인자는 오브젝트
  };
  handleDecrement = () => {
    // state 오브젝트 안의 count를 1 감소시킨 뒤, state를 업데이트 해야 함
    const countNum = this.state.count - 1; // count 값 변경을 위해 변수 countNum 를 선언함 (기존의 count 와의 혼동을 줄이기 위해 countNum 으로 선언)
    this.setState({ count: countNum < 0 ? 0 : countNum }); // count 값이 음수가 되지 않도록, 삼항연산자를 사용하여 음수값이 나오지 않도록 지정함
  };

  render() {
    return (
      <div className="habit simple-habit">
        <span className="habit-name"> Reading</span>
        <span className="habit-count">{this.state.count}</span>
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
      </div>
    );
  }
}

export default SimpleHabit;
