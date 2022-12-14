
import Classrooms from './classrooms';
import Buildings from './buildings'
import Head from 'next/head'


const Home = () => {
  return (
    <div>
      <Head>
        <title>Campus Miraflores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Buildings></Buildings>
      </main>
    </div>

  );
}
export default Home;