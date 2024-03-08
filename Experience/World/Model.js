import * as THREE from 'three'
import Experience from '../Experience'

export default class Model{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.assets = this.resources.items
        this.sizes = this.experience.sizes
        this.bee = this.assets.bee.scene
        this.time = this.experience.time
        // console.log(this.bee)

        this.setModel()
        this.flag =false
        // console.log(this.flag)
        // this.setModelMaterial()
        // this.setMesh()
        // this.setModelAnimation()

    }

    setModel()
    {
        this.scene.add(this.bee)
        this.bee.rotation.y = 1.5
        this.bee.position.x = 0
        this.bee.position.y = 1

        this.bee.scale.set(0.1,0.1,0.1)

    }

    
    setModelAnimation()
    {
        this.bee.children[1].rotation.x =(Math.sin(this.time.elapsed * 0.01))/2
        this.bee.children[2].rotation.x =(Math.sin(-this.time.elapsed * 0.01))/2
        this.bee.rotation.y += 0.01 
        if(this.flag === true)
        {
            this.bee.position.x = -(Math.sin(this.time.elapsed * 0.001)) *2
        } 
        // this.bee.position.z = (Math.cos(this.time.elapsed * 0.001)) * 1.5
    }

    resize()
    {

    }

    update()
    {
        this.setModelAnimation()
    }
}
