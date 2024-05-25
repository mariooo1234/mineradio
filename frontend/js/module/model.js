import * as THREE from 'three';

let scene;
let camera;
let renderer;

function init() {
    let container = document.querySelector('.container');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 3000);


    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const loader = new THREE.GLTFloader();
    loader.load('./img/model/scene.gltf', gltf => {
            scene.add(gltf.scene);
        },
        function (error) {
            console.log('Error: ' + error)
        }
    )

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera)
    }
    animate();

}
init()