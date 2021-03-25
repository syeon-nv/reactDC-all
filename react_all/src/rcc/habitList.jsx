import React, { Component } from "react";
import AddForm from "./addForm";
import Habit from "./habit";

class HabitList extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () => {
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count--;
        // habits[index].count = habits[index].count < 0 ? 0 : habits[index].count;
        // this.setState({ habits });
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        // // filter 함수의 사용 : map 과 비슷함, item.id 와 현재 선택한 컴포넌트의 id 값이 완벽하게 동일하면 제외하고 나머지만 필터링해서 리스트로 보여줌
        // const habits = this.state.habits.filter((item) => item.id !== habit.id);
        // this.setState({ habits });
        this.props.onDelete(this.props.habit);
    };

    handleAdd = () => {
        // const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
        // this.setState({ habits });
        this.props.onAdd(this.props.habit);
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
