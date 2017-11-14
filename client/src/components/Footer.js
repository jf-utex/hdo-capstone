import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

// ReactDOM.render(
//   <SocialIcon url="http://twitter.com/jaketrent" />,
//   document.body
// );

function Footer(/*props*/) {
  return (
    <footer>
      <div className="row">
        <Grid>
          <Nav justified>
            <NavItem eventKey={1} href="https://github.com/jf-utex">
              <SocialIcon
                url="https://github.com/jf-utex"
                color="#A6327A"
                style={{ height: 25, width: 25 }}
              />
            </NavItem>
            <NavItem
              eventKey={2}
              href="https://www.linkedin.com/in/jeannie-flaherty-369427122/"
            >
              <SocialIcon
                url="https://www.linkedin.com/in/jeannie-flaherty-369427122/"
                color="#A6327A"
                style={{ height: 25, width: 25 }}
              />
            </NavItem>

            <NavItem eventKey={3} href="https://jf-utex.github.io">
              <img src="/css/img/bearlogo.png" alt="" width="50" />
            </NavItem>
          </Nav>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
