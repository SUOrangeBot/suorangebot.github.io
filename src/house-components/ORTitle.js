import * as React from 'react';

export default function ORTitle(props) {
    return (
        <h2
            style={{
                marginTop: "3rem",
                marginBottom: "2rem",
            }}
        >{props.children}</h2>
    );
}