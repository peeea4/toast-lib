import React, { Component } from "react";

import { ErrorWrapper } from "@/components/ErrorBoundary/styled";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error: ", error, "Error info: ", errorInfo);
    }

    render() {
        return this.state.hasError ? (
            <ErrorWrapper>Что-то пошло не так.</ErrorWrapper>
        ) : (
            this.props.children
        );
    }
}
