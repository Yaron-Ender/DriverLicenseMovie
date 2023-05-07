const drawingWrapper =document.querySelector('.drawing-wrapper');
const sceneOne = document.querySelector(".scene-one");
const sceneTwo = document.querySelector(".scene-two");
const sceneThree = document.querySelector(".scene-three");
const sceneFour = document.querySelector(".scene-four");
const canvasUp = document.querySelector(".drawing-wrapper .canvas-up");
const cUp = canvasUp.getContext("2d");
const canvasDown = document.querySelector(".drawing-wrapper .canvas-down");
const canvasFour = document.querySelector(".canvas-four");
const c4 = canvasFour.getContext("2d");
const cDown = canvasDown.getContext("2d");
const table = new Image();
table.src=' ./assets/table.png'
const car = new Image();
car.src = "./assets/car.png";
const trafficLight = new Image()
trafficLight.src='./assets/traffic light.svg'
const trafficLigthTwist = new Image();
trafficLigthTwist.src = "./assets/traffic-light-twist.svg";
//time varible for scene 4
let sceneFourTime;
//canvas dimention
canvasUp.width = innerWidth;
canvasUp.height = innerHeight/2;
canvasDown.width = innerWidth;
canvasDown.height = innerHeight - innerHeight/2;
canvasFour.width = innerWidth;
canvasFour.height = innerHeight;
//for text animation
let moveDadyText=10
//for woryMan animation
let armLeftY = 100;  
let armLeftX = 18;
let hairOffset = 3
let stopChangeArm = false;
//man with phone
let phone =false;
let contTospeak=true;
cUp.beginPath()
// const path = new Path2D()
// //head
// path.roundRect(500,260,70,55,[0,0,20,20]);
// //body
// path.roundRect(518,310,35,45,[0,0,10,10]);
// //arm left
// path.moveTo(518,310);
// path.quadraticCurveTo(490,350,480,350);
// //arm right
// path.moveTo(553,310);
// path.quadraticCurveTo(573,350,583,350);
// cUp.stroke(path)
// //leg left
// path.moveTo(525,355);
// path.quadraticCurveTo(513,350,520,400);
// cUp.stroke(path)
// //right leg
// path.moveTo(550,355);
// path.quadraticCurveTo(550,400,545,400);
// cUp.stroke(path)

// const path2 = new Path2D(path);
// cUp.translate(-100,-50)
// cUp.restore()
// path2.moveTo(518,310)
// path2.lineTo(498,370)
// path2.lineTo(570,370)
// path2.lineTo(555,310)
// cUp.stroke(path2)
//class of man


