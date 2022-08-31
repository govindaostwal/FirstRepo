import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const TextField = forwardRef(({ label, onBlur, error }, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor="name" className="col-2">
        {label}
      </label>
      <input
        className="col-5 p-2"
        type="text"
        id="name"
        name="name"
        onBlur={onBlur}
        ref={ref}
      />
      {error && <p>this is an error</p>}
    </div>
  );
});

TextField.defaultProps = {
  error: false
};

export default TextField;
