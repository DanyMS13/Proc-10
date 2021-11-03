var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2bb1b70e-8e0c-4c43-a887-81cd1f37d9cc"],"propsByKey":{"2bb1b70e-8e0c-4c43-a887-81cd1f37d9cc":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MZMliVkANHQJX.4svaG8DdGX_8DfihSb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2bb1b70e-8e0c-4c43-a887-81cd1f37d9cc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
   car1.velocityY = 8;
   car2.velocityY = -8;
   car3.velocityY = 8;
   car4.velocityY = -8;
   
playSound("assets/category_background/stride.mp3", true);

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
  
 if (keyDown("left")) {
   sam.x = sam.x - 2;
  }
  if (keyDown("right")) {
    sam.x = sam.x + 2;
  }
 
  if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)|| sam.isTouching(car4)){
     sam.x = 20;
     sam.y = 190;
     life = life-1;
     playSound("assets/category_digital/fail.mp3");
  }
  if (life==0) {
    car1.velocityY =0 ;
    car2.velocityY =0 ;
    car3.velocityY =0 ;
    car4.velocityY =0 ;
    textSize(45);
    fill("white");
    stroke("black");
    strokeWeight(5);
    text("Lo siento, Perdiste", 10,60);
    text("Mejor suerte la",40,320);
    text("Proxima !",90,370);
  }
  
  
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
