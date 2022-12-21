import Layout from '../components/layoutmenu';
import LayFooter from '../components/layoutfooter'
import Head from 'next/head';
import { Center, Image, Box } from '@chakra-ui/react';
import SliderIm from '../components/sliderIm';

const classrooms = () => {
    return (
        <div>
            <Layout></Layout>
            <Head>
                <title> Inicio </title>
            </Head>
            <div class="sliderCom">
                <SliderIm></SliderIm>
            </div>
            <div class='miraflores'>
                <Center bg="black" color='white' height="100px" fontSize="5xl" fontStyle="oblique" marginTop="3px">
                    Campus miraflores
                </Center>
                <p >
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
                                <h3>Ingeniería Civil Informática</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil en Obras Civiles</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil Mecánica</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil en Construcción</h3>
                            </li>
                            <li>
                                <h3>Ingeniería Civil </h3>
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
            <div class='infraestuctura'>
                <Center bg="#ff8000" color='white' height="100px" fontSize="5xl" fontStyle="oblique" marginTop="3px">
                    Infraestructura
                </Center>
                <p>
                Emplazada en una superficie de 34 hectáreas, la Facultad de Ciencias de la Ingeniería se ubica 
                en el Campus Miraflores de la Universidad Austral de Chile en calle General Lagos 2086 en la 
                intersección con calle Rudloff. Otro de sus accesos se encuentra en la prolongación de calle 
                Zaragoza con Rudloff. Nuestra infraestructura contempla salas de clases, laboratorios, oficinas, 
                biblioteca, espacios para la recreación y el desarrollo integral de la comunidad estudiantil, 
                todo en un entorno de áreas verdes y humedales característicos de nuestra ciudad.
                </p>

                <Center marginTop="40px" bg="#ff8000" w="1540px" h="456px" marginBottom="40px">
                    <Image src='../data/images/InfraMira.png' px="170px" >
                    </Image>
                </Center>
            </div>
            <LayFooter></LayFooter>
        </div>

    );
}
export default classrooms;