import React from 'react'
import "./Progressbar.css"

export var ProgressBar = ({ width, percent }) => {

    const [value, setValue] = React.useState(0);
  
    React.useEffect(() => {
      setValue(percent);
    });
  
    return (
      <div>
        <div className="progress-div" style={{ width: `${width}%` }}>
          <div style={{ width: `${value}%` }} className="progress" />
        </div>
      </div>
    );
  };