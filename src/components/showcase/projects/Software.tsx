import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
import pryzmiumBanner from '../../../assets/pictures/projects/software/pryzmium_banner.svg';
import surgicalSkillsSvg from '../../../assets/pictures/projects/software/surgical_ai_skills.svg';
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

            {/* Featured Project: Pryzmium */}
            <div className="retro-project-card">
                <div className="retro-project-header">
                    <h2 className="retro-project-title">Pryzmium — Autonomous AI Workspace</h2>
                    <span className="retro-tag" style={{ background: '#7c2d12', color: '#ffedd5' }}>FEATURED SYSTEM</span>
                </div>
                <p>
                    <b>Category:</b> Autonomous AI Workspace &amp; Governance Gateway<br />
                    <b>Core Architecture:</b> React 19, TypeScript, Express, Firebase Auth &amp; Firestore, Multi-Gateway Inference
                </p>
                <div className="retro-tag-container">
                    <span className="retro-tag">MULTI-GATEWAY ROUTING</span>
                    <span className="retro-tag">AES-256-GCM VAULT</span>
                    <span className="retro-tag">HUMAN-IN-THE-LOOP</span>
                    <span className="retro-tag">GOOGLE WORKSPACE API</span>
                    <span className="retro-tag">RATE-CAP TELEMETRY</span>
                </div>
                <div className="retro-image-wrapper">
                    <img src={pryzmiumBanner} alt="Pryzmium Multi-Model AI Agent Workspace" />
                </div>
                <p style={{ marginTop: 8 }}>
                    <b>Pryzmium</b> is an enterprise-grade autonomous AI workspace engineered for high-reliability reasoning, 
                    real-world tool execution, and cryptographic security governance. Instead of locking workflows into a single LLM vendor 
                    or exposing sensitive API tokens client-side, Pryzmium routes tasks across <b>8 specialized inference gateways</b> (Alpha, Beta, Gama, Delta) 
                    with deterministic failover upon upstream 429/50x events.
                </p>
                <br />
                <p>
                    Integrated with real-world tool execution pipelines including <b>Google Docs</b> creation, <b>Gmail</b> drafting &amp; dispatch, 
                    <b>Google Calendar</b> ISO-8601 event scheduling, <b>Google Tasks</b> orchestration, and live web search. 
                    Sensitive operations require explicit confirmation gates (Human-in-the-Loop) paired with a verifiable immutable audit trail.
                </p>
                <br />
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/iTzinvi-dev/Pryzmium"
                    className="retro-action-btn"
                >
                    <span>⚡ [View Pryzmium Repository on GitHub]</span>
                </a>
            </div>

            {/* Featured Project: Surgical AI Skills */}
            <div className="retro-project-card">
                <div className="retro-project-header">
                    <h2 className="retro-project-title">Surgical AI Skills — Agent Guardrails &amp; CLI</h2>
                    <span className="retro-tag" style={{ background: '#064e3b', color: '#a7f3d0' }}>PRODUCTION PROTOCOL</span>
                </div>
                <p>
                    <b>Category:</b> Deterministic Agent Guardrails &amp; Developer Tooling<br />
                    <b>Supported Agents:</b> Claude Code, Cursor IDE, Windsurf, GitHub Copilot, OpenClaw, Kimi Code
                </p>
                <div className="retro-tag-container">
                    <span className="retro-tag">ROOT-CAUSE DEBUGGING</span>
                    <span className="retro-tag">BLAST-RADIUS VERIFIER</span>
                    <span className="retro-tag">ANTI-BANDAID LINTER</span>
                    <span className="retro-tag">2-STRIKE AUTO-ROLLBACK</span>
                    <span className="retro-tag">GIT DIFF CEILING</span>
                </div>
                <div className="retro-image-wrapper">
                    <img src={surgicalSkillsSvg} alt="Surgical AI Skills Technical Specification" />
                </div>
                <p style={{ marginTop: 8 }}>
                    <b>Surgical AI Skills</b> is an engineering guardrail protocol and automated bash CLI suite that eliminates 
                    the agentic "death spiral" by forcing coding agents to fix root causes rather than applying blind symptom-masking band-aids.
                </p>
                <br />
                <p>
                    Enforces a 5-step pre-edit trace checklist, AST/grep caller blast-radius verification before function modification, 
                    automated <code>bandaid-lint</code> git diff analysis (blocking blind optional chaining and swallowed exceptions), 
                    and a strict <b>2-Strike Auto-Rollback rule</b> with clean git stash snapshotting.
                </p>
                <br />
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/iTzinvi-dev/Surgical-AI-Skills"
                    className="retro-action-btn"
                >
                    <span>🛡️ [View Surgical AI Skills on GitHub]</span>
                </a>
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
