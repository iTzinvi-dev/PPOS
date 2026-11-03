import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software &amp; Technical</h1>
            <h3>Projects</h3>
            <br />
            <p>
                A showcase of software systems, automation tools, and security implementations.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>iTzinvi 3D &amp; OS Portfolio</h2>
                <br />
                <p>
                    An immersive interactive portfolio experience combining a 3D Three.js environment 
                    with a full retro-styled desktop operating system (inviOS). Built with React, TypeScript, 
                    Three.js, and modern CSS3D transformations.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> 3D Workspace Scene rendering the interactive desktop OS monitor.
                        </sub>
                    </p>
                </div>
                <p>
                    The architecture separates the 3D visual workspace from the 2D window manager, 
                    allowing full multitasking, interactive retro games, and detailed portfolio navigation.
                </p>
                <br />
                <h3>Profile Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/iTzinvi-dev"
                        >
                            <p>
                                <b>[GitHub Profile]</b> - github.com/iTzinvi-dev
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Placeholder Project 1: Automation */}
            <div className="text-block">
                <h2>Automation Workflows &amp; Bot Pipelines</h2>
                <br />
                <p>
                    <b>Category:</b> Process Automation &amp; Scripting<br />
                    <b>Status:</b> Project details and case studies will be updated here in sha Allah.<br />
                    Custom automation scripts, background scheduler bots, and robust API data harvesting engines.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>[Repository]</b> - Coming soon on GitHub
                        </p>
                    </li>
                </ul>
            </div>

            {/* Placeholder Project 2: Web Dev */}
            <div className="text-block">
                <h2>Full-Stack Web &amp; Systems Architecture</h2>
                <br />
                <p>
                    <b>Category:</b> Software Engineering<br />
                    <b>Status:</b> Project details and case studies will be updated here in sha Allah.<br />
                    Modern full-stack web applications, microservices, and interactive web tools.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>[Repository]</b> - Coming soon on GitHub
                        </p>
                    </li>
                </ul>
            </div>

            {/* Placeholder Project 3: Cyber Security */}
            <div className="text-block">
                <h2>Cyber Security &amp; Vulnerability Lab</h2>
                <br />
                <p>
                    <b>Category:</b> Security Auditing &amp; Research<br />
                    <b>Status:</b> Project details and case studies will be updated here in sha Allah.<br />
                    Security assessment tools, audit scripts, and defensive hardening configurations.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>[Repository]</b> - Coming soon on GitHub
                        </p>
                    </li>
                </ul>
            </div>

            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
