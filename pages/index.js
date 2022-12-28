
import Inicio from './inicio'
import Head from 'next/head'


const Home = () => {
  return (
    <div class='Home'>
      <Head>
        <title>Campus Miraflores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Inicio></Inicio>
      </main>
    </div>

  );
}
export default Home;