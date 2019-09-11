import * as BABYLON from 'babylonjs';
import * as Materials from 'babylonjs-materials';

export default function(scene){

    var skyMaterial = new Materials.SkyMaterial("skyMaterial", scene);
    skyMaterial.luminance = 1;
    skyMaterial.inclination = 2;
    skyMaterial.backFaceCulling = false;

    var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
    skybox.material = skyMaterial;

}