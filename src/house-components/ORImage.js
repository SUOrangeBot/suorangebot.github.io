import * as React from 'react';

export default function ORImage(props) {
  
  const { src, handleOpen } = props;
  return (
    <img
      src={src}
      alt="Robot"
      width={"60%"}
      onClick={handleOpen}
      style={{
        borderRadius: "4px",
        cursor: "pointer",
      }}
    />
  );
}
