import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
  faInstagram,
  faHackerrank,
  faGitlab,
  faKaggle,
} from "@fortawesome/free-brands-svg-icons";
import { Icon, InlineIcon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';
import { SocialIcon } from 'react-social-icons';


class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener(
      "load",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "load",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
    window.removeEventListener(
      "resize",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
  }
  render() {
    const smallViewArray = this.state.isMobileView
      ? ["", "", "", "", "", ""]
      : ["GitHub", "GitLab", "LinkedIn", "HackerRank", "Leetcode", "GeeksforGeeks", "Keggle", "Facebook", "Instagram","Email", "Phone"];
    return (
      <Navbar
        className="dark-bar"
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 2000,
        }}
        variant="dark"
      >
        <Nav className="mx-auto">
          {/* github */}
          <Nav.Link href="https://github.com/Akash-chowrasia" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} /> {smallViewArray[0]}
          </Nav.Link>
          {/*GitLab*/}
          <Nav.Link href="https://gitlab.com/Akashchowrasia" target="_blank">
            <FontAwesomeIcon icon={faGitlab} /> {smallViewArray[1]}
          </Nav.Link>
          {/* linkedin */}
          <Nav.Link href="https://www.linkedin.com/in/aksia/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> {smallViewArray[2]}
          </Nav.Link>
          {/*HackerRank*/}
          <Nav.Link href="https://www.hackerrank.com/chowrasia_akash1" target="_blank">
            <FontAwesomeIcon icon={faHackerrank} /> {smallViewArray[3]}
          </Nav.Link>
          {/*Leetcode*/}
          <Nav.Link href="https://leetcode.com/Akash_Chowrasia/" target="_blank">
            <Icon icon={leetcodeIcon} />{smallViewArray[4]}
          </Nav.Link>
          {/*GeeksforGeeks*/}
          <Nav.Link href="https://auth.geeksforgeeks.org/user/akash_chowrasia/profile" target="_blank">
            {smallViewArray[5]}
          </Nav.Link>
          {/*Keggle*/}
          <Nav.Link href="https://www.kaggle.com/akashchowasia08" target="_blank">
            <FontAwesomeIcon icon={faKaggle} /> {smallViewArray[6]}
          </Nav.Link>
          {/* facebook */}
          <Nav.Link href="https://www.facebook.com/akash.chowrasia.908/" target="_blank">
            <FontAwesomeIcon icon={faFacebookSquare} /> {smallViewArray[7]}
          </Nav.Link>
          {/* Instagram */}
          <Nav.Link href="https://www.instagram.com/akash_chowrasia/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} /> {smallViewArray[8]}
          </Nav.Link>
          {/*Gmail*/}
          <Nav.Link href="mailto: chowrasia.akash08@gmail.com" target="_blank">
            {smallViewArray[9]}
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}



export default Footer;
