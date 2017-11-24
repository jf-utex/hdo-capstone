import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
      <div className="row">
        <br />
        <br />
        <Grid>
          <Nav justified>
            <NavItem eventKey={1} href="https://github.com/jf-utex" />
            <NavItem
              eventKey={2}
              href="https://www.linkedin.com/in/jeannie-flaherty-369427122/"
            />

            <NavItem eventKey={3} href="https://jf-utex.github.io">
              Visit Me Here!
              <img src="/css/img/bearlogo1.png" alt="" width="50" />
            </NavItem>
          </Nav>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
