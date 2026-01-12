import React, { Component } from "react";
import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    componentDidUpdate(prevProps: ErrorBoundaryProps) {
        // Check if children have changed, and reset error state if they have
        if (prevProps.children !== this.props.children) {
            this.setState({ hasError: false });
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box className="error-message" sx={{ padding: 4, textAlign: "center" }}>
                    <Typography className="headinglabel2">Something went wrong......</Typography>
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
