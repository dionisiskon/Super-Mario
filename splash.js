var splash= {
	preload: function(){
		game.load.image('loading',  'menu/loading.png');
		game.load.image('logo', 'menu/logo.png');
		game.load.image('lvl1','menu/lvl1.png');
		game.load.image('bg','menu/445906.jpg');
	},
	create:function(){	
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		var background=game.add.sprite(0,0,'bg');
		//background.anchor.set(0.5,0.5);

		var menu = game.add.sprite(100,70, 'logo');

		var button1 = game.add.button(100 , 150, "lvl1", function(){
			game.state.start('state1');
		});
		button1.anchor.set(0.5, 0.5);

	}
}
