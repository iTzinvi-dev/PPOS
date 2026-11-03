import React, { useState } from 'react';
import printer from '../../assets/resume/printer.gif';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    const [notice, setNotice] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setNotice(true);
        setTimeout(() => setNotice(false), 3500);
    };

    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : 'Looking for my resume?'}</h3>
                <a rel="noreferrer" href="#resume" onClick={handleClick}>
                    <p style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                        {notice
                            ? 'Resume option active — File upload coming soon in sha Allah!'
                            : 'Resume option (Currently in preparation — Click to check)'}
                    </p>
                </a>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
    },
};

export default ResumeDownload;
