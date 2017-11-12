import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
      <div className="row">
        <Grid>
          <Nav justified>
            <NavItem eventKey={1}>
              {/* <img src="/css/img/logo.png" alt="" width="100" /> */}
            </NavItem>
            <NavItem eventKey={2}>
              {/* <img src="/css/img/logo.png" alt="" width="100" /> */}
            </NavItem>
            <NavItem eventKey={3} href="https://jf-utex.github.io">
              <img src="/css/img/logo.png" alt="" width="100" />
            </NavItem>
          </Nav>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
