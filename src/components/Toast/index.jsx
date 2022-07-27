import { Icon } from "../Icon";
import { ToastWrapper } from "./styled";

export const Toast = ({ children, ...props }) => {
    return (
        <ToastWrapper {...props}>
            <Icon name={props.type} />
            {children}
        </ToastWrapper>
    );
};
