// const canvasTow = document.querySelector(".scene-two .canvas-two");
// const c2 =  canvasTow.getContext('2d')
// //general scope varibles
// canvasTow.width = innerWidth;
// canvasTow.height = innerHeight;
// let speakIntervalAnimation = 15000; 
// let mouseOpen = 4; 
// // armLeftY = 100;
// // armLeftX = 18;
// let speakLoudlyTime=1000*30
// // create instance of man and bubble speach
// const m2 = new Man(900, canvasTow.height*.7, 70, 55, c2);
// //the m3 is for the figure round part
// const m3 = new Man(840, canvasTow.height * 0.7, 70, 55, c2);
// //this varible is for changing the path pf tracking
// let trackY =m2.y
// let trackX =m2.x
// const now = new Date().getTime();
// c2.fillStyle='black'
// c2.save()
// // Classes
// //Buble speach
// class Bubble {
// constructor(x, y, ry, rx) {
//   this.cx = x;
//   this.cy = y;
//   this.ry = ry;
//   this.rx = rx;
// }
//   handleTextAndBubble(ctx,text) {
//   //text parameter
//   this.originalText = text;
//   this.modifiedText = "";
//   //convert the string into array
//   const arr = this.originalText.split(" ");
//   const lengthOriginalArray = arr.length;
//   // cut the array into groups of 5 word each
//   for (let i = 0; i < Math.ceil(lengthOriginalArray / 5); i++) {
// // text offset is the hight of the words
//   let textOffset = 0;
//   this.modifiedText = arr.splice(0, 5).join(" ");
//   textOffset = i * 35;
//   this.ellipseRight(textOffset,ctx);
//   }
// }
//   ellipseRight(textOffset,ctx) {
//   let fontSize = 50;
//   ctx.beginPath();
//   //bubble speach
//   ctx.fillStyle='rgba(255,255,255,0.1)'
//   ctx.ellipse(this.cx,this.cy,this.ry,this.rx,
//   Math.PI / 2,
//   0,
//   (Math.PI / 180) * 350
//   );
//   ctx.fill()
//   ctx.restore();
//   //speach conos
//   ctx.quadraticCurveTo(this.cx,this.cy+80, this.cx + 50, this.cy + this.ry + 50);
//   ctx.quadraticCurveTo(this.cx, this.cy+100, this.cx, this.cy + this.ry);
//   //adjust text to ballon
// do {
// fontSize--;
// ctx.fillStyle='crimson'
// ctx.font = `${fontSize}px Comic Sans MS`;
// if (ctx.measureText(this.modifiedText).width < this.rx * 2) {
//   ctx.font = `${fontSize - 3 }px Comic Sans MS`;
// ctx.fillText(`${this.modifiedText}`,this.cx -this.rx+
// (this.rx * 2 - ctx.measureText(this.modifiedText).width) / 2,
//  this.cy - this.ry / 5 + textOffset
// );
// }
// } while (this.fitMeasureText(this.modifiedText, fontSize,ctx) > this.rx * 2);
// ctx.stroke();
// }
// fitMeasureText(text, fontSize,ctx) {
//   ctx.fillStyle = "black";
//     ctx.font = `${fontSize}px Comic Sans MS`;
//     return ctx.measureText(text).width;
// }
// }
// //end of Bubble Speach
// c2.fillStyle='black'
// c2.save()
// c2.fill()
// //functions
// //figure is speaking
// function speak(){
//   phone=true
//   c2.clearRect(0,0,canvasTow.width,canvasTow.height);
//   c2.fillStyle='black'
//   if (armLeftY > 30) {
//     armLeftY--;
//     if (armLeftX > 0) {
//       armLeftX--;
//     }
//   c2.clearRect(0, 0, canvasTow.width, canvasTow.height);
//     m2.drawMan(mouseOpen > 4 ? (mouseOpen = 1) : mouseOpen++  , armLeftX, armLeftY);
//     c2.save()
//   }else{
//      c2.clearRect(0, 0, canvasTow.width, canvasTow.height);
//     m2.drawMan(mouseOpen > 4 ? (mouseOpen = 1) : mouseOpen++,28,15);
//   }
// const bubbleRight = new Bubble(800,400,100,150);
// bubbleRight.handleTextAndBubble(c2, "סליחה,אבל אני לא למה הביטוח לנהג צעיר כל כך יקר");
// if(trackY>490){
//   c2.translate(-2,0.5);
// }
// trackY = trackY- 0.5 
// if(trackY<490&&trackY>480){
// c2.translate(-1,2);
// }
// if(new Date().getTime() > now+4400){
//   setTimeout(()=>{
//   c2.clearRect(0, 0, canvasTow.width, canvasTow.height);
//   //clearInterval(speakInterval)
//   //next part of the animation
//   trackX=m3.x
//   trackY=m3.y
//   roundFigure()
//   },1000)
// }
// }
// //move the figure little
// function roundFigure(){
//   c2.clearRect(0, 0, canvasTow.width, canvasTow.height);
//   phone=false;
//   m3.drawMan(3);
//   c2.clearRect(0, 0, canvasTow.width, canvasTow.height);
//   m3.drawMan(3);   
//   c2.fillStyle='black'
//   trackX=trackX-1
//   trackY=trackY-1
//   c2.translate(-1,-0.2,0.2,0,0,0);
//   if(trackX<780&&trackY<450){
//   c2.translate(1,-0.2,0.2,0,0,0);
//   }
//   mouseOpen=7
//  setTimeout(speakLoudly,1000)
// }
// function speakLoudly(){
// (mouseOpen < 10) ? mouseOpen++ : (mouseOpen = 7); 
//   if(armLeftX > -16){
//    armLeftX--
//   }
//   if(armLeftY > 40){
//     armLeftY--
//   }
//  c2.clearRect(0, 0, canvasTow.width, canvasTow.height);  
// m3.drawMan(mouseOpen, armLeftX, armLeftY,3,6,true);
// const bubbleRight = new Bubble(800, 400, 100, 150);
// bubbleRight.handleTextAndBubble(c2, "חמודה של אבא, אולי תעשי עוד כמה טסטים,אין מה למהר ");
// }
// // window events
// //let speakInterval = setInterval(speak,50)
