import React, { PureComponent } from "react";

class HabitHeader extends PureComponent {
    render() {
        const { totalHabitCount, processHabitCount } = this.props;
        return (
            <header>
                <h2 className='habit-header-title'>My Habits</h2>
                <div className='ly-habit-counts'>
                    <p className='bl-habit-count'>
                        total count : <span className='habit-count'>{totalHabitCount}</span>
                    </p>
                    <p className='bl-habit-count'>
                        ~ing habits :<span className='habit-count'>{processHabitCount}</span>
                    </p>
                </div>
            </header>
        );
    }
}

export default HabitHeader;
