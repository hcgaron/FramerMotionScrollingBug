import React from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components/macro';
import { motion } from 'framer-motion';

import { FaReact, FaVuejs, FaNodeJs } from 'react-icons/fa'
import { DiRust, DiJavascript, DiMongodb } from 'react-icons/di'
import { IconContext } from "react-icons";
import ScrollDownIconFramer from './components/ScrollDownIcon/ScrollDownIconFramer';
import ScrollDownIconNoFramer from './components/ScrollDownIcon/ScrollDownIconNoFramer';

const ExpandingContentReplacer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: blue;
`;

const GridDivReplacer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  /* align-items: center; */
  font-size: 1.6rem;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;

  background-color: teal;
`;

const SlidingDivReplacer = styled.div`
  position: absolute;
  max-height: 100%;
  width: 160%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: lightslategrey;
  grid-row: 1 / -1;
  grid-column: 1 / 2;
`;

const ContentSectionReplacer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 2rem;
    background-color: rgba(245, 245, 245, 1);
    min-height: 900px;
    width: 100%;
`;

const AboutSectionContentReplacer = styled.div`
  .wrapper {
    position: relative;
    max-width: 100%;
    font-size: 2rem;
  }

  .jumbotronDiv {
    position: relative;
    min-height: 100%;
    background-color: tomato;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: start;
    padding: 5rem 1rem;
    margin-bottom: 12rem;
    overflow-x: hidden;
  

    .about__header-name {
        font-family: sans-serif;
        margin-top: 10rem;
        margin-bottom: 6rem;
        color: #fff;
        font-size: 8rem;
        flex: 0 0 100%;
        align-self: flex-start;
        /* border: 1px solid black; */
    }

    .about__header-slogan {
        flex: 0 0 100%;
        font-size: 2rem;
        margin-bottom: 12rem;
        font-style: italic;
        opacity: .7;
        text-align: center;
    }

    .about__creative-background {
        flex: 1 0 100%;
        padding: 1rem;
        padding-left: 2rem;
        justify-self: center;

        @media only screen and (min-width: 900px) {
            max-width: 85%;
        }

        @media only screen and (min-width: 1100px) {
            max-width: 80%;
        }
    }

    .about__bio-container {
        flex: 1 0 115%;
        min-height: 25vw;
        position: relative;
        left: -1rem;
        padding: 4rem 3rem;
        display: flex;
        flex-wrap: wrap;
        background-color: #1c1b20;
        color: white;
        justify-content: center;
        margin-bottom: 12rem;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: -30px;
            left: -1px;
            right: -1px;
            bottom: -30px;
            background: tomato;
            transform: translateX(110%);
            /* ${props => {
    return `transform: translateX(${props.translateAmount}) translateZ(0);`
  }} */
            transition: transform 1200ms cubic-bezier(0.7, 0, 0.3, 1) .8s;
        }

        h3 {
            flex: 0 0 90%;
            margin-bottom: 2rem;
        }

        p {
            color: #9A96B0;
            font-family: sans-serif;
            flex: 0 0 90%;
            font-size: 1.8rem;
            line-height: 1.3;
            
            &:not(:last-child) {
                margin-bottom: 4rem;
            }
        }
    }
  }
`;

const BlockContainerReplacer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10rem;
  padding: 0 4rem;

  .block__title {
        margin-bottom: 4rem;
        flex: 0 0 100%;

        @media only screen and (min-width: 900px) {
        padding: 2rem;
    }
        
        h3 {
            font-size: 4rem;
            margin-bottom: 4rem;
            overflow: hidden;
        }

        .block__animated-title {
            span {
                /* overflow: hidden; */
                display: inline-block;
            }
        }
    }

    .block__content {
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        max-width: 80%;

        @media only screen and (min-width: 900px) {
            flex: 0 0 50%;
        }
    }
`;


const SVGIconSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0 2rem;
    margin-bottom: 10rem;

    .svg-span {
        /* border: 1px solid black; */
        display: block;
        flex: 0 0 33;
        text-align: center;
        color: darkslategray;
        transition: all .2s;

        &:hover {
            color: darkslategrey;
        }
        
        &:not(:last-child) {
            margin-bottom: 4rem;
        }
    }

    @media only screen and (min-width: 900px) {
        width: 75%;
    }
