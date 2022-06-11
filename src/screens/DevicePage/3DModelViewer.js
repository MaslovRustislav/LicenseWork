import * as THREE from 'three';
import React, { Component } from 'react';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import  {useNavigate } from 'react-router-dom';


class DeviceViewer extends Component{
    constructor(){
        super();
        this.containerRef = React.createRef();
        this.Iphone11= require('../../assets/Models/Iphone11.glb')
        const imageBg = require('../../assets/Images/backgroundFor3d1.jpg');

        this.camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.5,100);
        this.camera.position.set(0,0,4);
        // this.camera.lookAt(new THREE.Vector3(2,0,0));
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.TextureLoader().load(imageBg);

     

        this.renderer = new THREE.WebGL1Renderer({antialias:true});
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth,window.innerHeight);
        
        this.renderer.setAnimationLoop(this.render.bind(this))

        const controls = new OrbitControls(this.camera,this.renderer.domElement)
        const ambientLight = new THREE.HemisphereLight(0xffffff,0xbbbbff,0.5);
        this.scene.add(ambientLight)

        const light = new THREE.DirectionalLight();
        light.position.set(0.2,0.3,3)
        this.scene.add(light)


    


        window.addEventListener('resize',this.resize.bind(this))
        this.loadModel(this.scene)
    }
    loadModel(room) {
        const draco = new DRACOLoader();
    
        const self = this;
        const loader = new GLTFLoader();
        draco.setDecoderConfig({ type: 'js' });
    
        draco.setDecoderPath(
          'https://s3.eu-central-1.amazonaws.com/lectio.site/draco/'
        );
        loader.setDRACOLoader(draco);
        loader.load(
            this.Iphone11,
          function (gltf) {
              room.add(gltf.scene);
              gltf.scene.children[0].position.set(0, -0.7,0);
              gltf.scene.children[0].scale.set(8, 8,8);
            self.model = gltf.scene;
    
            if (gltf?.animations.length) {
              self.mixer = new THREE.AnimationMixer(gltf.scene);
              const clips = gltf?.animations;
              clips.forEach(function (clip) {
                self?.mixer?.clipAction(clip)?.play();
              });
            }
    
            self.setState({ ...self.state, progress: false });
          },
          function (xhr) {
            self.setState({
              ...self.state,
              percent: (xhr.loaded / xhr.total) * 100
            });
          },
          function (err) {
            console.log('error========>', err);
          }
        );
      }
    resize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );  
    }
    componentDidMount() {
        // this.button = document.getElementById('vrButton');
        this.containerRef?.current?.appendChild(this.renderer.domElement);
    }

  componentWillUnmount() {
    this.containerRef?.current?.removeChild(this.renderer.domElement);
    window.removeEventListener('resize', this.resize);
  }
	render( ) {   
        this.renderer.render( this.scene, this.camera );
        return(
            <div ref={this.containerRef}  className='-mt-40 -ml-10 '>
</div>
        )
    }

}
export default DeviceViewer