class Man {
  constructor(x, y, widthHead, heightHead, cDown) {
    this.x = x;
    this.y = y;
    this.widthHead = widthHead;
    this.heightHead = heightHead;
    this.cDown = cDown;
  }
  drawMan(
    mouseRadius = 9,
    armLeftX = 18,
    armLeftY = 100,
    hairOffset = 3,
    hairHeight = 6,
    closeMouse = false
  ) {
    //head
    this.cDown.strokeStyle = "black";
    this.cDown.lineWidth = 6;
    this.cDown.save();
    this.cDown.roundRect(this.x, this.y, 70, 55, [0, 0, 40, 40]);
    this.cDown.stroke();
    //body
    this.cDown.beginPath();
    this.cDown.fillStyle = "blue";
    this.cDown.roundRect(this.x + 18, this.y + 50, 35, 45, [0, 0, 10, 10]);
    this.cDown.fill();
    this.cDown.restore();
    //arm left
    if (phone) {
      this.cDown.moveTo(this.x + 18, this.y + 50);
      this.cDown.quadraticCurveTo(
        this.x + 18,
        this.y + 100,
        this.x - armLeftX,
        this.y + armLeftY
      );
      this.cDown.fillStyle = "green";
      this.cDown.fillRect(this.x - armLeftX - 5, this.y + armLeftY - 2, 30, 10);
    }
    if (!phone) {
      this.cDown.moveTo(this.x + 18, this.y + 50);
      this.cDown.quadraticCurveTo(
        this.x + 18,
        this.y + 100,
        this.x - armLeftX,
        this.y + armLeftY
      );
    }
    //arm right
    this.cDown.moveTo(this.x + 55, this.y + 50);
    this.cDown.quadraticCurveTo(
      this.x + 53,
      this.y + 100,
      this.x + 83,
      this.y + 100
    );
    //leg left
    this.cDown.moveTo(this.x + 20, this.y + 90);
    this.cDown.quadraticCurveTo(
      this.x + 10,
      this.y + 150,
      this.x + 18,
      this.y + 150
    );
    //right leg
    this.cDown.moveTo(this.x + 45, this.y + 90);
    this.cDown.quadraticCurveTo(
      this.x + 35,
      this.y + 150,
      this.x + 45,
      this.y + 150
    );
    this.cDown.stroke();
    //face
    //eye left
    this.cDown.beginPath();
    this.cDown.fillStyle = "black";
    this.cDown.arc(
      this.x + (this.widthHead / 2) * 0.6,
      this.y + (this.heightHead / 2) * 0.7,
      5,
      0,
      Math.PI * 2
    );
    //eye right
    this.cDown.arc(
      this.x + (this.widthHead / 2) * 1.4,
      this.y + (this.heightHead / 2) * 0.7,
      5,
      0,
      Math.PI * 2
    );
    //mouth
    this.cDown.fill();
    this.cDown.beginPath();
    this.cDown.arc(
      this.x + this.widthHead / 2,
      this.y + (this.heightHead / 2) * 1.3,
      mouseRadius,
      0,
     (closeMouse) ? Math.PI * 2 : Math.PI
    );
    this.cDown.fill();
    //hair
    // this.cDown.beginPath();
    // this.cDown.lineWidth = 0.8;
    // this.cDown.moveTo(this.x, this.y);
    // this.cDown.arc(
    //   this.x,
    //   this.y + (this.heightHead / 2) * 1.3,
    //   7,
    //   0,
    //   Math.PI * 2
    // );
    this.cDown.beginPath();
    for (let i = 0; i < 15; i++) {
      this.cDown.arc(
        this.x + hairOffset + this.widthHead - i * 4,
        this.y,
        this.widthHead / hairHeight,
        3,
        Math.PI + Math.PI * 0.4
      );
    }
    //currlly hair
    // this.cDown.quadraticCurveTo(this.x, this.y, this.x+66, this.y-20);
    this.cDown.stroke();
    return this;
  }
}
const m = new Man(400,canvasDown.height/2.5,70,55,cDown)
m.drawMan()
//functions
//handle with text
function startTextAnimation(){
cUp.clearRect(0,0,canvasUp.width,250)
if(moveDadyText<canvasUp.width/4){
moveDadyText++
cUp.font = "100px serif";
cUp.fillText("אבא",canvasUp.width - moveDadyText*5,150);
requestAnimationFrame(startTextAnimation)
}else{
setMoveDadyText()
 passedTheTest()
}
}
function passedTheTest(){
cUp.clearRect(0, 0, canvasUp.width, 300);
if (moveDadyText < canvasUp.width*.7 ) {
    moveDadyText++;
    cUp.font = "48px serif";
    cUp.fillText(" !!! עברתי טסט", canvasUp.width - moveDadyText * 5, 150); 
    requestAnimationFrame(passedTheTest)
 if(moveDadyText> 160){
     worriedMan();
 }
} 
}
//zero moveDadyText
function setMoveDadyText(){
    moveDadyText=10  
}

