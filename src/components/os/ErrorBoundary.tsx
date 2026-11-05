import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error,
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Unhandled error caught by ErrorBoundary:', error, errorInfo);
    }

    private handleRestart = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div style={styles.container}>
                    <div style={styles.errorBox}>
                        <div style={styles.titleBar}>
                            <span style={styles.titleText}>inviOS - System Recovery</span>
                        </div>
                        <div style={styles.content}>
                            <p style={styles.heading}>
                                An unexpected application error occurred:
                            </p>
                            <pre style={styles.errorMessage}>
                                {this.state.error?.message || 'Unknown runtime error'}
                            </pre>
                            <p style={styles.instruction}>
                                Press the button below to restart inviOS.
                            </p>
                            <div style={styles.buttonContainer}>
                                <button
                                    style={styles.button}
                                    onClick={this.handleRestart}
                                >
                                    Restart inviOS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#008080',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'MSSerif', 'MS Sans Serif', Tahoma, sans-serif",
    },
    errorBox: {
        width: 440,
        maxWidth: '90vw',
        backgroundColor: '#c0c0c0',
        border: '2px solid #ffffff',
        borderRightColor: '#404040',
        borderBottomColor: '#404040',
        boxShadow: '2px 2px 0px #000000',
    },
    titleBar: {
        backgroundColor: '#000080',
        color: '#ffffff',
        padding: '3px 6px',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.5,
    },
    titleText: {
        color: '#ffffff',
    },
    content: {
        padding: 16,
    },
    heading: {
        margin: '0 0 8px 0',
        fontSize: 13,
        color: '#000000',
    },
    errorMessage: {
        backgroundColor: '#ffffff',
        border: '1px solid #808080',
        padding: 8,
        fontSize: 12,
        color: '#cc0000',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        maxHeight: 120,
        overflowY: 'auto',
        fontFamily: 'monospace',
    },
    instruction: {
        margin: '12px 0',
        fontSize: 12,
        color: '#333333',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 12,
    },
    button: {
        backgroundColor: '#c0c0c0',
        border: '2px solid #ffffff',
        borderRightColor: '#404040',
        borderBottomColor: '#404040',
        padding: '4px 16px',
        fontSize: 13,
        fontFamily: 'inherit',
        cursor: 'pointer',
    },
};

export default ErrorBoundary;
