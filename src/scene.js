import * as BABYLON from 'babylonjs';
import terrain from './terrain';
import sky from './sky';
import water from './water';
import villager from './villager';

export default function(){
    // Get the canvas DOM element
    var canvas = document.getElementById('renderCanvas');
    // Load the 3D engine
    var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
    // CreateScene function that creates and return the scene
    var createScene = function(){
        // Create a basic BJS Scene object
        var scene = new BABYLON.Scene(engine);

        //scene.debugLayer.show();

        // Parameters: alpha, beta, radius, target position, scene
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

         // Positions the camera overwriting alpha, beta, radius
        camera.setPosition(new BABYLON.Vector3(0, 0, 10));
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        var light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        var light2 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(20, -60, 40), scene);
        light2.intensity = 0.5;

        terrain(scene);
        sky(scene);
        water(scene, scene.getMeshByName('skyBox'), scene.getMeshByName('terrain'));
        villager(scene);

        var objects = scene.getMeshByName("terrain"); 
        var shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);
        shadowGenerator.getShadowMap().renderList.push(objects);
        shadowGenerator.getShadowMap().renderList.push(scene.getMeshByName('villager'));
        //shadowGenerator.usePoissonSampling = true;

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