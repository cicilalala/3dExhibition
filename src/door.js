function Door(){
	this.geometry = new THREE.BoxGeometry(0.14, 1.8, 1);
	this.material = new THREE.MeshLambertMaterial({side: THREE.DoubleSide});
	this.texture = THREE.ImageUtils.loadTexture("../textures/wood-2.jpg");
	this.material.map = this.texture;
	this.mesh = new THREE.Mesh(this.geometry, this.material);
	this.mesh.position.set(5.29, -0.1, 4);
}