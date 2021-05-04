import React from 'react';

const QuizButton = (props) => {
    const {score,option} = props.allItem
    return (
        <div>
             <input type="radio" id="male" name="gender" value="male"/>
            <label for="male">{option}</label>
           
        </div>
    );
};

export default QuizButton;