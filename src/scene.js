import * as BABYLON from 'babylonjs';
import terrain from './terrain';

export default function(){
    // Get the canvas DOM element
    var canvas = document.getElementById('renderCanvas');
    // Load the 3D engine
    var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
    // CreateScene function that creates and return the scene
    var createScene = function(){
        // Create a basic BJS Scene object
        var scene = new BABYLON.Scene(engine);

        // Parameters: alpha, beta, radius, target position, scene
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

         // Positions the camera overwriting alpha, beta, radius
        camera.setPosition(new BABYLON.Vector3(0, 0, 10));
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        terrain(scene);

        return scene;
    }
    // call the createScene function
    var scene = createScene();
    // run the render loop
    engine.runRenderLoop(function(){
        scene.render();
    });
    // the canvas/window resize event handler
    window.addEventListener('resize', function(){
        engine.resize();
    });
}