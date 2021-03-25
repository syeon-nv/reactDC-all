import React, { Component } from "react";

class AddForm extends Component {
    // createRef -- 나중에 따로 추가 공부할 것
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault(); // 기본 브라우저 이벤트 submit 시, 데이터가 초기화 되는 것을 방지
        const val = this.inputRef.current.value;
        val && this.props.onAdd(val);
        this.formRef.current.reset();
    };

    render() {
        return (
            <form className='addhabit-form' ref={this.formRef} onSubmit={this.onSubmit}>
                <input
                    className='input-habit'
                    type='text'
                    placeholder='Enter your new habit!'
                    ref={this.inputRef}
                />
                {/* 
                    form에서 submit 을 하고 있기 때문에 
                    button 에 따로 클릭 이벤트가 필요 없음
                 */}

                <button className='submit-habit'>Add</button>
            </form>
        );
    }
}

export default AddForm;
