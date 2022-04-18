import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';


function Contact() {

    const form = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [check, setCheck] = useState(false);

    const onSubmit = (e) => {

        emailjs.sendForm('service_rtbtu1b', 'template_3oqczjd', form.current, 'user_ne1wvrwUw7RlLbCObv0tF')
            .then((result) => {
                console.log(result.text);
                // setNotification(true);
            }, (error) => {
                console.log(error.text);
            });
    };


    const notify = () => {
        toast.success('Successfully submitted', {
            position: "top-center",
            backgroundColor: "black",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        setCheck(true)
    }


    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-8">
                    <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 font-serif text-white ">Contact Us</h1>
                    {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-bas font-serif text-lg text-white link link-underline link-underline-black">Feel free to connect us</p> */}
                </div>
                {
                    !check ?
                        (
                            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label htmlFor="name" className="leading-7 text-base font-serif text-white">Name</label>
                                                <input type="text" id="name" name="user_name"
                                                    {...register("user_name", { required: <p className='text-red-600'>⚠ Please enter your name</p> })}
                                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                {errors.user_name?.message}
                                            </div>
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label htmlFor="email" className="leading-7 text-base font-serif text-white">Email</label>
                                                <input type="email" id="email" name="user_email"
                                                    {...register("user_email", { required: <p className='text-red-600'>⚠ Please enter your email</p>, pattern: { value: /^\S+@\S+$/i, message: <p className='text-red-600'>⚠ This not a valid email</p> } })}
                                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                {errors.user_email?.message}
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label htmlFor="message" className="leading-7 text-base font-serif text-white">Message</label>
                                                <textarea id="message" name="message"
                                                    {...register("message", { required: <p className='text-red-600'>⚠ Please enter your massage</p> })}
                                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                {errors.message?.message}
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            {/* <a href='/thankyou'> */}
                                            <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]" onClick={notify}>Submit</button>
                                            {/* </a> */}
                                            <ToastContainer
                                                position="top-center"
                                                autoClose={3000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                            />

                                        </div>

                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div>
                                <h1 className='text-center text-white text-2xl font-serif'>Thank You for your Feedback</h1>
                            </div>
                        )
                }
            </div>
        </section>
    )
}

export default Contact