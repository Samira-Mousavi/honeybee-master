import * as THREE from 'three'
import Experience from "./Experience";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
export default class Camera{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.createPerspectiveCamera()
        // this.setOrbitControls()
        this.onScrollCameraUpdate()
    }

    createPerspectiveCamera()
    {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspectRatio, 0.1, 1000)
        this.scene.add(this.perspectiveCamera)
        this.perspectiveCamera.position.z = 5
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls.enableDamping = true
        // this.controls.autoRotate = true
    }

    resize()
    {
        this.perspectiveCamera.aspect = this.sizes.aspectRatio
    }

    onScrollCameraUpdate(e)
    {
        this.perspectiveCamera.position.y = (-window.scrollY / 500) *1.1
    }

    update()
    {
        // this.controls.update()
        this.perspectiveCamera.updateProjectionMatrix()
    }
}
