import React, { FC } from "react";

type SectionProps = {
    style?: {}
};

export const Section: FC<SectionProps> = (props) => {
    return (
        <div style={{width: "80%", margin: "auto", marginTop: "150px", ...props.style}}>
            {props.children}
        </div>
    );
};