async function worriedMan(){

if(armLeftY>38&&!stopChangeArm){
  armLeftY--
  if (armLeftX > 0) {
    armLeftX--;
  }
  if(hairOffset<14){
    hairOffset=hairOffset+0.1
  }
  cDown.clearRect(0, 0, canvasDown.width, canvasDown.height);
  m.drawMan(3,armLeftX,armLeftY,hairOffset,3,false);
  requestAnimationFrame(worriedMan);
}
//end scene one and start scene two
if(armLeftY===38&&contTospeak){
   contTospeak=false;
   stopChangeArm=true
      armLeftY = 100;
      armLeftX = 18;
   await delay(3000).then(() =>speak());
   sceneOne.classList.add("none");
  sceneTwo.classList.remove("none");

}
}

//start animations
setTimeout(()=>{
startTextAnimation()
},1000)

// addEventListener('load',()=>{
// sceneOne.classList.toggle('none')
    
// })
// sceneOne.addEventListener("animationend", () => {
//     console.log("Animation ended");
//     sceneOne.classList.toggle('none')

// });
// sceneTwo.addEventListener("animationend", () => {
//     console.log("Animation ended");
//     sceneTwo.classList.toggle('none')

// });

//***************************************** */
//*************22222222222222222****************** */
//******22222222222222222222222222*********** */
//***************************************** */
const canvasTow = document.querySelector(".scene-two .canvas-two");
const c2 =  canvasTow.getContext('2d')
//general scope varibles
canvasTow.width = innerWidth;
canvasTow.height = innerHeight;
let speakIntervalAnimation = 15000; 
let mouseOpen = 4; 
// armLeftY = 100;
// armLeftX = 18;
let speakLoudlyTime=1000*30
// create instance of man and bubble speach
const m2 = new Man(canvasTow.width/2, canvasTow.height*.7, 70, 55, c2);
//the m3 is for the figure round part
const m3 = new Man(canvasTow.width / 2.1, canvasTow.height * 0.7, 70, 55, c2);
//this varible is for changing the path pf tracking
let trackY =m2.y
let trackX =m2.x
const now = Date.now();
let contToStep2= false;
c2.fillStyle='black'
c2.save()
// Classes
//Buble speach
class Bubble {
constructor(x, y, ry, rx,bck='rgba(255,255,255,0)') {
  this.cx = x;
  this.cy = y;
  this.ry = ry;
  this.rx = rx;
  this.bck=bck;
}
  handleTextAndBubble(ctx,text,bubDirection,textColor) {
  //bubble direction
  const right =bubDirection
  
  //text parameter
  this.originalText = text;
  this.modifiedText = "";
  //convert the string into array
  const arr = this.originalText.split(" ");
  const lengthOriginalArray = arr.length;
  // cut the array into groups of 5 word each
  for (let i = 0; i < Math.ceil(lengthOriginalArray / 5); i++) {
// text offset is the hight of the words
  let textOffset = 0;
  this.modifiedText = arr.splice(0, 5).join(" ");
   textOffset = i * 35;

  this.ellipseRight(textOffset,ctx,right,textColor);
  }
}
  ellipseRight(textOffset,ctx,right,textColor) {
  let fontSize = 50;
  ctx.beginPath();
  //bubble speach
  ctx.fillStyle=this.bck
  ctx.ellipse(this.cx,this.cy,this.ry,this.rx,
  Math.PI / 2,
  0,
  (Math.PI / 180) * 350
  );
  ctx.fill()
  // ctx.restore();
  //speach conos
  if(right){
   ctx.quadraticCurveTo(this.cx,this.cy+80, this.cx + 50, this.cy + this.ry + 50);
  }
  if(!right){
    ctx.quadraticCurveTo(this.cx,this.cy+90, this.cx + -40, this.cy + this.ry + 50);
  }
  ctx.quadraticCurveTo(this.cx, this.cy+100, this.cx, this.cy + this.ry);
  //adjust text to ballon
do {
fontSize--;
ctx.fillStyle=textColor
ctx.font = `${fontSize}px Comic Sans MS`;
if (ctx.measureText(this.modifiedText).width < this.rx * 2) {
  ctx.font = `${fontSize - 3 }px Comic Sans MS`;
ctx.fillText(`${this.modifiedText}`,this.cx -this.rx+
(this.rx * 2 - ctx.measureText(this.modifiedText).width) / 2,
 this.cy - this.ry / 5 + textOffset
);
}
} while (this.fitMeasureText(this.modifiedText, fontSize,ctx) > this.rx * 2);
 ctx.stroke();
}
fitMeasureText(text, fontSize,ctx) {
  ctx.fillStyle = "black";
    ctx.font = `${fontSize}px Comic Sans MS`;
    return ctx.measureText(text).width;
}
}
//end of Bubble Speach
// c2.fillStyle='black'
// c2.save()
// c2.fill()
//functions
//figure is speaking
function speak(){
phone=true
c2.clearRect(0,0,canvasTow.width,canvasTow.height);
c2.fillStyle='black'
if (armLeftY > 30) {
armLeftY--;
if (armLeftX > 0) {
armLeftX--;
}
c2.clearRect(0, 0, canvasTow.width, canvasTow.height);
m2.drawMan(mouseOpen > 4 ? (mouseOpen = 1) : mouseOpen++  , armLeftX, armLeftY);
c2.save()
}else{
c2.clearRect(0, 0, canvasTow.width, canvasTow.height);
m2.drawMan(mouseOpen > 4 ? (mouseOpen = 1) : mouseOpen++,28,15);
}
const bubbleRight = new Bubble(
  canvasTow.width /2.2,
  canvasTow.height * 0.5,
  100,
  150
  );
  bubbleRight.handleTextAndBubble(c2, "סליחה,אבל אני מבין למה הביטוח לנהג צעיר כל כך יקר",true);
//22000
//25000
  if (Date.now() - now <18000) {
    contToStep2 = true;
    requestAnimationFrame(speak);
  }
  //24950
  if (Date.now() - now > 17900&&contToStep2) {
    contToStep2 = false;
    trackX = m3.x;
    trackY = m3.y;
    roundFigure()
  }
}
//move the figure little
function roundFigure(){
  c2.fillStyle='black'
  c2.clearRect(0, 0, canvasTow.width, canvasTow.height);
  phone=false;
  m3.drawMan(3);   
  trackX=trackX-1
  trackY=trackY-1
  c2.translate(-1,-0.2,0.2,0,0,0);
  //25500
  if (Date.now()-now<18000){
    requestAnimationFrame(roundFigure);
  }else{
mouseOpen = 7; 
speakLoudly(); 
  }
  //25000
  // mouseOpen=7
  // if (Date.now() - now >17400) {
  //   speakLoudly()
  // }
}

