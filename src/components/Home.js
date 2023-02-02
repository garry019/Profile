import About from './About'
import Contact from './Contact';
import Portfolio from './Portfolio'
import Canvas from './Threefiber/Fiber';

const Home = () => {
    return (
        <div id={'home'} className="row">

            <div id="experience" className="col-12">
                <Canvas></Canvas>
            </div>   

            <div id="about" className="col-12">
                <About />
            </div>            
            
            <div id="work" className="col-12">
                <Portfolio />
            </div>

            <div id="contact" className="col-12">
                <Contact />
            </div>

        </div>
    )
}

export default Home