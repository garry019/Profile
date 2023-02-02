import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { StrictMode } from 'react'

const Fiber = () => {
    return <div className="row fiber-module">
                <div className="col-12 px-0 w-100 h-100">
                    <StrictMode>
                    <Canvas
                        camera={{
                            fov: 75,
                            near: 0.1,
                            far: 200,
                            position: [0,0,7]
                        }}
                    >
                        <Experience />
                    </Canvas>
                    </StrictMode>
                </div>
            </div>    
}

export default Fiber