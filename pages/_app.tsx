import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { Provider } from 'react-redux'; // Correct import for Provider
import store from './store';
import {AppProps} from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps ): React.JSX.Element {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