async function speakLoudly(){
  (mouseOpen < 10) ? mouseOpen++ : (mouseOpen = 7); 
  if(armLeftX > -16){
    armLeftX--
  }
  if(armLeftY > 40){
    armLeftY--
  }
  c2.clearRect(0, 0, canvasTow.width, canvasTow.height);  
  m3.drawMan(mouseOpen, armLeftX, armLeftY,3,6,true);
  const bubbleRight = new Bubble(
    canvasTow.width /1.7,
    canvasTow.height * 0.45,
    100,
    150
    );
    bubbleRight.handleTextAndBubble(c2, "חמודה של אבא, אולי תעשי עוד כמה טסטים,אין מה למהר ",false,'red','rgba(255,255,255,0.2)');
    c2.fillStyle='rgba(255,255,255,0.1)'
    c2.fill();
    await delay(4000).then(()=>{
      sceneTwo.classList.add('none')
      sceneThree.classList.remove('none')
        startScene3()
      
    })
  }
// window events

//scene 3
const canvasThree = document.querySelector('.canvas-three')
const c3 = canvasThree.getContext('2d')
canvasThree.width = innerWidth;
canvasThree.height = innerHeight
//define bubble instance
const bubbleRight2 = new Bubble(
canvasThree.width*0.2,
canvasThree.height*0.6,
100,
150
);

