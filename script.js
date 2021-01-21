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

renderer.render(scene, camera);