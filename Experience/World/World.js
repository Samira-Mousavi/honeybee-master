import * as THREE from 'three'
import Experience from '../Experience'
import Environment from './Environment'
import Model from './Model'
import Jar from './Jar'
import Honeycomb from './Honeycomb'
import Controls from './Controls'

export default class World{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.resources = this.experience.resources

        this.resources.on('ready', () =>{
            this.environment = new Environment()
            this.model = new Model()
            this.jar = new Jar()
            this.honeycomb = new Honeycomb()
            this.controls = new Controls()
        })

    }


    

    resize()
    {

    }

    update()
    {
        if(this.model)
        {
            this.model.update()
        }
        if(this.jar)
        {
            this.jar.update()
        }

        if(this.honeycomb)
        {
            this.honeycomb.update()
        }
    }
}
