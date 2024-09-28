let hr;
let mn;
let sec;
let secondAng;
let minuteAng;
let hourAng;
let amPm;

function setup() {
  createCanvas(740, 600);
  angleMode(DEGREES);
}

function lightMode() {
  background(255);
    // outer boundary
    stroke(0);
    strokeWeight(10);
    ellipse(0, 0, 430, 430, 4);

    // seconds
    strokeWeight(8);
    stroke(255, 255, 0);
    noFill();
    let secondAng = map(sc, 0, 60, 0, 360);
    arc(0, 0, 360, 360, 0, secondAng);
    // seconds line
    push();
    rotate(secondAng);
    strokeWeight(2)
    line(0, 0, 125, 0);
    pop();

    // minutes
    stroke(255, 0, 0);
    strokeWeight(6);
    noFill();
    let minuteAng = map(mn, 0, 60, 0, 360);
    arc(0, 0, 380, 380, 0, minuteAng);
    // minutes line
    push();
    rotate(minuteAng);
    line(0, 0, 150, 0);
    pop();

    // hours
    stroke(0, 0, 255);
    strokeWeight(6);
    noFill();
    hourAng = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 400, 400, 0, hourAng);
    // hours line
    push();
    rotate(hourAng);
    strokeWeight(8);
    line(0, 0, 75, 0);
    pop();

    // point
    stroke(0);
    strokeWeight(12);
    point(0, 0);

    // time text
    push();
    if (hr > 12) {
      amPm = "pm";
      hr = hr - 12;
    } else if (hr < 12) {
      amPm = "am";
    }
    if (hr < 10) {
      hr = "0" + hr;
    } 
    if (mn < 10) {
      mn = "0" + mn;
    } 
    if (sc < 10) {
      sc = "0" + sc;
    }
    strokeWeight(1);
    rotate(90);
    fill(0);
    textFont('monospace');
    textSize(50);
    text(hr + ":" + mn + ":" + sc + " " + amPm, 0 - 150, 0 - 280);
    pop();

}

function darkMode() {
   background(0);
    // outer boundary
    stroke(255);
    strokeWeight(10);
    ellipse(0, 0, 430, 430);

    // seconds
    strokeWeight(8);
    stroke(255, 255, 0);
    noFill();
    let secondAng = map(sc, 0, 59, 0, 360);
    arc(0, 0, 360, 360, 0, secondAng);
    // seconds line
    push();
    rotate(secondAng);
    strokeWeight(2)
    line(0, 0, 125, 0);
    pop();

    // minutes
    stroke(255, 0, 0);
    strokeWeight(6);
    noFill();
    let minuteAng = map(mn, 0, 59, 0, 360);
    arc(0, 0, 380, 380, 0, minuteAng);
    // minutes line
    push();
    rotate(minuteAng);
    line(0, 0, 150, 0);
    pop();

    // hours
    stroke(0, 0, 255);
    strokeWeight(6);
    noFill();
    hourAng = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 400, 400, 0, hourAng);
    // hours line
    push();
    rotate(hourAng);
    strokeWeight(8);
    line(0, 0, 75, 0);
    pop();

    // point
    stroke(255);
    strokeWeight(12);
    point(0, 0);

    // time text
    push();
    if (hr > 12) {
      amPm = "pm";
      hr = hr - 12;
    } else if (hr < 12) {
      amPm = "am";
    }
   if (hr < 10) {
      hr = "0" + hr;
    } 
    if (mn < 10) {
      mn = "0" + mn;
    } 
    if (sc < 10) {
      sc = "0" + sc;
    }
    strokeWeight(1);
    rotate(90);
    fill(255);
    textFont('monospace');
    textSize(50);
    text(hr + ":" + mn + ":" + sc + " " + amPm, 0 - 135, 0 - 280);
    pop();
}
function draw() {
  translate(width / 2, height / 2 + 55);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  if (hr < 6 || hr >= 18) {
  darkMode();
  } else if (hr >= 6 || hr <= 18) {
  lightMode();
  }
}
