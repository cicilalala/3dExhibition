function Ground(){
	this.geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
	// this.material = new THREE.MeshLambertMaterial({color: 0x3da1ff, side: THREE.DoubleSide, wireframe: false});
	this.texture = THREE.ImageUtils.loadTexture("../textures/floor-wood.jpg");
	this.material = new THREE.MeshPhongMaterial();
	this.material.map = this.texture;
	this.mesh = new THREE.Mesh(this.geometry, this.material);
}