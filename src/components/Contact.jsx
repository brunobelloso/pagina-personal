import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" id="contact">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h1>
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Your phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            rows="4"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Follow Me</h2>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/brunobelloso" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/brunobelloso" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;