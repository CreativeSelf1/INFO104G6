import { Center } from "@chakra-ui/react";


function counter() {
    var counter1 = 1;
    setInterval(function(){
        document.getElementById('btn'+counter1).checked = true;
        counter1++
        if(counter1>4){
            counter1=1;
        }
    },5000)

}
const SliderIm = () => {
    return (
        <Center background="gray" marginTop="3px" height="540px" bg="black">
            <div class='slider'>
                <div class='slides'>
                    <input type="radio" name='radio-btn' id='btn1' ></input>
                    <input type="radio" name='radio-btn' id='btn2'></input>
                    <input type="radio" name='radio-btn' id='btn3'></input>
                    <input type="radio" name='radio-btn' id='btn4'></input>
                    <div class='slide first'>
                        <img src='../data/images/aerea_campus_01_1200x500.jpg'></img>
                    </div>
                    <div class='slide'>
                        <img src='../data/images/entradaUach.jpg'></img>
                    </div>
                    <div class='slide'>
                        <img src='../data/images/casinoUach.jpg'></img>
                    </div>
                    <div class='slide'>
                        <img src='../data/images/biblioteca-campus-miraflores.jpg'></img>
                    </div>

                    <div class='navegacionAuto'>
                        <div class="autoBoton1"></div>
                        <div class="autoBoton2"></div>
                        <div class="autoBoton3"></div>
                        <div class="autoBoton4"></div>
                    </div>
                </div>
                <div class='navegacionManual'>
                    <label for="btn1" class="botonManual"></label>
                    <label for="btn2" class="botonManual"></label>
                    <label for="btn3" class="botonManual"></label>
                    <label for="btn4" class="botonManual"></label>
                </div>
            </div>
            <script type="text/javascript">ç
            {counter()}</script>
        </Center>
    )
}

export default SliderIm;