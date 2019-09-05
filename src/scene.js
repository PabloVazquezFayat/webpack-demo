import * as BABYLON from 'babylonjs';
import contents from './contents';

export default function(){
    // Get the canvas DOM element
    var canvas = document.getElementById('renderCanvas');
    // Load the 3D engine
    var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
    // CreateScene function that creates and return the scene
    var createScene = function(){
        // Create a basic BJS Scene object
        var scene = new BABYLON.Scene(engine);

        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

        camera.setTarget(BABYLON.Vector3.Zero());

        camera.attachControl(canvas, false);

        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        
        //populate scene here
        contents(scene);

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