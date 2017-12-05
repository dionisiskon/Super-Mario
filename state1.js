var state1= {
	preload: function() {
		},

		create: function() {

			Phaser.Canvas.setImageRenderingCrisp(game.canvas)
			game.stage.backgroundColor = '#0000';

			map = game.add.tilemap('level');
			map.addTilesetImage('tiles', 'tiles');
			map.setCollisionBetween(3, 12, true, 'solid');
			map.setCollisionBetween(3, 12, true, 'pipes');



			map.createLayer('background');
			pipes = map.createLayer('pipes');
			pipes.resizeWorld();

			layer = map.createLayer('solid');
			layer.resizeWorld();

			coins = game.add.group();
			coins.enableBody = true;
			map.createFromTiles(2, null, 'coin', 'stuff', coins);
			coins.callAll('animations.add', 'animations', 'spin',
					[ 0, 0, 1, 2,3,4,5,6,7 ], 10, true);
			coins.callAll('animations.play', 'animations', 'spin');

			goombas = game.add.group();
			goombas.enableBody = true;
			map.createFromTiles(1, null, 'goomba', 'stuff', goombas);
			goombas.callAll('animations.add', 'animations', 'walk', [ 0, 1 ],2, true);
			goombas.callAll('animations.play', 'animations', 'walk');
			goombas.setAll('body.bounce.x', 1);
			goombas.setAll('body.velocity.x', -20);
			goombas.setAll('body.gravity.y', 500);

			pyroguys=game.add.group(); 
			pyroguys.enableBody=true;
			map.createFromTiles(22,null,'pyroguys','stuff',pyroguys);
			pyroguys.callAll('animations.add', 'animations', 'walkLeft', [ 5,6 ],4, true);
			pyroguys.callAll('animations.add','animations' ,' walkRight',[14,13],4,true);
			pyroguys.callAll('animations.play', 'animations', 'walkLeft');
			pyroguys.setAll('body.bounce.x', 1);
			pyroguys.setAll('body.velocity.x', -30);
			pyroguys.setAll('body.gravity.y', 500);

			player = game.add.sprite(16, game.world.height - 48, 'mario');
			game.physics.arcade.enable(player);
			player.body.gravity.y = 370;
			player.body.collideWorldBounds = true;
			player.animations.add('walkRight', [1, 2 ], 10, true);
			player.animations.add('walkLeft', [ 10, 11 ],10, true);
			player.animations.add('tp',[18,18,19,19,20,20,21,21,22,22,23,23,24],10,true);
			player.goesRight = true;
			game.camera.follow(player);
			scoreText=game.add.text(16,8,'WARIO\n'+score,{font:'15px Press Start 2P' ,fontSize: '8px', fill: 'white'} );
			cimage=game.add.sprite(80,7,'pic');
			limage=game.add.sprite(140,8,'live');
			lcounter=game.add.text(158,13,'X'+lives,{font:'15px Press Start 2P' ,fontSize: '8px', fill: 'white'});
			ccounter=game.add.text(98,13,'X'+cvalue,{font:'15px Press Start 2P' ,fontSize: '8px', fill: 'white'});
			gkill=game.add.text(218,13,'X'+gokill,{font:'15px Press Start 2P' ,fontSize: '8px', fill: 'white'});
			gimage=game.add.sprite(200,8,'gpic');
			gimage.fixedToCamera=true;
			gkill.fixedToCamera=true;
			cimage.fixedToCamera=true;
			scoreText.fixedToCamera=true;
			ccounter.fixedToCamera=true;
			limage.fixedToCamera=true;
			lcounter.fixedToCamera=true;
			cursors = game.input.keyboard.createCursorKeys();
			music=game.add.audio('maintheme');
			music.loop=true;
			music.play();
		},
		update: function() {
			game.physics.arcade.collide(player, layer);
			game.physics.arcade.collide(goombas, layer);
			game.physics.arcade.overlap(player, goombas, goombaOverlap);
			game.physics.arcade.collide(pyroguys, layer);	
			game.physics.arcade.overlap(player, pyroguys, pyroguyOverlap);
			game.physics.arcade.overlap(player, coins, coinOverlap);
			game.physics.arcade.collide(player,pipes,pipesOverlap);
			game.physics.arcade.collide(pyroguys,pipes);
			game.physics.arcade.collide(pyroguys,layer,pyroguysDirection);
			game.physics.arcade.overlap(pyroguys,layer,pyroguysDirection);
			if (player.body.enable) {
				player.body.velocity.x = 0;
				if (cursors.left.isDown) {
					player.body.velocity.x = -90;
					player.animations.play('walkLeft');
					player.goesRight = false;
				} else if (cursors.right.isDown) {
					player.body.velocity.x = 90;
					player.animations.play('walkRight');
					player.goesRight = true;
				} else {
					player.animations.stop();
					if (player.goesRight)
						player.frame = 0;
					else
						player.frame = 9;
				} 

				if (cursors.up.isDown && player.body.onFloor()) {
					jumps = game.add.audio('jump');
		           	        jumps.play();
					player.body.velocity.y = -190;
					player.animations.stop();
				}

				if (player.body.velocity.y != 0) {
					if (player.goesRight)
						player.frame = 4;
					else
						player.frame = 13;
				}
			}
		}
	}