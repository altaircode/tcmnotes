import { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";

export function Hero() {
    const { themeMode, text_color, color_h3 } = useContext(ThemeContext);

    return (
        <div id="home" className={`flex flex-col items-center pt-32 pb-10 bg-fs_${themeMode}`}>
            <h1 className={`text-5xl md:text-7xl font-bold mt-8 mb-4 text-center ${text_color}`}>Organize your ideas. <br />
                Write faster!</h1>
            <div className="">
                <svg className="block text-primary m-auto w-60 md:px-10  md:w-full h-8 md:h-10" viewBox="0 0 511 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M385.252 0.160149C313.41 0.614872 292.869 0.910678 253.008 2.06539C211.7 3.26203 182.137 4.46154 135.231 6.84429C124.358 7.39665 112.714 7.92087 99.0649 8.47247C48.9242 10.4987 39.1671 11.0386 22.9579 12.6833C14.9267 13.4984 7.98117 14.0624 4.08839 14.2162C0.627411 14.3527 0 14.4386 0 14.7762C0 15.0745 5.53537 15.3358 8.56298 15.1804C9.64797 15.1248 12.5875 14.9887 15.0956 14.8782C17.6037 14.7676 23.123 14.4706 27.3608 14.2183C37.3399 13.6238 42.1312 13.4363 59.2817 12.9693C88.1133 12.1844 109.893 11.43 136.647 10.2898C146.506 9.86957 159.597 9.31166 165.737 9.04993C212.308 7.06466 269.195 5.29439 303.956 4.74892C346.139 4.08665 477.094 3.50116 474.882 3.98441C474.006 4.17607 459.021 5.6015 450.037 6.34782C441.786 7.03345 428 8.02235 411.041 9.14508C402.997 9.67773 391.959 10.4149 386.51 10.7832C366.042 12.1673 359.3 12.5966 347.67 13.2569C294.096 16.2987 258.708 18.9493 209.451 23.6091C180.174 26.3788 156.177 29.5584 129.396 34.2165C114.171 36.8648 112.687 37.3352 114.186 39.0402C115.161 40.1495 122.843 40.2933 138.338 39.492C166.655 38.0279 193.265 36.8923 219.043 36.048C235.213 35.5184 237.354 35.4296 253.795 34.6075C259.935 34.3005 270.549 33.8517 277.382 33.6105L289.804 33.1719L273.293 32.999C248.274 32.7369 221.435 32.7528 212.596 33.035C183.334 33.9693 167.417 34.6884 141.419 36.2506C135.222 36.623 129.994 36.8956 129.801 36.8566C127.94 36.4786 169.612 30.768 189.492 28.6769C234.369 23.956 280.582 20.4337 351.602 16.3207C358.088 15.9451 371.108 15.1233 380.535 14.4947C389.962 13.866 404.821 12.8761 413.556 12.2946C447.177 10.057 457.194 9.22358 489.506 5.97543C510.201 3.895 510.311 3.8772 510.875 2.50901C511.496 1.00469 509.838 0.322131 505.088 0.127031C500.576 -0.0584957 416.098 -0.0351424 385.252 0.160149ZM291.144 33.02C291.536 33.0658 292.102 33.0641 292.402 33.0162C292.703 32.9683 292.383 32.9308 291.691 32.9329C290.999 32.935 290.753 32.9743 291.144 33.02Z"></path>
                </svg>
            </div>

            <div className="justify-center text-center">
                <div className="mt-10 md:mt-20">
                    <div className='hidden md:flex text-center sm:w-full md:w-1/2 m-auto -mt-14 mb-10'>
                        <h3 className={`${color_h3} font-medium`}>Make organizing and writing your thoughts easier with TCM Notes. The software offers a fairly coherent wording that will help you write more easily and efficiently.</h3>
                    </div>
                    <div>
                        <button type="button" className="btn-get-started text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold rounded-lg text-lg px-5 py-3 text-center inline-flex items-center dark:focus:ring-primary/55 mr-2 mb-2">
                            Get Stated
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
