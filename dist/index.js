window.addEventListener('DOMContentLoaded', ()=>{

        var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        /******* Add the create scene function ******/
        var createScene = function () {

            // Create the scene space
            var scene = new BABYLON.Scene(engine);

            // Add a camera to the scene and attach it to the canvas
            var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
            camera.attachControl(canvas, true);

            // Add lights to the scene
            var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
            var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

            let terrain = BABYLON.Mesh.CreateGroundFromHeightMap("terrain", "/images/terrain/terrain.png", 100, 100, 100, 0, 10, scene, false);

            let terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
            terrainMaterial.mixTexture = new BABYLON.Texture("/images/terrain/terrain-rgb.png", scene);
            terrainMaterial.diffuseTexture1 = new BABYLON.Texture("/images/terrain/grass.jpg", scene);
            terrainMaterial.diffuseTexture2 = new BABYLON.Texture("/images/terrain/rock.jpg", scene);
            terrainMaterial.diffuseTexture3 = new BABYLON.Texture("/images/terrain/rock.jpg", scene);

            // terrainMaterial.bumpTexture1 = new BABYLON.Texture("grassn.png", scene);
            // terrainMaterial.bumpTexture2 = new BABYLON.Texture("rockn.png", scene);
            // terrainMaterial.bumpTexture3 = new BABYLON.Texture("floor_bump.png", scene);

            terrain.material = terrainMaterial;

            return scene;
        };
        /******* End of the create scene function ******/    

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () { 
                scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () { 
                engine.resize();
        });

});