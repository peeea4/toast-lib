import React from "react";

import { ToastProvider } from "@/components/ToastProvider";
import { COLOR } from "@/constants/style";
import { ToastContainer } from "@/containers/ToastContainer";
import { useToast } from "@/hooks/useToast";

export default {
    title: "Toast Container",
    component: ToastContainer,
    argTypes: {
        position: {
            title: "Container position",
            control: {
                type: "radio",
            },
            options: ["top-left", "top-right", "bottom-right", "bottom-left"],
        },
        animation: {
            title: "Toast animation",
            control: {
                type: "radio",
            },
            options: ["swipe", "flip"],
        },
    },
};

const ToastList = ({ position, animation }) => {
    const showToastHandler = () => {
        const { toast } = useToast();
        toast({
            type: "success",
            title: "Success operation",
            description: "Description",
            duration: 5000,
        });
    };

    return (
        <>
            <ToastProvider position={position} animation={animation} />
            <button
                id="show-btn"
                onClick={showToastHandler}
                style={{
                    width: "200px",
                    padding: "10px 14px",
                    fontSize: "17px",
                    color: "white",
                    backgroundColor: COLOR.info,
                    border: "0",
                    borderRadius: "10px",
                    cursor: "pointer",
                }}
            >
                Show Toast
            </button>
        </>
    );
};

const Template = (args) => <ToastList {...args} />;

export const Example = Template.bind({});

Example.args = {
    animation: "flip",
    position: "top-right",
};