`;

const FooterContainerReplacer = styled.div`
    background-color: #2e2e2e;
    min-height: 22vw;
    padding: 4rem 3rem;
    position: relative;

    .footer__flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

        @media only screen and (min-width: 900px) {
            margin-top: 4rem;
            width: 78%;
          }
        }

    .footer__cta {
        flex: 0 0 50%;
        color: rgba(225, 225, 225, .8);
        margin-bottom: 4rem;
        font-family: 'Libre Baskerville';
        font-style: italic;
        text-align: center;
    }
`;

const ButtonPrimaryReplacer = styled.button`
    padding: 1.5rem 2rem;
    border-radius: 5px;
    background: none;
    border: 3px solid lightgrey;
    color: #eee;
    font-family: sans-serif;
    font-size: 3rem;
    width: 100%;
    margin-bottom: 4rem;
    transition: all .3s;

    &:hover {
        box-shadow: 0 0 25px #fff;
    }
`;






function App() {
  return (
    <ExpandingContentReplacer>
      <GridDivReplacer>
        <SlidingDivReplacer>
          <ContentSectionReplacer>
            <AboutSectionContentReplacer>
              <div className="wrapper">
                <div className="jumbotronDiv">
                  <h1 className="about__header-name">My Name</h1>
                  
                  
                  


                  {/* <ScrollDownIconFramer /> */}
                  <ScrollDownIconNoFramer />





                  <div className="about__bio-container">
                    <h3>Who Am I?</h3>
                    <p>I'm just a guy trying to fix a scrolling issue I've encountered on mobile safari.  What a mess!</p>
                    <p>I'm no slouch, and I've put so much effort into this issue.  I've tried every hack I could find on the web
                      to no avail.  The biggest problem? My site is ready to launch if not for this issue!
                    </p>
                  </div>


                  <div className="about__header-slogan">
                    <h3>There's no problem a little creativity can't solve.</h3>
                    <h3>Except maybe this one.</h3>
                  </div>

                  <div className="about__creative-background">
                    <p>
                      I'm ready to get this scrolling issue sorted once and for all.  I think it has to do with dynamically
                      setting height via javaScript, or having some elements rendered behind this one that possibly scroll
                      when the rubberband effect kicks in.
                </p>
                  </div>
                </div>

                <BlockContainerReplacer>
                  <div className="block__title">
                    <h3 className="block__animated-title">
                      <span>Content&nbsp; </span>
                      <span>Goes&nbsp;</span>
                      <span>Here</span>
                    </h3>
                  </div>

                  <div className="block__content">
                    <p>
                      If this issue is resolved I'll be able to put this behind me, but I suspect it won't be as simple as that.
                      Maybe the whole layout has to change!
                    </p>
                  </div>
                </BlockContainerReplacer>

                <IconContext.Provider value={{ size: '10rem' }}>
                  <SVGIconSection>
                    <span className="svg-span">
                      <FaReact />
                    </span>
                    <span className="svg-span">
                      <FaVuejs />
                    </span>
                    <span className="svg-span">
                      <FaNodeJs />
                    </span>
                    <span className="svg-span">
                      <DiJavascript />
                    </span>
                    <span className="svg-span">
                      <DiRust />
                    </span>
                    <span className="svg-span">
                      <DiMongodb />
                    </span>
                  </SVGIconSection>
                </IconContext.Provider>

                <div style={{ position: 'relative' }}>
                  <FooterContainerReplacer>
                    <div className="footer__flex-container">

                      <div className="footer__cta">
                        I'm pretty sure...
                      </div>

                      <div className="footer__cta">
                        It's framer motion
                      </div>
                      <a style={{ textDecoration: 'none', color: 'inherit', width: '100%' }} href="#" target="_blank" rel="noopener noreferrer">
                        <ButtonPrimaryReplacer>Contact Me</ButtonPrimaryReplacer>
                      </a>

                    </div>
                  </FooterContainerReplacer>
                </div>
              </div>
            </AboutSectionContentReplacer>
          </ContentSectionReplacer>
        </SlidingDivReplacer>
      </GridDivReplacer>
    </ExpandingContentReplacer>
  );
}

export default App;
