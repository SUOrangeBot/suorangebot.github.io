import * as React from 'react';

export default function ORHeading(props) {
    var headingSize = props.headingSize;

    // For now, we only have h1 and h2 headings.
    if (headingSize !== "h1") {
        headingSize = "h2";
    }

    return (
        React.createElement(
            headingSize,
            {
                style: {
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                }
            },
            props.children
        )
    );
}
