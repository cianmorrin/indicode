import React from "react";

function Explore() {
  return (
    <div className="explore">
      <h1>Explore</h1>

      <form>
        <label>
          Active Score:
          <input type="text" name="active" />
        </label>
        <label>
          Reflective Score:
          <input type="text" name="reflective" />
        </label>
        <label>
          Sensing Score:
          <input type="text" name="sensing" />
        </label>
        <label>
          Intuitive Score:
          <input type="text" name="intuitive" />
        </label>
        <label>
          Visual Score:
          <input type="text" name="visual" />
        </label>
        <label>
          Verbal Score:
          <input type="text" name="verbal" />
        </label>
        <label>
          Sequential Score:
          <input type="text" name="sequential" />
        </label>
        <label>
          Global Score:
          <input type="text" name="global" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Explore;
