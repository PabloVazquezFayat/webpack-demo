import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';

export default function (scene){

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

}