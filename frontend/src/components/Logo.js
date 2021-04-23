import React from 'react';
import styled from 'styled-components';
import font from '../assets/fonts/Sholom.woff';

const LogoStyles = styled.div`
  @font-face {
    font-family: Sholom;
    src: url(${font});
  }
  font-family: Sholom, serif;
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 5px, 8px);
  width: 38em;
  margin: 0;
  //background: black;
  background-size: 150em;
  /* border: var(--borderSize) solid white; */
  display: flex;
  .inner {
    /* margin: var(--borderSize); */
    flex: 1;
    //background: black;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  h1 {
    color: var(--white);
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    //transform: translateY(-0.7em);
  }
  .kibbitz {
    font-size: 3.2em;
    letter-spacing: -0.02em;
    --rotate: -12deg;
  }
  .glitch-kibbitz {
    transform: scale(1.2);
    display: block;
  }
  .letter {
    font-size: 5em;
    color: var(--white);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.G {
      --translateX: -0.05;
    }
    &.l {
      --rotate: 2deg;
      --scale: 1.4;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.i {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.t {
      --rotate: 3deg;
      --scale: 0.9;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.c {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.06em;
    }
    &.h {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
  }
`;

export default function Logo() {
    return (
        <LogoStyles className="logo">
            <div className="inner">
                <h1>
                    <span className="glitch-kibbitz">
                        <span className="letter G">G</span>
                        <span className="letter l">l</span>
                        <span className="letter i">i</span>
                        <span className="letter t">t</span>
                        <span className="letter c">c</span>
                        <span className="letter h">h</span>
                        <span className="kibbitz">Kibbitz</span>
                    </span>
                </h1>
            </div>
        </LogoStyles>
    );
}