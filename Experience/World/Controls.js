import * as THREE from 'three'
import Experience from '../Experience'
import GSAP from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Controls{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.jar = this.experience.world.jar.jar
        this.sizes = this.experience.sizes

        GSAP.registerPlugin(ScrollTrigger)

        this.setScrollTrigger()
    }

    setScrollTrigger()
    {
        // this.timeline = new GSAP.timeline()
        // this.timeline.to(this.jar.position, {
        //     x:1,
        //     scrollTrigger: {
        //         trigger: ".hello",
        //         markers: true,
        //         start: "top top",
        //         end: "bottom bottom",
        //         scrub: 1.6,
        //         invalidateOnRefresh: true
        //     }
        // })
        
        console.log('gsap')

        this.scrollTrigger = GSAP.matchMedia();

        this.scrollTrigger.add("(min-width: 800px)", () => 
        {
        // desktop setup code here...
            console.log('fired desktop')

            this.firstTimeline = new GSAP.timeline({
                scrollTrigger:{
                    trigger: ".hello",
                    markers: false,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.6,
                    invalidateOnRefresh: true
                }
            })

            this.firstTimeline.to(this.jar.position, {
                x:() =>{
                    return this.sizes.width * 0.001
                }
            })
        });

        this.scrollTrigger.add("(max-width: 799px)", () => 
        {
        // mobile setup code here...
            console.log('fired mobile')
            this.firstTimeline = new GSAP.timeline({
                scrollTrigger:{
                    trigger: ".first-margin",
                    markers: false,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.6,
                    invalidateOnRefresh: true
                }
            })

            this.firstTimeline.to(this.jar.position, {
                x:() =>{
                    return 0
                }
            })
        });
    }


    resize()
    {

    }

    update()
    {

    }
}
