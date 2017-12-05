var preloader1={
	this.load.audio('maintheme','audio/maintheme1.mp3');
	this.load.audio('stomp','audio/stomp.mp3');
	this.load.audio('jump','audio/jump.mp3');
	this.load.audio('coinsc','audio/coin.mp3');
	this.load.audio('death','audio/death.mp3');
	this.load.image('pic','assets/coin1.png');
	this.load.image('live','assets/mariolive.png');
	this.load.image('gpic','assets/goombapic.png');
	this.load.audio('clearc','audio/courseclear.mp3');

	this.load.spritesheet('tiles', 'assets/newtiles.png', 16,
					16);
	this.load.spritesheet('goomba', 'assets/goomba.png', 16, 16);
	this.load.spritesheet('mario', 'assets/1234.png', 16, 16);
	this.load.spritesheet('coin', 'assets/cointest1.png', 16, 16);
	this.load.spritesheet('pyroguys','assets/shyguy13.png',16,16);

	this.load.tilemap('level', 'assets/2016178.json', null,
					Phaser.Tilemap.TILED_JSON);

}