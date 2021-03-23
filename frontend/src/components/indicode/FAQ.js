import React from "react";

function FAQ() {
  return (
    <div className="container">
      <div className="faqtitle">
        <h1>Frequently Asked Questions (FAQ)</h1>
      </div>
      <div className="qa">
        <div className="q">
          <div className="qdiv qd1">Q</div>
          <div className="qt">What is Indicode?</div>
        </div>
        <div className="a">
          <div className="adiv">A</div>
          <div className="at">
            IndiCode is an E-learning application which teaches programming
            through Python. It is designed to adapt to the learning style of the
            user.
          </div>
        </div>
      </div>
      <div className="qa">
        <div className="q">
          <div className="qdiv qd2">Q</div>
          <div className="qt">How is the Learning Style decided?</div>
        </div>
        <div className="a">
          <div className="adiv">A</div>
          <div className="at">
            When a user registers with IndiCode, they are given three options.
            These are (1) The Index Of Learning Style Questionnaire (2)
            Interactive Learnning Style Portal (3) Standard approach.
          </div>
        </div>
      </div>
      <div className="qa">
        <div className="q">
          <div className="qdiv qd3">Q</div>
          <div className="qt">Do I need experience in Programming?</div>
        </div>
        <div className="a">
          <div className="adiv">A</div>
          <div className="at">
            Not at all! IndiCode is designed for beginners, so please try it out
            and let us know how you get on!
          </div>
        </div>
      </div>
      <div className="qa">
        <div className="q">
          <div className="qdiv qd4">Q</div>
          <div className="qt">What is the IndiCode Streak?</div>
        </div>
        <div className="a">
          <div className="adiv">A</div>
          <div className="at">
            IndiCode not only tracks your progress but also how frequent you
            access the site and complete a quiz! Keep your streak up and watch
            your programming skills improve daily!
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
