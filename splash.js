var splash= {
	preload: function(){
		game.load.image('loading',  'menu/loading.png');
		game.load.image('logo', 'menu/logo.png');
		game.load.image('lvl1','menu/lvl1.png');
		game.load.image('lvl2','menu/lvl2.png');
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
		menu.anchor.set(0.5,0.5);

		var button1 = game.add.button( 120, 160, "lvl1", function(){
			game.state.start('state1');
		});
		//if(finished==true){
		 var button2 = game.add.button(120 , 199, "lvl2", function(){
		  	game.state.start('state2');
		  });
		 button2.anchor.set(0.5, 0.5);
		//		}

		button1.anchor.set(0.5, 0.5);
		

	}
}
