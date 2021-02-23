import React from "react";

const QuestionPage = ({ questions, onChange, checked }) => {
  return (
    <ul className="list-group mb-4">
      {questions.map((question) => (
        <li key={question.id} className="list-group-item">
          <p className="questionnaire-q">{question.question}</p>
          <br></br>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              value="option_A"
              name={question.id}
              checked={checked[question.id] === "option_A"}
              onChange={onChange}
            />
            {"  "}
            {question.option_A} <br></br>
            <input
              type="radio"
              value="option_B"
              name={question.id}
              checked={checked[question.id] === "option_B"}
              onChange={onChange}
            />
            {"  "}
            {question.option_B}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default QuestionPage;
