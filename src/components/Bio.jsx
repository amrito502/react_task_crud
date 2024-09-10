import React from "react";

function Bio(props) {
  return (
    <div>
      <div className="card">
        <p>name : {props.name}</p>
        <p>email: {props.email}</p>
        <div className="skills">
          <div>
            {/* {props.skills.map((one, index) => {
              return (
                <div key={index}>
                  <h2>{one}</h2>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
