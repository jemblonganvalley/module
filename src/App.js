//Import syntax dari file JS lain
import index from './index.js'

//membuat sebuah function Render
const App = ()=>{
    document.getElementById('root').innerHTML = index()
}

// Menjalankan Function Rendernya
App()

//Export App() agar bisa digunakan di file JS lainnya
export default App