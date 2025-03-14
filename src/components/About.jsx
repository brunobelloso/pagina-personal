import React from 'react';

const About = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8" id="about" aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-5xl text-white mb-6">About Me 👋</h2>
            <div className="space-y-6 max-w-prose bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-800 text-left">
                    Hi! I'm Bruno, a results-driven developer and systems administrator with a strong background in automation, web development, and data management. 🚀
                </p>
                <p className="text-lg text-gray-800 text-left">
                    With expertise in Python, JavaScript, SQL, and Linux, I specialize in streamlining workflows, optimizing web services, and enhancing system security. 🔧
                </p>
                <p className="text-lg text-gray-800 text-left">
                    I have hands-on experience in automating data processes, building REST APIs, and maintaining high-performance server environments. Passionate about problem-solving and continuous learning, I thrive in dynamic environments where I can apply my technical skills to drive efficiency and innovation. 💡
                </p>
                <p className="text-lg text-gray-800 text-left">
                    Let's connect and build something amazing together! 🌟
                </p>
            </div>
        </section>
    );
};

export default About;