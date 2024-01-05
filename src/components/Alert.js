import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // Define different dark mode color schemes
  const colorSchemes = {
    default: "bg-dark text-light", // Default dark mode colors
    custom1: "bg-custom1 text-light", // Custom dark mode colors 1
    custom2: "bg-custom2 text-light", // Custom dark mode colors 2
    // Add more color schemes as needed
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${
            props.alert.type
          } alert-dismissible fade show ${
            colorSchemes[props.mode] || colorSchemes.default
          }`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}
