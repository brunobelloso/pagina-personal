import React from 'react';

const Hero = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100"
        >
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-50"
                style={{ backgroundImage: "url(profile-picture.jpeg)" }}
            ></div>
            <img
                src="profile-picture.jpeg"
                alt="Profile"
                className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <h1 className="mt-4 text-4xl font-bold font-rouge text-black relative">Bruno Belloso</h1>
            <p className="mt-2 text-lg text-black relative">
                I am a programmer and systems administrator in development. Passionate about new technologies and challenges.            </p>
        </div>

    );
};

export default Hero;