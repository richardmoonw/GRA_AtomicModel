import * as THREE from '/three.js-master/build/three';

// Create the scene
var scene = new THREE.Scene();

// Add camera
var camera = new THREE.PerspectiveCamera(
    75,                                     // Perspective
    window.innerWidth/window.innerHeight    // Aspect ratio
)

// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    //Resize screen
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectMatrix();
})

renderer.render(scene, camera);