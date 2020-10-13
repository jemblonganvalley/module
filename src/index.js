//import App.js
import App from './App.js'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'

//Buat function index yang berisi syntax HTML
const index = ()=>{
    return `
        ${Navbar()}
        ${Hero()}
    `
}

//export index() agar bisa digunakan di file JS lainnya
export default index