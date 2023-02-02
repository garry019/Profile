import { useThree, useFrame } from "@react-three/fiber"
import { Text3D, Center, Float} from "@react-three/drei"
import { Suspense, useRef } from "react"  
//import { OrbitControls } from "@react-three/drei"
import * as THREE from 'three'
import Model from "./Model.js"
//import ModelDancing from "./ModelDancing.js"
//import { Perf } from "r3f-perf"

const Experience = () => {

    //const [matcapTexture] = useMatcapTexture()

    const { camera, gl } = useThree()
    const text = useRef()

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    gl.setSize(sizes.width, sizes.height)
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const cursor = {}
    cursor.x = 0
    cursor.y = 0

    window.addEventListener('resize', (event) => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        gl.setSize(sizes.width, sizes.height)
    })

    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = event.clientY / sizes.height - 0.5
        //console.log(cursor)
    })

    /* Particles */
    const particlesCount = 200
    const positions = new Float32Array(particlesCount * 3)

    for(let i = 0; i < particlesCount; i++)
    {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 15
        positions[i * 3 + 1] = (Math.random() - 0.5) * 15
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }

    const particleMaterial = new THREE.PointsMaterial({
        color: 'white',
        sizeAttenuation: true,
        size: 0.02
    })

    useFrame((state, delta) => {

        const parallaxX = cursor.x * 0.5
        const parallaxY = - cursor.y * 0.5

        camera.position.x += (parallaxX - camera.position.x) * 5 * delta
        camera.position.y += (parallaxY - camera.position.y) * 5 * delta
    })


    const eventHandler = () => {
        text.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    }

    return <>
        {/* <Perf position="top-left" /> */}
        {/* <OrbitControls args={[ camera, gl.domElement ]} /> */}

        <directionalLight position={[1, 2, 3]} intensity={2.5} shadow-normalBias={ 0.04 }/>
        <ambientLight intensity={0.5} />

        <Suspense>
            <Model scale={0.010} position={[0,-2.2,5.5]} rotation={[0,1,0]} />
        </Suspense>

        {/* <Suspense>
            <ModelDancing scale={0.01} position={[-2.2,-1,1]} />
        </Suspense> */}

        <points material={particleMaterial} >
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                    usage={THREE.DynamicDrawUsage}
                    />
                </bufferGeometry>
            <pointsMaterial attach="material" vertexColors size={10} sizeAttenuation={false} />
        </points>

        <Float>
        <Center>
            <Text3D
                font="./fonts/helvetiker_regular.typeface.json"
                size={0.15}
                height={0}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.01}
                bevelSize={0.001}
                bevelOffset={0}
                bevelSegments={1}
                position={[0, 1, 0]}
                letterSpacing = {0.09}
            >
                Great Things begins as
                <meshStandardMaterial />
            </Text3D>
            <Text3D
                font="./fonts/Orbitron Medium_Regular.json"
                size={0.7}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.04}
                bevelOffset={0}
                bevelSegments={5}
                position-y={0}
                letterSpacing = {0.15}
                ref={text}
                onClick={eventHandler}
            >
                IDEAS
                <meshToonMaterial color={'red'} />
            </Text3D>
        </Center>
        </Float>
    </>
}

export default Experience