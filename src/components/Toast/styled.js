import styled, { keyframes } from "styled-components";

import { COLOR } from "@/constants/style";

const progressBarDuration = keyframes`
  from {
    width: 0px;
  }

  to {
    width: 100%;
  }
`;

const swipeStartRight = keyframes`
  from {
    transform: translateX(110%);
  }

  to {
    transform: translateX(0);
  }
`;

const swipeEndRight = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(110%);
  }
`;

const swipeStartLeft = keyframes`
  from {
    transform: translateX(-110%);
  }

  to {
    transform: translateX(0);
  }
`;

const swipeEndLeft = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-110%);
  }
`;

const flipStart = keyframes`
  from {
    transform: rotateY(180deg);
  }
`;

const flipEnd = keyframes`
  from {
    transform: rotateY(180deg);
  }

  to {
    transform: translateX(0);
  }
`;

export const ToastWrapper = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

    height: max-content;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    font-family: "Inter";
    min-width: 200px;

    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : `${COLOR[props.type]}`};
    color: ${(props) => (props.type === "warning" ? "black" : "white")};

    border-radius: 10px;

    margin: ${(props) => (props.margin ? props.margin : "10px 0px")};
    overflow: hidden;

    animation: ${(props) =>
        props.position?.split("").slice(-2).join("") === "ft"
            ? props.animation === "swipe"
                ? props.isStart
                    ? swipeStartLeft
                    : swipeEndLeft
                : props.isStart
                    ? flipStart
                    : flipEnd
            : props.animation === "swipe"
                ? props.isStart
                    ? swipeStartRight
                    : swipeEndRight
                : props.isStart
                    ? flipStart
                    : flipEnd}
        150ms linear;
`;
/*

        props.animation === "swipe"
            ? props.isStart
                ? swipeStart
                : swipeEnd
            : props.isStart
                ? flipStart
                : flipEnd

*/
export const Header = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 22px;
`;

export const Description = styled.p`
    margin: 0;
    padding: 0;
    font-size: 12px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const IconWrapper = styled.div`
    img {
        width: 32px;
        height: 32px;
        margin: 0px 16px 0px 10px;
    }
`;

export const CloseButton = styled.button`
    background-color: transparent;
    background-image: url(${[(props) => props.backgroundImage]});
    background-repeat: no-repeat;
    background-size: cover;
    width: 14px;
    height: 14px;
    margin: 10px 10px 10px auto;
    padding: 0;
    cursor: pointer;
    border: 0;
`;

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 0px;
`;

export const ProgressBar = styled.p`
    width: 0px;
    height: 5px;
    background-color: ${COLOR.info};
    margin: 0 0;
    animation: ${progressBarDuration} ${(props) => props.duration / 1000}s
        linear infinite;
`;

export const Content = styled.div`
    display: flex;
`;
