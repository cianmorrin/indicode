import React from "react";

const QuestionPage = ({ questions, onChange, checked }) => {
  return (
    <ul className="list-group mb-4">
      {questions.map((question) => (
        <li key={question.id} className="list-group-item">
          {question.question}
          <br></br>
          <input
            type="radio"
            value="option_A"
            name={question.id}
            checked={checked[question.id] === "option_A"}
            onChange={onChange}
          />
          {}
          {question.option_A}
          <input
            type="radio"
            value="option_B"
            name={question.id}
            checked={checked[question.id] === "option_B"}
            onChange={onChange}
          />{" "}
          {question.option_B}
        </li>
      ))}
    </ul>
  );
};

export default QuestionPage;
