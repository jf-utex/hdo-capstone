import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer(/*props*/) {
  return (
    <footer>
      <Grid>
        <Nav justified>
          <NavItem eventKey={1}>
            <img
              src={{
                uri: '../../../../css/img/logo.png',
                height: 150
              }}
              alt=""
            />
          </NavItem>
          <div className="text-center medium copyright">
            © JFlaherty copyright 2017
          </div>
        </Nav>
      </Grid>
    </footer>
  );
}

export default Footer;
