import React, { Component } from "react";
import HabitHeader from "./habitHeader";
import HabitList from "./habitList";

class PureRcc extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Coding", count: 0 },
      { id: 3, name: "Runnng", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
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

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <HabitHeader
          totalHabitCount={this.state.habits.length}
          processHabitCount={
            this.state.habits.filter((item) => item.count > 0).length
          }
        />
        <HabitList
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default PureRcc;
