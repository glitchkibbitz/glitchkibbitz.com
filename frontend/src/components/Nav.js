import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from './Logo';

const NavStyles = styled.nav`
  /* margin-bottom: 3rem; */
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
  li {
    background: var(--nav-background);
    padding: 5px;
    border-radius: 5px;
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
    border: solid black 2px;
  }
  .logo-item {
    background: transparent;
    border: none;
  }
  a {
    color: var(--white);
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: black;
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    /* &[aria-current='page'] {
      color: var(--red);
    } */
  }
  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
    .logo {
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`;

export default function Nav () {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to="/music">Listen</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li className="logo-item">
                  <Link to="/">
                    <Logo />
                  </Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>                
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </NavStyles>
    );
}
