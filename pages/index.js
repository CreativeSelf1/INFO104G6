
import Buildings from './buildings'
import Layoutmenu from './layoutmenu'

export default function Home() {
  return (
    <div class='menu'>
      <Layoutmenu></Layoutmenu>
      <div></div>
      <div>
        <Buildings></Buildings>
      </div>
    </div>
  )
}
