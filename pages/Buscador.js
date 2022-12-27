import { filter, Img } from "@chakra-ui/react";
import { handleClientScriptLoad } from "next/script";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import datos from "/public/data/salas";
import Layout from '../components/layoutmenu';
import Layfooter from '../components/layoutfooter'
import Head from 'next/head';

export default function Buscador() {
    const [texto,setTexto]=useState("")
    {/* const [resultado,setResultado]=useState("") */}  
    const [resultado,setResultado]=useState([])
    const handleClick = (e) =>{
        e.preventDefault
        //console.log(datos[0].id);
        setResultado(datos.filter(obj => obj.id === texto))

        //console.log(texto)
        console.log(resultado)
    }
    const handlechange = (e) => {
        setTexto(e.target.value);
    }
    return (
            <div>
                <Layout></Layout>
                    <div class="Container_grid">
                        <Head>
                            <title> Edificios </title>
                        </Head>
                        <input type="text" value={texto} onChange={handlechange} placeholder="Ingresar sala" ></input>
                        <button onClick={handleClick} alt="">Buscar</button>
                        {resultado.map((imagen) => (
                        <img src={imagen.img} alt=""></img>
                ))}
            </div>
            <Layfooter></Layfooter>
        </div>
    )}
