import React from "react";

import { Toast } from "@/components/Toast";

export default {
    title: "Toast",
    component: Toast,
    argTypes: {
        type: {
            control: {
                type: "select",
            },
            options: ["info", "success", "warning", "error"],
        },
        margin: {
            control: "text",
        },
        backgroundColor: {
            control: "color",
        },
        title: {
            control: "text",
        },
        description: {
            control: "text",
        },
    },
};

const Template = (args) => <Toast {...args} />;

export const Info = Template.bind({});

Info.args = {
    type: "info",
    title: "Info",
    description: "Info description",
    margin: "5px 5px",
};

export const Success = Template.bind({});

Success.args = {
    type: "success",
    title: "Success",
    description: "Success description",
};

export const Warning = Template.bind({});

Warning.args = {
    type: "warning",
    title: "Warning",
    description: "Warning description",
};
export const Error = Template.bind({});

Error.args = {
    type: "error",
    title: "Error",
    description: "Error description",
};
