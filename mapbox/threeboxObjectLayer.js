import Threebox from './threebox.js';

export default {
    id: 'custom_layer',
    type: 'custom',
    onAdd: function(map, mbxContext){
        console.log('hello');
        
        tb = new Threebox(
            map, 
            mbxContext,
            {defaultLights: true}
        );
        
        const coords = [41.874751, -87.613242];
        const origin = [coords[1], coords[0]];
        
        // initialize geometry and material of our cube object
        var geometry = new THREE.BoxGeometry(200, 200, 200);
        var redMaterial = new THREE.MeshLambertMaterial({
            color: 'd40000', 
        });

        var cube = new THREE.Mesh(geometry, redMaterial);
        cube = tb.Object3D({
            obj: cube,
            units: 'meters'
        })
            .setCoords([-87.61694, 41.86625])

        tb.add(cube)
    },
    
    render: function(gl, matrix){
        tb.update();
    }
};
