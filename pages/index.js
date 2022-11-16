
import Buildings from './buildings'
import Layoutmenu from './layoutmenu'
import Layoutfooter from './layoutfooter'

export default function Home() {
  
  return (
    <html>
      <header>
        <Layoutmenu></Layoutmenu>
      </header>
      <body>
        <div>
          <Buildings></Buildings>
        </div>
      </body>
      <footer>
          <Layoutfooter></Layoutfooter>
      </footer>
    </html>
  );
}
