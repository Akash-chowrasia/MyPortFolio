import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar
      className="dark-bar"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 2001,
      }}
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="/">Akash chowrasia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-menu">
          <NavLink href="/portfolio/home">Home</NavLink>
          <NavLink href="/portfolio/about">About</NavLink>
          <NavLink href="/portfolio/education">Education</NavLink>
          <NavLink href="/portfolio/experience">Experience</NavLink>
          <NavLink href="/portfolio/projects">Projects</NavLink>
          <NavLink href="/portfolio/skills">Skills</NavLink>
          <NavLink href="/portfolio/achievements">Achievements</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
