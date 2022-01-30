import './logo512.png'
import './Styles/lightbox.css'

const App = () => {
     return(
         <div>
             <a href='#example'> lightbox </a>
             <div className='lightbox' id='example'>
                 <a href='#' className='close'> Close </a>
                 <div className='lightbox-content' >
                     <img src='logo512.png' />
                 </div>
             </div>
         </div>
     )
 }

 export default App