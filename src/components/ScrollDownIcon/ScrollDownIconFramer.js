import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
    position: absolute;
    line-height: 1;
    top: 16rem;
    right: 1rem;
    min-width: 2rem;
    transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
`;

const SidewaysText = styled(motion.span)`
    display: inline-block;
    writing-mode: vertical-lr;
    transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    will-change: transform;
`;

function ScrollDownIcon(props) {
    return (
        <Wrapper>
            <SidewaysText
                animate={{translateY: 20}}
                transition={{yoyo: 'Infinity', duration: 1}}
            >scroll →</SidewaysText>
        </Wrapper>
    )
}

export default ScrollDownIcon;