import React from 'react'

const Form = () => {
    return (
        <section id="formSection" className="p-6 text-gray-100">
            <form noValidate=""
                className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-black">
                <h2 className="w-full text-2xl font-bold">Contact Me! <br/> <span className="font-normal text-sm">The submit button works 😄</span></h2>

                <div>
                    <label htmlFor="name" className="text-sm font-bold block mb-1 ml-1">Name</label>
                    <input id="name" type="text" placeholder="Your name" required=""
                           className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"/>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-bold block mb-1 ml-1">Email</label>
                    <input id="email" type="email" placeholder="Your email" required=""
                           className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"/>
                </div>
                <div>
                    <label htmlFor="message" className="text-sm font-bold block mb-1 ml-1">Message</label>
                    <textarea id="message" type="text" placeholder="Message..."
                              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"></textarea>
                </div>
                <div>
                    <button type="submit"
                            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-sky-500 focus:ri hover:ri text-gray-900">Submit!
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form