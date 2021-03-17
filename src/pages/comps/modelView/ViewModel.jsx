import ModelMenue from '../Menue/ModelMenue'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import OrbitControls from "three-orbitcontrols";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Model from '../../../files/models/ModelStudioBake.glb';


const ViewModel = () => {



    let mount = useRef(null);

    let frameId;
    useEffect(() => {

        if (mount.current) {

            console.log(mount.current);


            let loader = new GLTFLoader();
            let scene = new THREE.Scene();
            scene.background = new THREE.Color(0xe8e8e8);

            let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            let renderer = new THREE.WebGLRenderer();

            renderer.setSize(window.innerWidth, window.innerHeight);
            mount.current.appendChild(renderer.domElement);

            const controls = new OrbitControls(camera, renderer.domElement);

            

            /*let geometry = new THREE.BoxGeometry(1, 1, 1);
            let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            let cube = new THREE.Mesh(geometry, material);
            scene.add(cube);*/

            loader.load(
                Model,
                (gltf) => {
                    scene.add(gltf.scene);
                },
                // called while loading is progressing
                (xhr) => {
                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
                },
                // called when loading has errors
                (error) => {
                    console.log('An error happened');
                }
            )

            camera.position.z = 5;
            let animate = function () {
                frameId = requestAnimationFrame(animate);
                renderer.render(scene, camera);
            };
            animate();

            return () => {

                cancelAnimationFrame(frameId)
                console.log(mount.current)

                mount = undefined;


            }
        }

    }, [mount]);


    return (<div ref={mount}>
        <ModelMenue/>
    </div>)
}



export default ViewModel;