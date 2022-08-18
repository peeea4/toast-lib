import React from "react";

import { ToastProvider } from "@/components/ToastProvider";
import { ToastContainer } from "@/containers/ToastContainer";
import { useToast } from "@/hooks/useToast";

import { Button } from "./styled";

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
        toasts: {
            table: {
                disable: true,
            },
        },
        removeToast: {
            table: {
                disable: true,
            },
        },
    },
};

const ToastList = ({ position, animation }) => {
    const showToastHandler = () => {
        const { success } = useToast();
        success("Success");
    };

    return (
        <>
            <ToastProvider position={position} animation={animation} />
            <Button id="show-btn" onClick={showToastHandler}>
                Show Toast
            </Button>
        </>
    );
};

const Template = (args) => <ToastList {...args} />;

export const Example = Template.bind({});

Example.args = {
    animation: "flip",
    position: "top-right",
};
