import Head from "next/head";
import {ThemeProvider} from "../../@/components/theme-provider";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Header from "@/app/components/Header";


export default function GuestLayout({children}) {


    console.log("guest layout");


    return (
            <html lang="en" suppressHydrationWarning>

            <body suppressHydrationWarning={false}>
            <div className={`dark:bg-gray-900 text-neutral-950 dark:text-gray-200`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <h1>guesrt</h1>
                    <Header/>
                    <div >{children}</div>


                    <Footer/>
                </ThemeProvider>
            </div>


            </body>
            </html>




    );
}

GuestLayout.propTypes = {
    children: PropTypes.node,
    layout: PropTypes.string,
};


