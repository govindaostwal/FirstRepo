import React, { forwardRef } from "react";

const Checkbox = forwardRef((props, ref) => {
  return (
    <div className="col-12 ml-4 mb-4">
      <input
        className="form-check-input"
        type="checkbox"
        id="terms"
        name="terms"
        ref={ref}
      />
      <label for="terms">Agree terms and conditions</label>
    </div>
  );
});

export default Checkbox;