c3.strokeStyle='green'
c3.lineWidth=6
c3.save()
// smoke Class
class Smoke{
constructor(r,ctx,){
this.x;
this.y;
this.r=r;
this.ctx=ctx
}
circle(){
this.ctx.beginPath();
this.ctx.fillStyle='rgba(255,255,255,.1)';
this.ctx.shadowColor = "hsl(12 0% 0%)";
this.ctx.shadowBlur =1;
this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2)
this.ctx.fill();
return this
}
efects(x,y){
this.x =x+Math.random()*80  
this.y = y + Math.random()*20;
return this
}
efects2(x,y){
this.x =x+Math.random()*80  
this.y = y + Math.random()*20;
return this
}
}
//varible for the car transform
const measurmentsObj ={
bubbleOffsetforCarOne:0
}
let scH =1;
let skH = 0;;
let skV=0;
let scV = 1;
let mH=1;
let mV=1;
let carSize=1
let Scene3time1 = Date.now()//for car animation
let Scene3time2 //for car animation
let Scene3time3 //for car animation
let Scene3time4 //for car animation
let Scene3time5 //for car animation
c3.setTransform(scH, skH, skV, scV, mH, mV * 0.01);
let storedTransform = c3.getTransform();
let smokeAnim = requestAnimationFrame(smoke);
let contSmoke2=true
let carOffset=1;
let carSpeedscene3Part2 = 1;
//new speach baloon instance for the static part of the car with the speach ballon
const bubbleRight3 = new Bubble(
(canvasThree.width*.6),
(canvasThree.height*.6),
100,
150,
'rgba(255,255,255,0.3)'
  );
let smokeArr=[];
let smokeOffsetX=1
let smokeOffsetY=1
//create smoke particles
for(let i=0;i<50;i++){
  const sm = new Smoke(10,c3)
  smokeArr.push(sm)
}
//load the car + smoke + bubble
async function startScene3(){
if(car.complete){
c3.drawImage(car,(canvasThree.width*.1)+mH,(canvasThree.height*.8)+mV,(canvasThree.width/5)*carSize,(canvasThree.height/5)*carSize)
c3.fillStyle = "rgba(255,255,255,0.3)";
c3.fill();
c3.save()
bubbleRight2.handleTextAndBubble(c3, "טוב, תסעי לאט ובזהירות ,אל תעשי לי התקף לב בבקשה",false,'red');
await delay(3000).then(()=>{
smoke()
carOne()
})
}
}


//Functions

function carOne(){
if(Date.now() - Scene3time1>1000){
mH+=.4
mV+=0
carSize=1
if(canvasThree.width/2>((canvasThree.width*.1)+mH)){
c3.clearRect(0,0,canvasThree.width,canvasThree.height)
c3.drawImage(car,(canvasThree.width*.1)+mH,(canvasThree.height*.8),(canvasThree.width/5)*carSize,(canvasThree.height/5)*carSize)
requestAnimationFrame(carOne)
cancelAnimationFrame(smokeAnim);
}else{
  Scene3time2=Date.now();
  scene3Part2(Scene3time2)
}
}
}


function smoke() {
c3.clearRect(0, canvasThree.height * 0.85,canvasThree.width * 0.12, canvasThree.height);
smokeArr.forEach((s) => {
s.efects(canvasThree.width*.05,canvasThree.height*0.9).circle();
});
smokeAnim = requestAnimationFrame(smoke);
}

async function smoke2() {
// c3.clearRect(0, canvasThree.height * 0.85,canvasThree.width * 0.2, canvasThree.height);
c3.clearRect(0,0,canvasThree.width * 0.3, canvasThree.height);
smokeArr.forEach((s) => {
s.efects2(((canvasThree.width * 0.1)+carOffset*0.01), canvasThree.height * 0.9).circle();
});
if(contSmoke2){
requestAnimationFrame(smoke2); 
}
}


