import '../styles/globals.css';
import {
    // ThemeContext,
    // useThemeState,
    AppContext,
    useAppState
} from '../components/hooks/';

function MyApp({ Component, pageProps }) {
    const { stateApp, actionsApp } = useAppState();

    return (
        <AppContext.Provider value={{ stateApp, actionsApp }}>
            <Component {...pageProps} />
        </AppContext.Provider>
    )
}

export default MyApp