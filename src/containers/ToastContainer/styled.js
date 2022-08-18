import styled from "styled-components";

import { COLOR } from "@/constants/style";

export const Button = styled.button`
    width: 200px;
    padding: 10px 14px;
    font-size: 17px;
    color: white;
    background-color: ${COLOR.info};
    border: 0;
    border-radius: 10px;
    cursor: pointer;
`;