async function scene3Part2(Scene3time2){
c3.clearRect(0,0,canvasThree.width*carOffset,canvasThree.height)
c3.drawImage(car,(canvasThree.width*.1)+mH,(canvasThree.height*.8),(canvasThree.width/5)*carSize,(canvasThree.height/5)*carSize)
 smoke2();
 // c3.fillStyle = "rgba(255,255,255,0.3)";
 // c3.fill();
 bubbleRight3.handleTextAndBubble(c3, "אבא תראה, העשן נשאר מאחור", true, "black");
 c3.restore()
if (Date.now() - Scene3time2 < 2000) {
await delay(4000);
Scene3time3 = Date.now();
scene3Part3(Scene3time3);
}
}

async function scene3Part3(Scene3time3){
c3.clearRect(0,0,canvasThree.width,canvasThree.height)
c3.drawImage(car,(canvasThree.width*.1)+mH,(canvasThree.height*.8),(canvasThree.width/5)*carSize,(canvasThree.height/5)*carSize)
bubbleRight3.handleTextAndBubble(c3, "בבקשה,לא להרוס את האוטו", false, "red");
if (Date.now() - Scene3time3 < 2000) {
await delay(4000);
Scene3time4 = Date.now();
scene3Part4(Scene3time4);
}
}
async function scene3Part4(Scene3time4){
c3.clearRect(0, 0, canvasThree.width, canvasThree.height);
c3.drawImage(car,(canvasThree.width*.1)+mH,(canvasThree.height*.8),(canvasThree.width/5)*carSize,(canvasThree.height/5)*carSize)
c4.fillStyle = "rgba(255,255,255,1)";
c4.fill();
bubbleRight3.handleTextAndBubble(c3, "היי, לאיזה כיוון את נוהגת", false, "red",''); 
if (Date.now() - Scene3time4 < 2000) {
Scene3time5 = Date.now();
await delay(3000);
scene3Part5(Scene3time5)
} 
}

async function scene3Part5(Scene3time5){
c3.clearRect(0, 0, canvasThree.width, canvasThree.height);
c3.drawImage(car,(canvasThree.width*.1)+mH,(canvasThree.height*.8),(canvasThree.width/5)*carSize,(canvasThree.height/5)*carSize)
bubbleRight3.handleTextAndBubble(c3,"בוא אלמד אותך דרך קיצור",true, "black",'rgba(255,255,255,0.5)');
if(Date.now() - Scene3time5<4600){
await delay(3000);
carTwo();
}
}

