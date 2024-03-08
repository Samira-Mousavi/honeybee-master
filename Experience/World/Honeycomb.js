import * as THREE from 'three'
import Experience from '/Experience/Experience.js'
import honeycombVertexShader from './Shaders/Honeycomb/vertexShader.glsl'
import honeycombFragmentShader from './Shaders/Honeycomb/fragmentShader.glsl'

export default class Honeycomb{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.assets = this.resources.items
        this.time = this.experience.time
        console.log(this.assets)
        // this.setHoneycombShader()
        this.setHoneycombParticles()
    }

    setHoneycombParticles()
    {
        const particleGeometry = new THREE.BufferGeometry()
        const count = 250

        const positions = new Float32Array( count * 3)

        for(let i = 0; i <count *3; i++)
        {
            positions[i] = (Math.random() -0.5) * 30
        }

        particleGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        )

        const particleMaterial = new THREE.PointsMaterial({
            color: new THREE.Color('#1E1E1E'),
            transparent:true,
            // alphaMap:this.assets.honeycombAlphaMap,
            depthWrite:false,
        })
        particleMaterial.size = 0.5
        particleMaterial.sizeAttenuation = true
        this.honeycombParticles = new THREE.Points(particleGeometry, particleMaterial)
        this.scene.add(this.honeycombParticles)
        this.honeycombParticles.position.z = -1
    }
    setHoneycombShader()
    {
        this.honeycombGeomtery = new THREE.PlaneGeometry(1,1, 128, 128)
        this.honeycombMaterial =  new THREE.ShaderMaterial(
            {
                vertexShader: honeycombVertexShader,
                fragmentShader: honeycombFragmentShader
            }
        )



        this.honeyCombs = new THREE.Mesh(this.honeycombGeomtery, this.honeycombMaterial)
        this.scene.add(this.honeyCombs)
    }

    update()
    {
        this.honeycombParticles.rotation.x += 0.0005 
    }
}