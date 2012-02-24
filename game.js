window.onload = function() {
  var WIDTH = 800,
      HEIGHT = 450;
  
  //init crafty
  Crafty.init(WIDTH, HEIGHT);
  Crafty.background("#000");
  
  Crafty.sprite(32, "assets/shipwip.png", { shipsprite: [0, 0]});
  Crafty.sprite("assets/titlewip.png", { logosprite: [0, 0, 100, 40]});
  
  Crafty.audio.add("main_theme", "assets/music/fusion2004_-_a_bridge_home_-_theme_wip1.mp3");
  Crafty.audio.add("shoot", "assets/sound/shoot.wav");
  Crafty.audio.settings("shoot", { volume: 0.2 });
  Crafty.audio.play("main_theme", -1);
  
  var player = Crafty.e("2D, Canvas, Fourway, Keyboard, shipsprite")
                     .attr({x: 160, y: 96, w: 64, h: 64})
                     .fourway(5)
                     .bind("KeyDown", function(e) {
                       if(e.keyCode === Crafty.keys.SPACE) {
                         Crafty.audio.play("shoot");
                       }
                     });
  var logo = Crafty.e("2D, Canvas, logosprite")
                   .attr({x: 20, y: 0, w: 200, h: 80});
  
  
  //var pl = Crafty.e("2D, Canvas, Color, Fourway")
  //                .attr({x: 160, y: 96, w: 32, h: 32}) // for Component 2D
  //                .color("#FF0000") // for Component Color
  //                .fourway(5);
  

};