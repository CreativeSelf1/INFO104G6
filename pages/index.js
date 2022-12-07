
import Buildings from './buildings'
import Layoutmenu from '../components/layoutmenu'
import Layoutfooter from '../components/layoutfooter'
import MapUi from '../components/mapUI'
import Page_map from './page_map'

import { Link, Button } from '@chakra-ui/react'
import Head from 'next/head'

const Home = () => {
  return (
    <div className='Inicio'>
      <Head>
        <title>Campus Miraflores</title>
      </Head>
      <header>
        <Layoutmenu></Layoutmenu>
      </header>

      <main>
      Ver como likear paginas

      </main>
      <footer>
        <Layoutfooter></Layoutfooter>
      </footer>


    </div>
  );
}
export default Home;