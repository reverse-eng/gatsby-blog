import React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import SvgFile from '../assets/react.svg';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.2rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
    color: lightgoldenrodyellow;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: tomato;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5px) / 2);
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
}
    `}
  >
    <NavLink to="/" fontWeight="bold">
      <img
        css={css`
          height: 1.2em;
          vertical-align: middle;
          padding-right: 0.2em;
        `}
        src={SvgFile}
        alt="Logo"
      />
      REVERSE-ENG BLOG
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Header;
