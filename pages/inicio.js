import Layout from '../components/layoutmenu';
import LayFooter from '../components/layoutfooter'
import Head from 'next/head';
import { Center, Image, Box } from '@chakra-ui/react';

const classrooms = () => {
    return (
        <div>
            <Layout></Layout>
            <Head>
                <title> Inicio </title>
            </Head>
            <Center background="gray" marginTop="3px" height="540px" bg="black">
                <div class='slider'>
                    <div class='slides'>
                        <input type="radio" name='radio-btn' id='btn1'></input>
                        <input type="radio" name='radio-btn' id='btn2'></input>
                        <input type="radio" name='radio-btn' id='btn3'></input>
                        <input type="radio" name='radio-btn' id='btn4'></input>
                        <div class='slide first'>
                            <img src='../data/images/aerea_campus_01_1200x500.jpg'></img>
                        </div>
                        <div class='slide'>
                            <img src='../data/images/informatica-aniversario.jpeg'></img>
                        </div>
                        <div class='slide'>
                            <img src='../data/images/514c82599dd07.jpg'></img>
                        </div>
                        <div class='slide'>
                            <img src='../data/images/biblioteca-campus-miraflores.jpg'></img>
                        </div>

                        <div class='navegacionAuto'>
                            <div class="autoBoton1"></div>
                            <div class="autoBoton2"></div>
                            <div class="autoBoton3"></div>
                            <div class="autoBoton4"></div>
                        </div>
                    </div>
                    <div class='navegacionManual'>
                        <label for="btn1" class="botonManual"></label>
                        <label for="btn2" class="botonManual"></label>
                        <label for="btn3" class="botonManual"></label>
                        <label for="btn4" class="botonManual"></label>
                    </div>
                </div>
            </Center>
            <div class='miraflores'>
                <Center bg="black" color='white' height="100px" fontSize="5xl" fontStyle="oblique" marginTop="3px">
                    Campus miraflores
                </Center>
                <p>
                    La Facultad de Ciencias de la Ingeniería de la Universidad Austral de Chile
                    se encuentra en un privilegiado lugar rodeado de naturaleza y con una hermosa
                    vista hacia los ríos de Valdivia. Ubicada en calle General Lagos 2086 se localiza
                    el Campus Miraflores uno de los 2 campus y 2 sedes que conforman la gran Universidad de
                    la zona sur Austral de Chile.
                    Dueña y testigo de una larga trayectoria académica la Facultad de Ciencias de la Ingeniería,
                    con la mirada puesta en el futuro, ha asumido el compromiso de adecuarse a las transformaciones
                    de la educación superior en Chile y el mundo.
                </p>
                <div class='uachContent'>
                    <div>
                        <ul class="listCar">
                            <h2>Carreras</h2>
                            <li>
                                <h3>Bachillerato en Ciencias de la Ingeniería</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil Acústica</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil Electrónica</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil Industrial</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil Industrial</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil Industrial</h3>
                            </li>
                            <a href='https://www.uach.cl/pregrado/principal/carreras-profesionales' target="_blank"> Ver mas</a>
                        </ul>
                    </div>
                    <Box px="210px" py="110px">
                        <Image
                            borderRadius='full'
                            boxSize='280px'
                            src='https://static.vecteezy.com/system/resources/previews/004/712/157/non_2x/education-student-or-study-social-media-highlight-icon-vector.jpg'
                        />
                    </Box>
                </div>
            </div>
            <LayFooter></LayFooter>
        </div>

    );
}
export default classrooms;