import React from "react";

type Props = {
    children?: React.ReactNode;
}

const SidePanel = (props: Props) => (
    <div className="sidePanel">
        {props.children}
    </div>
)

export default SidePanel
