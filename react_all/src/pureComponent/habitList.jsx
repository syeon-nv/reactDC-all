import React, { PureComponent } from "react";
import AddForm from "./addForm";
import Habit from "./habit";

class HabitList extends PureComponent {
    // habitList.jsx :: 내부 컴포넌트에 부여된 값이 계속해서 변경될 수 있는 컴포넌트이기 때문에 pure든, 아니든 크게 의미가 없음

    /*
    --- Pure Component 사용 시, 주의할 점 ---
    
    habitList.jsx의 컴포넌트를 업데이트 하기 위해서는 각각의 오브젝트의 value 값을 Habit.jsx의 props로 전달하고, 
    그 전달값들의 업데이트를 확인하여 컴포넌트의 업데이트를 할 수 있도록 유도하는 방식을 취할 수 있으나,

    habitList.jsx 와 Habit.jsx 의 컴포넌트는 매우 밀접한 관계를 취하고 있으므로, 
    props 로 habit 을 받는 것이 좀 더 로지컬함

    그러므로,
    새로운 Object를 생성하여 업데이트를 하는 것이 바람직함 --> 매번 깊은 복사를 하여 값을 변경하는 것이 불편하기 때문에 이를 위한 라이브러리가 있음

  */

    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = (name) => {
        this.props.onAdd(name);
    };
    handleModify = (habit) => {
        this.props.onModify(habit);
    };
    render() {
        return (
            <>
                <AddForm onAdd={this.handleAdd} modify={this.props.modify} />
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
                                onModify={this.handleModify}
                            />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default HabitList;
