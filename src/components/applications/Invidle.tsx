import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface InvidleAppProps extends WindowAppProps {}

const InvidleApp: React.FC<InvidleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Invidle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 invi'}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default InvidleApp;
