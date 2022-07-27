import React from "react";
import { Toast } from "../components/Toast";

export default {
    title: "Toast",
    component: Toast,
    argTypes: {
        positionTop: { control: "number" },
        positionBottom: { control: "number" },
        positionRight: { control: "number" },
        positionLeft: { control: "number" },
        type: {
            control: {
                type: "select",
            },
            options: ["info", "success", "warning", "error"],
        },
        marginTopBottom: { control: "number" },
        marginLeftRight: { control: "number" },
        paddingTopBottom: { control: "number" },
        paddingLeftRight: { control: "number" },
        backgroundColor: {
            control: "color",
        },
    },
};

const Template = (args) => <Toast {...args} />;

export const Info = Template.bind({});

Info.args = {
    children: "Toast",
    type: "info",
};

export const Success = Template.bind({});

Success.args = {
    children: "Toast",
    type: "success",
};

export const Warning = Template.bind({});

Warning.args = {
    children: "Toast",
    type: "warning",
};
export const Danger = Template.bind({});

Danger.args = {
    children: "Toast",
    type: "danger",
};
