import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_SERVICE;
        const templateID = import.meta.env.VITE_TEMPLATE;
        const userID = import.meta.env.VITE_USER;


        emailjs
            .sendForm(serviceID, templateID, form.current, userID)
            .then(
                () => {
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.error('Failed to send message:', error);
                    alert('Failed to send message. Try again later.');
                }
            );

        e.target.reset();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" id="contact">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md" aria-label="Contact Form">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
            <div className="mt-8 flex space-x-4 items-center">
                <span className="font-rouge text-4xl text-black">Follow me</span>
                <a href="https://www.linkedin.com/in/brunobelloso/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in fa-4x ml-4"></i>
                </a>
                <a href="https://github.com/brunobelloso" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github fa-4x ml-4"></i>
                </a>
            </div>
        </div>
    );
};

export default Contact;
