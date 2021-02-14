import React from "react";

function Learning() {
  return (
    <div className="learning">
      <div className="edcontent">
        <h3>Strings</h3>
        <p>
          Strings in python are surrounded by either single quotation marks, or
          double quotation marks.{" "}
        </p>
        <p>
          'hello' is the same as "hello". You can display a string literal with
          the print() function:
        </p>
        {/* <img className="strings" src={Strings} /> */}
        <p>
          Assigning a string to a variable is done with the variable name
          followed by an equal sign and the string:
        </p>
        {/* <img className="strings" src={StringAssign} /> */}
        <p>
          Like many other popular programming languages, strings in Python are
          arrays of bytes representing unicode characters.
        </p>
      </div>
      <div className="interpreter">
        <iframe
          className="interpreter"
          src="https://trinket.io/embed/python/3d8d7ce66b"
          width="66%"
          height="100%"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
          background-color="black"
        ></iframe>
      </div>
    </div>
  );
}

export default Learning;
