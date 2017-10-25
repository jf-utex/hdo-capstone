import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
      <Grid>
        <Nav justified>
          <NavItem eventKey={1}>
            {/* <img src="/css/img/logo.png" alt="" width="100" /> */}
          </NavItem>
          <NavItem eventKey={2}>
            {/* <img src="/css/img/logo.png" alt="" width="100" /> */}
          </NavItem>
          <NavItem eventKey={3}>
            <img src="/css/img/logo.png" alt="" width="100" />
          </NavItem>
        </Nav>
      </Grid>
    </footer>
  );
}

export default Footer;
