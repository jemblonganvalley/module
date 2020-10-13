//import APP.js
import App from "../App.js";

//Buat component Hero dengan <section></section>
const Hero = () => {
  return `
        <section class='hero' style="
            width : 100vw;
            height : 80vh;
            display : flex;
            align-items : center;
            padding : 0 10%;
            background-image : url(https://picsum.photos/seed/${Hero.state.imgNo}/900);
            background-size : cover;
            color : white;
        ">

        <span class="material-icons" style="
            font-size : 4rem;
            text-shadow : 5px 5px 5px rgba(0,0,0,0.300);
            cursor : pointer;
        " onclick="prev()">
         keyboard_arrow_left
        </span>

        <span class="material-icons" style="
            font-size : 4rem;
            text-shadow : 5px 5px 5px rgba(0,0,0,0.300);
            cursor : pointer;
            margin-left : auto;
        " onclick="next()">
            keyboard_arrow_right
        </span>



        </section>
    `;
};




//export Hero agar bisa digunakan di file lain
export default Hero;
