import {React} from 'react';
import {LOCAL_STORAGE_ITEM} from '../constants';
import {getInitialColorMode} from '../getInitialColorMode';

export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
    const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode);
    const setColorMode = (value) => {
        rawSetColorMode(value);
        window.localStorage.setItem(LOCAL_STORAGE_ITEM.COLOR_MODE, value);
    };
    React.useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
        '--initial-color-mode'
        );
        rawSetColorMode(initialColorValue);
    }, []);

    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
        {children}
        </ThemeContext.Provider>
    );
};