import React, { Component } from "react";
import Habit from "./habit";

class HabitList extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Coding", count: 0 },
      { id: 3, name: "Runnng", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    // react : 본래의 값들을 해치지 않도록, 복사한 값을 통해 state 를 변경함을 권장함
    const habits = [...this.state.habits];
    // habit 컴포넌트에서 받아온 habit의 값을 변경하기 위해 우선적으로 index 값을 가져옴
    const index = habits.indexOf(habit);
    // habits 배열 안의 habit(state 값을 변경할 컴포넌트)의 count의 값을 우선 변경
    habits[index].count++;
    // 리액트에 변경된 값을 setState 함수를 사용하여, state 가 변경되었음을 알림 - 업데이트 된 habits 를 현재의 this.state.habits 로 변경할 것을 선언함
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count--;
    habits[index].count = habits[index].count < 0 ? 0 : habits[index].count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    // filter 함수의 사용 : map 과 비슷함, item.id 와 현재 선택한 컴포넌트의 id 값이 완벽하게 동일하면 제외하고 나머지만 필터링해서 리스트로 보여줌
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => {
          return (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          );
        })}
      </ul>
    );
  }
}

export default HabitList;
