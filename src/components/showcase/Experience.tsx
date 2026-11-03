import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            
            {/* Automation Specialist Section */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Automation Engineering</h1>
                        <h4>Specialist</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Workflow &amp; System Automation</h3>
                        <b>
                            <p>Core Competency</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Designing and implementing automated architectures to replace manual workflows, accelerate data pipelines, and ensure zero-downtime background tasks.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Autonomous Scripting &amp; Bot Development:</b> Engineered custom automated bots and scripts handling complex tasks, scheduling, and asynchronous processing.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>API Integration &amp; Web Scraping:</b> Built high-throughput data extraction engines and unified multi-service APIs into cohesive pipelines.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>CI/CD &amp; Infrastructure Automation:</b> Automated build, test, and deployment cycles to minimize human error and achieve consistent delivery.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Software Developer Section */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Software Development</h1>
                        <h4>Engineering</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full-Stack &amp; Systems Developer</h3>
                        <b>
                            <p>Core Competency</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Architecting modern web applications, interactive interfaces, and robust backend services focused on performance, modularity, and clean code principles.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Modern Frontend Architecture:</b> Developing rich, interactive web applications utilizing React, TypeScript, state management, and modern component systems.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Backend &amp; API Development:</b> Building scalable RESTful services, WebSocket event systems, and server-side utilities using Node.js and Python.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Code Quality &amp; Optimization:</b> Applying rigorous testing, bundle optimization, and refactoring to achieve smooth, responsive user experiences.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Cyber Security Section */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Cyber Security</h1>
                        <h4>Specialist</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Security Auditing &amp; Defensive Hardening</h3>
                        <b>
                            <p>Core Competency</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Conducting vulnerability assessments, web application security reviews, and defensive configuration to safeguard data and infrastructure against active threats.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Vulnerability Assessment &amp; Penetration Testing:</b> Identifying security flaws, OWASP top 10 vectors, and improper access controls in web applications.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Defensive Hardening:</b> Implementing secure authentication mechanisms, encrypted communications, and security headers across servers and applications.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Threat Analysis &amp; Research:</b> Monitoring emerging vulnerabilities, investigating attack surfaces, and applying defensive mitigations.
                        </p>
                    </li>
                </ul>
                <br />
                <p style={{ fontStyle: 'italic', color: '#555' }}>
                    * Detailed project breakdowns, client deliverables, and case studies will be updated here in sha Allah.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
        marginTop: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;
