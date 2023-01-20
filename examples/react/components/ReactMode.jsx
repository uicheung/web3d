import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useEffect } from 'react'


function ReactMode() {
    
    useEffect(() => {
    }, [])
    
    return (
        <div className='base'>
            <Canvas >
                {/* 网格 */}
                {/* <OrbitControls autoRotate></OrbitControls> */}
                <Box />
            
         
                {/* 灯光 */}
                <ambientLight arg={[0xffffff]} intensity={0.5}></ambientLight>
                <directionalLight args={[0xffffff]} position={[0, 5, 5]} intensity={0.5}></directionalLight>
            </Canvas>
        </div>
    );
}

function Box() {
    let mesh = useRef()
    useFrame(({ clock }) => {
      
        mesh.current.rotation.x = clock.getElapsedTime()
        mesh.current.rotation.y = clock.getElapsedTime()
    })
    return (
        <mesh ref={mesh}>
            <boxBufferGeometry></boxBufferGeometry>
            <meshNormalMaterial></meshNormalMaterial>
        </mesh>
    );
}
export default ReactMode