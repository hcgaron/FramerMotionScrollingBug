import React from 'react';
import styled, { keyframes } from 'styled-components/macro';


const ScrollIconWrapper = styled.div`
    position: absolute;
    line-height: 1;
    top: 16rem;
    right: 1rem;
    min-width: 2rem;
    transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
`;

const bounceText = keyframes`
  0% {
    transform: translateY(0) translateZ(0);
  }

  50% {
    transform: translateY(20px) translateZ(0);
  }

  100% {
    transform: translateY(0) translateZ(0);
  }
`;

const SidewaysText = styled.span`
    display: inline-block;
    writing-mode: vertical-lr;
    transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    will-change: transform;

    animation: ${bounceText} 1s cubic-bezier(0.57, .06, 0.38, 1) infinite;
`;

function ScrollDownIconNoFramer(props) {
    return (
        <ScrollIconWrapper>
            <SidewaysText>scroll →</SidewaysText>
        </ScrollIconWrapper>
    )
}

export default ScrollDownIconNoFramer;