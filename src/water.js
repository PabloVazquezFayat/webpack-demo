import * as BABYLON from 'babylonjs';
import * as Materials from 'babylonjs-materials';

export default function(scene, skybox, ground){

    // Water
	let waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 100, 100, 32, scene, false);
	let water = new Materials.WaterMaterial("water", scene, new BABYLON.Vector2(512, 512));
	water.backFaceCulling = true;
	water.bumpTexture = new BABYLON.Texture("/images/water/waterbump.png", scene);
    water.windForce = 5;
    water.windDirection = new BABYLON.Vector2(1.0, 1.0);
	water.waveHeight = 0.2;
	water.bumpHeight = 0.50;
	water.waterColor = new BABYLON.Color3(0.047, 0.23, 0.015);
	water.colorBlendFactor = 0.5;
	water.addToRenderList(skybox);
	water.addToRenderList(ground);
    waterMesh.material = water;
    
    waterMesh.position = new BABYLON.Vector3(0, 2, 0);

}