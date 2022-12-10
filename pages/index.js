
import Buildings from './buildings'
import Layoutmenu from '../components/layoutmenu'
import Layoutfooter from '../components/layoutfooter'
import MapUi from '../components/mapList'
import Page_map from './page_map'

import { Link, Button } from '@chakra-ui/react'
import Head from 'next/head'

const Home = () => {
  return (
    <Buildings>
      <Head>
        <title>Campus Miraflores</title>
      </Head>
    </Buildings>
  );
}
export default Home;