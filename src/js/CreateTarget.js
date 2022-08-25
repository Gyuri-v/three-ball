import { Cylinder, Body, Vec3 } from "cannon-es";

export default class CreateTarget {
    constructor(info) {
        this.scene = info.scene;
        this.world = info.cannonWorld;
        this.gltfLoader = info.gltfLoader;
        this.goalsMaterial = info.goalsMaterial;
        this.name = info.name;
    
        this.x = info.x || 0;
        this.y = info.y || 10;
        this.z = info.z || 0;
    
        this.gltfLoader.load(
            './assets/model/target.glb',
            (gltf) => {
                this.mesh = gltf.scene.children[0];
                this.mesh.name = this.name;
                this.mesh.scale.set(3, 3, 3);
                this.mesh.rotation.z = Math.PI / 2;
                this.mesh.position.set(this.x, this.y, this.z);

                this.scene.add( this.mesh );
    
                this.setCannonBody();
            }
        );
    }
    
    setCannonBody() {
        let targetPosition = new Vec3( this.x, this.y - 1.2, this.z );
        this.shape = new Cylinder(1.8, 1.8, 0.3, 10);
        this.body = new Body({
            mass: 0,
            position: targetPosition,
            shape: this.shape,
            material: this.goalsMaterial,
        });
        this.body.quaternion.setFromAxisAngle(
            new Vec3(1, 0, 0),
            Math.PI / 2,
        );
        this.mesh.cannonBody = this.body;
        this.world.addBody(this.body);
    }
}