import styled from "styled-components";
import { COLOR } from "../../utils/constantStyles";

export const ToastWrapper = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

    width: 200px;
    height: max-content;
    display: flex;
    align-items: center;

    font-family: "Inter";
    font-size: 24px;

    position: absolute;
    top: ${(props) => (props.positionTop ? props.positionTop : 0)};
    right: ${(props) => (props.positionRight ? props.positionRight : 0)};
    bottom: ${(props) => (props.positionBottom ? props.positionBottom : 0)};
    left: ${(props) => (props.positionLeft ? props.positionLeft : 0)};

    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : `${COLOR[props.type]}`};
    color: ${(props) => (props.type === "warning" ? "black" : "white")};

    border-radius: 10px;

    padding: ${(props) =>
            props.paddingTopBottom ? props.paddingTopBottom : 24}px
        ${(props) => (props.paddingLeftRight ? props.paddingLeftRight : 12)}px;

    margin: ${(props) => (props.marginTopBottom ? props.marginTopBottom : 10)}px
        ${(props) => (props.marginLeftRight ? props.marginLeftRight : 10)}px;

    img {
        width: 32px;
        margin-right: 16px;
    }
`;
