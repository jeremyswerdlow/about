import React, { forwardRef, Ref } from "react";

type SectionProps = {
    style?: {},
    children?: any,
};

export const Section = forwardRef((props: SectionProps, ref: Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} style={{width: "80%", margin: "auto", marginTop: "150px", ...props.style}}>
            {props.children}
        </div>
    );
});