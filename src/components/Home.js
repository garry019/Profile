import Decor_1 from '../images/decor-1.svg'

const Home = () => {
    return (
        <div id={'home'} className="row d-flex align-items-center module">
            <div id="homeContent" className="col">
                <h1 id="nameText">Gabriel Calderón<br /><small id="smallText">Full Stack Web Developer</small> </h1><br />
                <button id={'talkButton'} className="btn btn-primary">Let's Talk!</button>
                {/*  <button onClick={() => example()}>Click</button> <br />
                {state.ItemReducer.nombre} | {state.ItemReducer.cantidad} | {state.ItemReducer.precio} <br />
                {state.CategoryReducer.descripcion} */}
            </div>
            <img className="decor-1" src={Decor_1} alt="" />
        </div>
    )
}

export default Home