import React from "react";
import { Grid, Nav, NavItem } from "react-bootstrap";

function Footer(/*props*/) {
  return (
    <footer>
      <Grid>
        <Nav justified>
          <NavItem eventKey={1}>linked-in, and Prtfolio links</NavItem>
          <NavItem eventKey={2} title="Item" />
          <NavItem eventKey={3}>
            <a className="foot-link" href="https://hdo.utexas.edu/">
              An HDO Capstone ProjectA Master's Degree Project for HDO-UT
            </a>
          </NavItem>
        </Nav>

        <div className="text-center small copyright">© JFF 2017</div>
      </Grid>
    </footer>
  );
}

export default Footer;
