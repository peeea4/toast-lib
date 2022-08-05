import styled from "styled-components";

export const ToastsListWrapper = styled.div`
    position: absolute;
    top: ${(props) => (props.position.top ? props.position.top : "")};
    right: ${(props) => (props.position.right ? props.position.right : "")};
    bottom: ${(props) => (props.position.bottom ? props.position.bottom : "")};
    left: ${(props) => (props.position.left ? props.position.left : "")};
    z-index: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
