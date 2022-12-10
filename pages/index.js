
import Buildings from './buildings'
import Classrooms from './classroms';

import Head from 'next/head'
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Classrooms>
        <Head>
          <title>Campus Miraflores</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Classrooms>
    </div>

  );
}
export default Home;