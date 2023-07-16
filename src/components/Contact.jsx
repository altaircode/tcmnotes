import { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";

export function Contact() {
    const { themeMode } = useContext(ThemeContext);

    return (
        <div id="contact" className={`bg-fs_${themeMode}`}>
            <div className='bg-primary text-white px-1 md:px-20 p-20 w-11/12 m-auto rounded-xl'>
                <div className='text-center'>
                    <div className="relative mx-auto">
                        <h1 className={`text-white position-relative font-bold z-2 mb-10 text-5xl`}>Get a free consultation</h1>
                    </div>
                </div>
                <div className='flex flex-col text-center justify-center items-center'>
                    <div className='flex flex-col md:flex-row w-full px-10'>
                        <div className='flex w-full mx-2'>
                            <div className="mb-6 w-full text-start">
                                <label className="block mb-2 text-sm font-medium text-white">Name</label>
                                <input placeholder='Your Name' type="text" id="large-input" className="block w-full p-4 text-white focus:border-white focus:outline-none focus:ring-0 border border-[#8AB7A8] rounded-xl placeholder-[#8AB7A8] bg-transparent sm:text-md " />
                            </div>
                        </div>
                        <div className='flex w-full mx-2'>
                            <div className="mb-6 w-full text-start">
                                <label className="block mb-2 text-sm font-medium text-white">Email</label>
                                <input placeholder='Your Email Address' type="text" id="large-input" className="block w-full p-4 text-white focus:border-white focus:outline-none focus:ring-0 border border-[#8AB7A8] rounded-xl placeholder-[#8AB7A8] bg-transparent sm:text-md " />
                            </div>
                        </div>
                        <div className='flex w-full mx-2'>
                            <div className="mb-6 w-full text-start">
                                <label className="block mb-2 text-sm font-medium text-white">Subject</label>
                                <input placeholder='Subject' type="text" id="large-input" className="block w-full p-4 text-white focus:border-white focus:outline-none focus:ring-0 border border-[#8AB7A8] rounded-xl placeholder-[#8AB7A8] bg-transparent sm:text-md " />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full px-10 pr-6 md:pr-10'>
                        <div className='flex w-full mx-2'>
                            <div className="mb-6 w-full text-start">
                                <label className="block mb-2 text-sm font-medium text-white">Message</label>
                                <textarea id="message" rows="4" className="block w-full p-4 -mr-10 text-white focus:border-white focus:outline-none focus:ring-0 border border-[#8AB7A8] rounded-xl placeholder-[#8AB7A8] bg-transparent sm:text-md " placeholder="Enter your message here..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className="text-4xl my-10">
                            <button type="button" className="btn-get-started text-primary bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold rounded-lg text-lg px-5 py-3 text-center inline-flex items-center dark:focus:ring-primary/55 mr-2 mb-2">
                                Send a request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
