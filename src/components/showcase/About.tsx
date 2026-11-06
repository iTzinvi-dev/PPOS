import React from 'react';
import inviAvatar from '../../assets/pictures/invi_avatar.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm iTzinvi (invi)</h3>
            <br />
            <div className="text-block">
                <p>
                    I am a multifaceted technologist operating across three core domains: 
                    <b> Automation Engineering</b>, <b>Software Development</b>, and <b>Cyber Security</b>. 
                    I focus on engineering reliable end-to-end automated workflows, building performant, scalable applications, 
                    and analyzing systems through a defensive security mindset.
                </p>
                <br />
                <p>
                    Thank you for taking the time to explore my interactive portfolio showcase.
                    If you have questions, project opportunities, or wish to collaborate, feel free to reach out via{' '}
                    <Link to="/contact">the contact form</Link> or directly at{' '}
                    <a href="mailto:itzinvi.official@gmail.com">
                        itzinvi.official@gmail.com
                    </a>.
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me &amp; Professional Focus</h3>
                <br />
                <p>
                    My passion lies at the intersection of efficiency, software craftsmanship, and system integrity.
                    In a rapidly evolving digital landscape, repetitive processes require intelligent automation, 
                    software demands rigorous architecture, and security must be woven into every layer rather than treated as an afterthought.
                </p>

                <h4>1. Automation Engineering</h4>
                <p>
                    Specializing in creating custom automation solutions, task orchestration, API integrations, web scrapers, 
                    and operational bot pipelines. By eliminating manual bottlenecks and optimizing repetitive workflows, 
                    I enable resilient, hands-free infrastructure.
                </p>
                <br />

                <h4>2. Full-Stack Software Development</h4>
                <p>
                    Writing clean, maintainable, and type-safe code using modern technologies including TypeScript, React, 
                    Node.js, Python, and cloud tools. From interactive UI components to scalable backend architectures, 
                    I enjoy transforming intricate requirements into polished digital experiences.
                </p>
                <br />

                <h4>3. Cyber Security</h4>
                <p>
                    Applying proactive security practices, vulnerability identification, web security assessments, 
                    and network analysis. Understanding how systems are penetrated is fundamental to engineering impenetrable defenses.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>Interests &amp; Philosophy</h3>
                        <br />
                        <p>
                            Beyond professional engineering, I am passionate about deep-dive research, reverse engineering, 
                            exploring open source tools, gaming, and interactive design. I believe continuous learning and adaptation 
                            are the greatest assets a technical specialist can possess.
                        </p>
                        <br />
                        <p>
                            <i>"وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ"</i> — And my success is not but through Allah.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={inviAvatar} style={styles.avatarImage} alt="iTzinvi Avatar" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> iTzinvi // invi
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Check out my GitHub profile at{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/iTzinvi-dev"
                    >
                        github.com/iTzinvi-dev
                    </a>{' '}
                    for public repositories and code contributions.
                </p>
                <br />
                <p>
                    Have an idea, project, or opportunity? Get in touch via the{' '}
                    <Link to="/contact">contact page</Link> or email{' '}
                    <a href="mailto:itzinvi.official@gmail.com">
                        itzinvi.official@gmail.com
                    </a>.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
        borderRadius: 4,
    },
    avatarImage: {
        width: 200,
        height: 200,
        borderRadius: 8,
        objectFit: 'cover',
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default About;
