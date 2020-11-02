import React from 'react';

import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';

import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const Navigation = () => (
  <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to={ROUTES.LANDING} header>
          GPJP Timer Keeper
        </Menu.Item>
        <Menu.Item as={Link} to={ROUTES.HOME}>Home</Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item as={Link} to={ROUTES.SIGN_UP}>Sign Up</Menu.Item>
          <Menu.Item as={Link} to={ROUTES.SIGN_IN}>Sign In</Menu.Item>
          <Dropdown item simple text='User'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to={ROUTES.ACCOUNT}>Account</Dropdown.Item>
              <Dropdown.Item as={Link} to={ROUTES.ADMIN}>Admin</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={SignOut}>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

      </Container>
    </Menu>
);

export default Navigation;
