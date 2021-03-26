import React, { Component } from "react";
import AddForm from "./addForm";
import Habit from "./habit";

class HabitList extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count--;
    // habits[index].count = habits[index].count < 0 ? 0 : habits[index].count;
    // this.setState({ habits });
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <AddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => {
            return (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default HabitList;
