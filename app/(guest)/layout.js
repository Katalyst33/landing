import '../globals.css';
import '../styles/main.scss';
import {Outfit} from 'next/font/google';
import {ThemeProvider} from '../../@/components/theme-provider';


import PropTypes from 'prop-types';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

const outfit = Outfit({subsets: ['latin']});

export const metadata = {
    title: 'Katalyst Technologies',
    description:
        'Design and Development Agency, We build custom software solutions for businesses. We are a team of experienced developers, designers, and digital strategists. We specialize in web and mobile app development, e-commerce, and digital transformation consulting.',
};


export default function RootLayout({children}) {


    return (

        <html lang="en" suppressHydrationWarning>
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
            <meta property="og:title" content={metadata.title}/>
            <meta property="og:description" content={metadata.description}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <link rel="icon" href="favicon.ico" sizes="any" />
        </Head>
        <body className={outfit.className} suppressHydrationWarning={false}>

        <div>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Header/>

                <div className="lg:container mx-auto pt-10">{children}</div>

                <Footer/>
            </ThemeProvider>
        </div>


        </body>
        </html>


    );
}

RootLayout.propTypes = {
    children: PropTypes.node,
    layout: PropTypes.string,
};






