import React, { PureComponent } from "react";
import HabitHeader from "./habitHeader";
import HabitList from "./habitList";

class PureRcc extends PureComponent {
    state = {
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Coding", count: 0 },
            { id: 3, name: "Runnng", count: 0 },
        ],
        modify: { id: 0, name: "", count: 0 },
    };
    handleIncrement = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 }; // d-construtor object
            }
            return item;
        });
        this.setState({ habits });
    };
    handleDecrement = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                const count = habit.count - 1;
                return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
        });
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

    handleReset = () => {
        const habits = this.state.habits.map((item) => {
            if (item.count > 0) {
                return { ...item, count: 0 };
            }
            return item;
        });
        this.setState({ habits });
    };
    handleModify = (habit) => {
        const modify = { ...this.state.modify, id: habit.id, name: habit.name };
        this.setState({ modify });
    };
    render() {
        return (
            <>
                <HabitHeader
                    totalHabitCount={this.state.habits.length}
                    processHabitCount={this.state.habits.filter((item) => item.count > 0).length}
                />
                <HabitList
                    modify={this.state.modify}
                    habits={this.state.habits}
                    onAdd={this.handleAdd}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onModify={this.handleModify}
                />
                <button className='reset-habit common-habit-btn' onClick={this.handleReset}>
                    Reset Count
                </button>
            </>
        );
    }
}

export default PureRcc;
