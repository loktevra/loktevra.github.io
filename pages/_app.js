import {ColorModeScript} from '../src/components/ColorModeScript';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return <>
        <ColorModeScript />
        <Component {...pageProps} />
    </>
}