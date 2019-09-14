import * as BABYLON from 'babylonjs';
import * as Materials from 'babylonjs-materials';

export default function (scene){

    //let terrain = BABYLON.Mesh.CreateGroundFromHeightMap("terrain", "/images/terrain/terrain.png", 100, 100, 100, 0, 10, scene, false);

    let terrain = BABYLON.MeshBuilder.CreateGround("myGround", {width: 100, height: 100, subdivisions: 4}, scene);

    let terrainMaterial = new Materials.TerrainMaterial("terrainMaterial", scene);
    terrainMaterial.mixTexture = new BABYLON.Texture("/images/terrain/terrain-rgb.png", scene);
    terrainMaterial.diffuseTexture1 = new BABYLON.Texture("/images/terrain/grass.jpg", scene);
    terrainMaterial.diffuseTexture2 = new BABYLON.Texture("/images/terrain/rock.jpg", scene);
    terrainMaterial.diffuseTexture3 = new BABYLON.Texture("/images/terrain/dirt.jpg", scene);

    // terrainMaterial.bumpTexture1 = new BABYLON.Texture("grassn.png", scene);
    // terrainMaterial.bumpTexture2 = new BABYLON.Texture("rockn.png", scene);
    // terrainMaterial.bumpTexture3 = new BABYLON.Texture("floor_bump.png", scene);

    // Rescale textures according to the terrain
    terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
    terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
    terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 10;

    terrain.material = terrainMaterial;
    terrain.receiveShadows = true;

    terrain.checkCollisions = true;
}