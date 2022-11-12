import Head from "next/head";
import Link from "next/link";

import React from "react";

const Layout =() =>{
    return(
        <div className="container">
            <Head>
                <title>Prueba Layout</title>
            </Head>
            <header className="barra">
                <Link href="/index.js">
                    hola
                </Link>

            </header>
    
        </div>
    )

}

export default Layout