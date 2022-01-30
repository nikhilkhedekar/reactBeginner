import './logo512.png'
import './Styles/imagegallery.css'

const App = () => {
    return(
        <div>
            <h1>CSS Image Gallery</h1>
            <div className='gallery' >
                <div className='image-container' >
                    <img src='logo512.png' />
                    <p className='image-description' > Text_1 </p>
                </div>
                <div className='image-container' >
                    <img src='logo512.png' />
                    <p className='image-description' > Text_2 </p>
                </div>
                <div className='image-container' >
                    <img src='logo512.png' />
                    <p className='image-description' > Text_3 </p>
                </div>
            </div>
        </div>
    )
}

export default App