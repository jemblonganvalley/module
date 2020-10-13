// import App.js
import App from '../App.js'

// Buat component Navbar
const Navbar = ()=>{
    return `
        <nav class='navbar' style="
            width : 100vw;
            height : 10vh;
            display : flex;
            justify-content : flex-start;
            align-items : center;
            padding : 0 10%;
            background-color : black;
            color : white;
        ">
        <h1 class='brand'>JSV</h1>
        </nav>
    
    `
}

// export component navbar agar bisa di pakai dimanapun
export default Navbar


