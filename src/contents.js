import * as BABYLON from 'babylonjs';

export default function(scene){

    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);

    sphere.position.y = 1;

    let sphereMaterial = new BABYLON.StandardMaterial('sphereMlt', scene);
    sphereMaterial.diffuseColor = new BABYLON.Color3(1,0,1);

    sphere.material = sphereMaterial;

    var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);

}
