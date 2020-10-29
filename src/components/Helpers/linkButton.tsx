import * as React from 'react';
import {
    RouteComponentProps,
    withRouter,
} from 'react-router-dom'

import { Button, IButtonProps } from "@blueprintjs/core";

interface LinkButtonProps extends RouteComponentProps, IButtonProps {
    to: string;
}

class LinkButton extends React.Component<LinkButtonProps> {
    public render = () => {
        const {history, location, match, staticContext, ...props} = this.props
        return (
            <Button {...props} onClick={() => this.props.history.push(this.props.to)} />
        )
    }
}

export type { LinkButtonProps }

export default withRouter(LinkButton)
