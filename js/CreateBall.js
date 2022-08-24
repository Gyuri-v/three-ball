import { Body, Sphere, Vec3 } from "cannon-es";
import { SphereGeometry, MeshToonMaterial, Mesh } from "three";

export default class CreateBall {
    constructor(info) {
        this.scene = info.scene;
        this.world = info.cannonWorld;
        this.name = info.name;
        this.ballsMaterial = info.ballsMaterial;
    
        this.geometry = new SphereGeometry();
        this.material = new MeshToonMaterial({
            color: 'plum',
            // gradientMap: gradientTex,
        });
        this.mesh = new Mesh(this.geometry, this.material);
        this.mesh.name = this.name;
        this.mesh.position.set(0, 1, 20);
        this.mesh.castShadow = true;
        this.scene.add(this.mesh);
        
        this.shape = new Sphere(1);
        this.body = new Body({
            mass: 1,
            position: new Vec3(0, 1, 20),
            shape: this.shape,
            material: this.ballsMaterial,
            collisionFilterGroup: 2,
            collisionFilterMask: 1,
        });
        this.mesh.cannonBody = this.body;
        this.world.addBody(this.body);
    }
}