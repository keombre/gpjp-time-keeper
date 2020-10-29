import React from 'react';

import {
  Alignment,
  Classes,
  Navbar
} from "@blueprintjs/core";

import { IconNames } from "@blueprintjs/icons";

import * as ROUTES from '../../constants/routes';
import { LinkButton } from '../Helpers';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading><Link to={ROUTES.LANDING}>GPJP Time Tracker</Link></Navbar.Heading>
        <Navbar.Divider />
        <LinkButton to={ROUTES.HOME} icon={IconNames.HOME} className={Classes.MINIMAL}>Home</LinkButton>

        <LinkButton to={ROUTES.ADMIN} icon={IconNames.KEY} className={Classes.MINIMAL}>Admin</LinkButton>
        <LinkButton to={ROUTES.ACCOUNT} icon={IconNames.USER} className={Classes.MINIMAL}>Account</LinkButton>
    </Navbar.Group>
  </Navbar>
);

export default Navigation;
