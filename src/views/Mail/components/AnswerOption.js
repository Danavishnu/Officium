import React from 'react';
import PropTypes from 'prop-types';
var checked;

function mark_update(checked,ell){
  if(checked)
  {
    console.log(ell)
    console.log('correct answer');
    localStorage.setItem('marks',localStorage.getItem('marks')+1)
    
  }
}
function AnswerOption(props) {
  return (
    
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer} 
        onClick={mark_update(checked,props.answerType)}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      
       
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
