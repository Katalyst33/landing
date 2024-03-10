import '../globals.css';
import '../styles/main.scss';
import {Outfit} from 'next/font/google';


import PropTypes from 'prop-types';


const outfit = Outfit({subsets: ['latin']});

export const metadata = {
    title: 'Katalyst  | Admin',

};

export default function RootLayout({children}) {


    return (

        <html lang="en" suppressHydrationWarning>

        <body className={outfit.className} suppressHydrationWarning={false}>

        <div>

            <div>

                admin
            </div>

            <div>{children}</div>


        </div>


        </body>
        </html>


    );
}

RootLayout.propTypes = {
    children: PropTypes.node,
    layout: PropTypes.string,
};






