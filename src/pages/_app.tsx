import '../styles/globals.css';
import {
    // ThemeContext,
    // useThemeState,
    AppContext,
    useAppState
} from '../components/hooks';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    const { stateApp, actionsApp } = useAppState();

    return (
        <AppContext.Provider value={{ stateApp, actionsApp }}>
            <Component {...pageProps} />
        </AppContext.Provider>
    )
}

export default MyApp