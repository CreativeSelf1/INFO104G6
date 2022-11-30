
import Buildings from './buildings'
import Layoutmenu from './layoutmenu'
import Layoutfooter from './layoutfooter'
import MapUi from './mapUI'

export default function Home() {
  
  return (
    <html>
      <header>
        <Layoutmenu></Layoutmenu>
      </header>
      <body>
        <div>
          <MapUi></MapUi>
          {/* <Buildings></Buildings> */}
        </div>
      </body>
      <footer>
          <Layoutfooter></Layoutfooter>
      </footer>
    </html>
  );
}