async function carTwo(){
contSmoke2=false
smoke2()
carSpeedscene3Part2+=0.5
carSize=1
c3.clearRect(-300,0,canvasThree.width*1.5,canvasThree.height*1.5)
c3.drawImage(car,(canvasThree.width*.1)+mH,(canvasThree.height*.8),(canvasThree.width/5)*carSize,(canvasThree.height/5)*carSize)
c3.translate(carSpeedscene3Part2,mV*0.01)
if(carSpeedscene3Part2<innerWidth/7){
  smoke()
  requestAnimationFrame(carTwo);
}else{
  cancelAnimationFrame(smokeAnim);
  sceneThree.classList.add('none')
  sceneFour.classList.remove('none')
car.addEventListener('load',()=>{
  c4.drawImage(car,(canvasFour.width*.2),(canvasFour.height*.8),(canvasFour.width/5)*carSize,(canvasFour.height/5)*carSize)
})
await delay(1000).then(()=>{
  startScene4()
  sceneFourTime = Date.now();
})
}
}
//scene Four
let carHeightCounter=0
//instance speach bublle
const bubbleRight4 = new Bubble(
  canvasFour.width * 0.3,
  canvasThree.height * 0.6,
  100,
  150
  );
  let mapSc4 = new Map()
  mapSc4.set('bubbleOneSc4',true);
  mapSc4.set('bubbleTwoSc4',true);
  mapSc4.set('bubbleThreeSc4',true);
  mapSc4.set('bubbleFourSc4',true);
  mapSc4.set('bubbleFiveSc4',true);
  mapSc4.set('bubbleSixSc4',true);
  mapSc4.set('bubbleSevenSc4',true);
  mapSc4.set('bubbleEightSc4',true);
  mapSc4.set('bubbleNineSc4',true);
  mapSc4.set('bubbleTenSc4',true);
  mapSc4.set('bubbleElevenSc4',true);
  mapSc4.set('bubbleTwelfeSc4',true);
  
  function hadleOrderSpeach(speak){
    for(let key of mapSc4.keys()){
      if(key !== speak){
        mapSc4.set(key, false);
      }else{
        break;
      }
    }
  }

  async function startScene4(){
    carHeightCounter++
    c4.clearRect(-200,-200,canvasFour.width*2,canvasFour.height*1.5);
    c4.drawImage(car,(canvasFour.width*.2),(canvasFour.height*.8),(canvasFour.width/5)*carSize,(canvasFour.height/5)*carSize)
    c4.fillStyle = "rgba(255,255,255,1)";
    c4.fill();
    //bubble speach
    if( Date.now() - sceneFourTime > 1000&&mapSc4.get('bubbleOneSc4')){
      bubbleRight4.handleTextAndBubble(c4,"איזה פחד , בפעם הבאה את נוסעת רק עם אמא",true, "red");
    }
    if (Date.now() - sceneFourTime > 4000&&mapSc4.get('bubbleTwoSc4')) {
 hadleOrderSpeach("bubbleTwoSc4");
bubbleRight4.handleTextAndBubble(c4,"אבא תראה כמה חניות והנה העמוד שמחליף צבעים",false,"green");
}
if( Date.now() - sceneFourTime > 8500&&mapSc4.get('bubbleThreeSc4')){
hadleOrderSpeach("bubbleThreeSc4");
bubbleRight4.handleTextAndBubble(c4,"קוראים לזה רמזור והוא בצבע אדום",true, "red");
}
if (Date.now() - sceneFourTime > 10500&&mapSc4.get('bubbleFourSc4')) {
  hadleOrderSpeach("bubbleFourSc4");
  bubbleRight4.handleTextAndBubble(c4,"!!! תעצרי",true, "red");
}
//add stand traffic light
if (Date.now() - sceneFourTime > 12500&&mapSc4.get('bubbleFiveSc4')) {
  hadleOrderSpeach("bubbleFiveSc4");
  bubbleRight4.handleTextAndBubble(c4,"למה אתה כועס , אתה יכול ללחוץ על הברקס",false, "green");
  sceneFour.classList.remove("add-moving-car-animation");
  c4.drawImage(trafficLight,(canvasFour.width/2),(canvasFour.height*.64),(canvasFour.width/7)*carSize,(canvasFour.height/5)*carSize)

}
if (Date.now() - sceneFourTime > 15000&&mapSc4.get('bubbleSixSc4')) {
  hadleOrderSpeach("bubbleSixSc4");
   c4.drawImage(trafficLight,(canvasFour.width/2),(canvasFour.height*.64),(canvasFour.width/7)*carSize,(canvasFour.height/5)*carSize)
  bubbleRight4.handleTextAndBubble(c4,"באוטו הזה הזה יש רק ברקס אחד והוא בצד של הנהג",true, "red");
}
if (Date.now() - sceneFourTime > 18000&&mapSc4.get('bubbleSevenSc4')) {
  hadleOrderSpeach("bubbleSevenSc4");
  c4.drawImage(trafficLight,(canvasFour.width/2),(canvasFour.height*.64),(canvasFour.width/7)*carSize,(canvasFour.height/5)*carSize)
  bubbleRight4.handleTextAndBubble(c4,"אולי נשתול בירוחם כמה רמזורים שגם לנו יהיו רמזורים",false, "green");
}
if (Date.now() - sceneFourTime > 21000&&mapSc4.get('bubbleEightSc4')) {
  hadleOrderSpeach("bubbleEightSc4");
  c4.drawImage(trafficLight,(canvasFour.width/2),(canvasFour.height*.64),(canvasFour.width/7)*carSize,(canvasFour.height/5)*carSize)
   bubbleRight4.handleTextAndBubble(c4,"רעיון טוב",true, "red");
}
//twisted traffic light
if (Date.now() - sceneFourTime > 24000&&mapSc4.get('bubbleNineSc4')) {
  hadleOrderSpeach("bubbleNineSc4");
  c4.drawImage(trafficLigthTwist,(canvasFour.width*0.15),(canvasFour.height*.81),(canvasFour.width/7)*carSize,(canvasFour.height/5)*carSize)
  createSparks(canvasFour.width * 0.14, canvasFour.height * 0.97, c4);
   bubbleRight4.handleTextAndBubble(c4,"אבא , יש לך רעיון איפה נשתול בירוחם את הרמזור הראשון",true, "red");
   sceneFour.classList.add("add-moving-car-animation");
}
if (Date.now() - sceneFourTime > 27000&&mapSc4.get('bubbleTenSc4')) {
  hadleOrderSpeach("bubbleTenSc4");
  c4.drawImage(trafficLigthTwist,(canvasFour.width*0.15),(canvasFour.height*.81),(canvasFour.width/7)*carSize,(canvasFour.height/5)*carSize)
  createSparks(canvasFour.width * 0.14, canvasFour.height * 0.97, c4);
   bubbleRight4.handleTextAndBubble(c4,"כן, יש לי מקום ממש מצויין",false, "green");
}
if (Date.now() - sceneFourTime > 30000&&mapSc4.get('bubbleElevenSc4')) {
  hadleOrderSpeach("bubbleElevenSc4");
  c4.drawImage(trafficLigthTwist,(canvasFour.width*0.15),(canvasFour.height*.81),(canvasFour.width/7)*carSize,(canvasFour.height/5)*carSize)
  createSparks(canvasFour.width * 0.14, canvasFour.height * 0.97, c4);
   bubbleRight4.handleTextAndBubble(c4,"אבא, למה יש ניידת משטרה מאחורנו",true, "red");
}
if (Date.now() - sceneFourTime > 33000&&mapSc4.get('bubbleTwelfeSc4')) {
  hadleOrderSpeach("bubbleTwelfeSc4");
  c4.drawImage(trafficLigthTwist,(canvasFour.width*0.15),(canvasFour.height*.81),(canvasFour.width/7)*carSize,(canvasFour.height/5)*carSize)
  createSparks(canvasFour.width * 0.14, canvasFour.height * 0.97, c4);
   bubbleRight4.handleTextAndBubble(c4,"אוי ,זה בטח בגלל ששכחנו לשים שלט של נהג חדש",false, "green");
}
//car transform
if (sceneFour.classList.contains("add-moving-car-animation")) {
if(carHeightCounter<300){
c4.transform(1,0,0,1,0,-0.1)
}
if(carHeightCounter>300){
c4.transform(1,0,0,1,0,0.1)
}
if(carHeightCounter>600){
carHeightCounter=1
}
}else{
 c4.transform(1, 0, 0, 1, 0,0); 
}
  requestAnimationFrame(startScene4)
}

class Sparks{
constructor(x,y,r,ctx,color){
this.x=x;
this.y=y;
this.r=r;
this.ctx=ctx;
this.color=color;
}
spark(){
  // this.ctx.shadowColor = "hsl(12 0% 0%)";
  // this.ctx.shadowBlur = 10;
this.ctx.beginPath()
 this.ctx.fillStyle=`hsl(${this.color},100%,50%)`;
this.ctx.arc(this.x,this.y,this.r,5,Math.PI*2)
this.ctx.fill()
return this
}
}
let sparksArr=[]
let sparkOffset=0.1
function createSparks(x,y,ctx){
for(let i = 1;i<150;i++){
sparkOffset+=0.1
const r= Math.random()*18
let color = Math.random()*70
let spark = new Sparks(x+(i*0.05), y+(-i*0.08), r, ctx,color)
spark.spark();
sparksArr.push(spark)
}
}
// createSparks(350,50,50,c4)
function delay(ms){
  return new Promise((res)=>{setTimeout(res,ms)})
}
