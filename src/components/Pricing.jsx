import { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";

export function Pricing() {
    const { themeMode, text_color, color_h3 } = useContext(ThemeContext);
    return (
        <div id="pricing" className={`bg-fs_${themeMode} p-10`}>
            <div className='text-center'>
                <div className="relative mx-auto" style={{ maxWidth: '850px' }}>
                    <h1 className={`text-primary position-relative font-bold z-2 mb-10 text-5xl`}>Choose a convenient plan</h1>
                </div>
                <div className='md:px-20'>
                    <p className={`${text_color}`}>TCM Notes was created to provide notes in order to facilitate the creation of notes. We have three plans to fit your needs, pick the plan that is the best for you.</p>
                </div>
            </div>
            <div className="block md:flex justify-center mt-10">
                <div className={`card-service border border-${themeMode} flex mx-auto m-5 w-auto md:w-full items-center flex-col mr-4 p-4 rounded-3xl`}>
                    <div className={`text-4xl ${text_color} font-bold mt-4`}>Basic</div>
                    <div className={`text-6xl text-primary font-bold mt-4`}>$14.99</div>
                    <div className="text-md font-bold p-4"><h3 className={`${color_h3}`}>per month.</h3></div>
                    <div className="text-md font-bold p-4"><h3 className={`${color_h3}`}>100 notes are provided.</h3></div>
                    <div className="text-4xl my-10">
                        <button type="button" className="btn-get-started text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold rounded-lg text-lg px-5 py-3 text-center inline-flex items-center dark:focus:ring-primary/55 mr-2 mb-2">
                            Get This Plan Now
                        </button>
                    </div>
                </div>
                <div className={`card-service border border-primary bg-primary flex mx-auto w-auto m-5 md:w-full items-center flex-col mr-4 p-4 rounded-3xl`}>
                    <div className={`text-4xl text-white font-bold mt-4`}>Premiun</div>
                    <div className={`text-6xl text-white font-bold mt-4`}>$24.99</div>
                    <div className="text-md font-bold p-4"><h3 className='text-white'>per month.</h3></div>
                    <div className="text-md font-bold p-4"><h3 className='text-white'>150 notes are provided.</h3></div>
                    <div className="text-4xl my-10">
                        <button type="button" className="btn-get-started text-primary bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold rounded-lg text-lg px-5 py-3 text-center inline-flex items-center dark:focus:ring-primary/55 mr-2 mb-2">
                            Get This Plan Now
                        </button>
                    </div>
                </div>
                <div className={`card-service border border-${themeMode} flex mx-auto m-5 w-auto md:w-full items-center flex-col mr-4 p-4 rounded-3xl`}>
                    <div className={`text-4xl ${text_color} font-bold mt-4`}>Unlimited</div>
                    <div className={`text-6xl text-primary font-bold mt-4`}>$44.99</div>
                    <div className="text-md font-bold p-4"><h3 className={`${color_h3}`}>per month.</h3></div>
                    <div className="text-md font-bold p-4"><h3 className={`${color_h3}`}>Infinite notes are provided.</h3></div>
                    <div className="text-4xl my-10">
                        <button type="button" className="btn-get-started text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold rounded-lg text-lg px-5 py-3 text-center inline-flex items-center dark:focus:ring-primary/55 mr-2 mb-2">
                            Get This Plan Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
