import React from "react";

const MCQuizPage = ({ questions, onChange, checked }) => {
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
            <br></br>
            <input
              type="radio"
              value="option_C"
              name={question.id}
              checked={checked[question.id] === "option_C"}
              onChange={onChange}
            />
            {"  "}
            {question.option_C}
            <br></br>
            <input
              type="radio"
              value="option_D"
              name={question.id}
              checked={checked[question.id] === "option_D"}
              onChange={onChange}
            />
            {"  "}
            {question.option_D}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MCQuizPage;
