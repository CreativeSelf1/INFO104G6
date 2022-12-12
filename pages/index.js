
import Classrooms from './classrooms';
import Head from 'next/head'


const Home = () => {
  return (
    <div>
        <Head>
          <title>Campus Miraflores</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Classrooms></Classrooms>
        </main>
    
    </div>

  );
}
export default Home;