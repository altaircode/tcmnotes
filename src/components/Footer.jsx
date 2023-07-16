import { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";

export function Footer() {
    const { themeMode, text_color } = useContext(ThemeContext);

    return (
        <div className={`bg-${themeMode} text-center p-10`}>
            <h5 className={`${text_color}`}>© Copyright <span className='text-primary font-bold'>TCM Notes</span>. All Rights Reserved</h5>
            <h5 className={`${text_color}`}>Designed & Development by <span className='text-primary font-bold'>Altair Code</span></h5>
        </div>

    );
};
