import * as BABYLON from 'babylonjs';

export default function(scene){

    let villager = BABYLON.MeshBuilder.CreateBox("villager", {height: 5, width: 2, depth: 0.5}, scene);
    villager.position = new BABYLON.Vector3(-10, 15, 15);

    let villagerMaterial = new BABYLON.StandardMaterial('villager-mat', scene);
    villagerMaterial.diffuseColor = new BABYLON.Color3(0,0,1);

    villager.material = villagerMaterial;

    //movement with collisions
    var speedvillager = 8;
    var gravity = 0.15;

    villager.ellipsoid = new BABYLON.Vector3(0.5, 1.0, 0.5);
    villager.ellipsoidOffset = new BABYLON.Vector3(0, 1.0, 0);

    let forwards = new BABYLON.Vector3(parseFloat(Math.sin(villager.rotation.y)) / speedvillager, gravity, parseFloat(Math.cos(villager.rotation.y)) / speedvillager);
    forwards.negate();
    villager.moveWithCollisions(forwards);
    
    let backwards = new BABYLON.Vector3(parseFloat(Math.sin(villager.rotation.y)) / speedvillager, -gravity, parseFloat(Math.cos(villager.rotation.y)) / speedvillager);
    villager.moveWithCollisions(backwards);

    setInterval(()=>{
        villager.position.y--;
    }, 1000);

}