import React from 'react';

const SkillsScroller = () => {
    const skills = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
    ];

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '60px',
            marginBottom: '60px'
        }}>
            <style>
                {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .scroller {
            animation: scroll 25s linear infinite;
          }

          .scroller-container:hover .scroller {
            animation-play-state: paused;
          }

          .skill-item:hover {
            transform: translateY(-5px);
          }
        `}
            </style>

            <div
                className="scroller-container"
                style={{
                    width: '100%',
                    overflow: 'hidden',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(71, 70, 70, 0.79)'
                }}
            >
                <div
                    className="scroller"
                    style={{
                        display: 'flex',
                        width: 'fit-content'
                    }}
                >

                    {skills.map((skill, index) => (
                        <div
                            key={`skill-1-${index}`}
                            className="skill-item"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '16px 32px',
                                margin: '0 20px',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            <div style={{
                                fontSize: '40px',
                                fontWeight: '600',
                                color: '#fff',
                                letterSpacing: '0.5px'
                            }}>
                                {skill.name}
                            </div>
                        </div>
                    ))}

                    {skills.map((skill, index) => (
                        <div
                            key={`skill-2-${index}`}
                            className="skill-item"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '16px 32px',
                                margin: '0 20px',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            <div style={{
                                fontSize: '40px',
                                fontWeight: '600',
                                color: '#fff',
                                letterSpacing: '0.5px'
                            }}>
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsScroller;