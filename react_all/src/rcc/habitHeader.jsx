import React, { Component } from "react";

class HabitHeader extends Component {
    render() {
        return (
            <header>
                <h2 className='habit-header-title'>My Habits</h2>
                <span className='habit-total-count'>0</span>
            </header>
        );
    }
}

export default HabitHeader;
