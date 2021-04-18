import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import PullupMenue from './PullupMenue'
import './ViewPano.css'


const ViewPano = (props) => {

    const panoImage = props.pano;





    extend({ OrbitControls })

    function Controls(props) {
        const { camera, gl } = useThree()
        const ref = useRef()
        useFrame(() => ref.current.update())
        return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
    }

    function Dome() {
        const texture = useLoader(THREE.TextureLoader, panoImage)
        return (
            <mesh>
                <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
                <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
            </mesh>
        )
    }


    return (<div>
        <div className="loading-section">
            <h1 className="loading-text">loading</h1>
            <h1 className="loading">I</h1>
        </div>
        <Canvas style={{ height: "100vh", width: "100vw" }} camera={{ position: [0, 0, 0.1] }}>
            <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate autoRotateSpeed={.5} rotateSpeed={-0.5} />
            <Suspense fallback={null}>
                <Dome />
            </Suspense>
        </Canvas>
        <PullupMenue />
    </div>)
}




export default ViewPano;
