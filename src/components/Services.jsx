import { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";

export function Services() {
    const { themeMode, text_color } = useContext(ThemeContext);
    return (
        <div id="services" className={`bg-${themeMode} p-10`}>
            <div className='text-center'>
                <div className="relative mx-auto" style={{ maxWidth: '850px' }}>
                    <h1 className={`${text_color} position-relative fonr-bold z-2 mb-10 text-4xl`}>LET'S TALK PRODUCT</h1>
                </div>
                <div className='md:px-20'>
                    <p className={`${text_color}`}>TCM Notes is an intelligent software with the sole purpose of generating notes, saving you hours of your valuable time. Forget having to manually type up a list of notes. TCM Notes has got this covered.</p>
                </div>
            </div>
            <div className="block md:flex justify-center mt-10">
                <div className={`md:mx-2 m-auto my-5 cursor-pointer flex w-full items-center flex-col p-4 bg-fs_light rounded-lg transition duration-300 transform-gpu hover:-translate-y-2`}>
                    <div className="text-4xl my-10">
                        <svg className="w-10 h-10 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12.555 5.117 2.828 2.828M14 16v4m-2-2h4M3 6v4M1 8h4m11.01-6.339 2.828 2.829L3.99 19.339 1.161 16.51 16.01 1.661Z" />
                            <path fill="currentColor" d="M16 13h-2v2h2v-2ZM10 2H8v2h2V2ZM7 4H5v2h2V4ZM4 2H2v2h2V2Zm15 8h-2v2h2v-2Zm0 5h-2v2h2v-2Z" />
                        </svg>
                    </div>
                    <div className="text-lg text-black font-bold">Make magic easy</div>
                    <div className="text-sm p-4">TCM Notes is an artificial intelligence software that helps you in an easy way to organize your ideas and write faster.</div>
                </div>
                <div className={`md:mx-2 m-auto my-5 cursor-pointer flex w-full items-center flex-col p-4 bg-fs_light rounded-lg transition duration-300 transform-gpu hover:-translate-y-2`}>
                    <div className="text-4xl my-10">
                        <svg className="w-10 h-10 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.484 6.166 13 4h6m0 0-3-3m3 3-3 3M1 14h5l1.577-2.253M1 4h5l7 10h6m0 0-3 3m3-3-3-3" />
                        </svg>
                    </div>
                    <div className="text-lg text-black font-bold">Infinite notes</div>
                    <div className="text-sm p-4">TCM Notes is an intelligent software with the sole purpose of generating notes, with which you can generate infinite types of different notes.</div>
                </div>
                <div className={`md:mx-2 m-auto my-5 cursor-pointer flex w-full items-center flex-col p-4 bg-fs_light rounded-lg transition duration-300 transform-gpu hover:-translate-y-2`}>
                    <div className="text-4xl my-10">
                        <svg className="w-10 h-10 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 14h6m-3 3v-6M1.857 1h4.286c.473 0 .857.384.857.857v4.286A.857.857 0 0 1 6.143 7H1.857A.857.857 0 0 1 1 6.143V1.857C1 1.384 1.384 1 1.857 1Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 11 6.143V1.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H1.857A.857.857 0 0 1 1 16.143v-4.286c0-.473.384-.857.857-.857Z" />
                        </svg>
                    </div>
                    <div className="text-lg text-black font-bold">Custom Notes</div>
                    <div className="text-sm p-4">With our software, you get the choice of either an automatically generated note or a more personal touch with real human words.</div>
                </div>
            </div>
        </div>
    );
};
