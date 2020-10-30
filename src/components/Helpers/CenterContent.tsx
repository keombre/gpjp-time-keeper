import React from "react";

type Props = {
    children?: React.ReactNode;
}

const CenterContent = (props: Props) => (
    <div className="container-center">
        { props.children }
    </div>
)

export default CenterContent
