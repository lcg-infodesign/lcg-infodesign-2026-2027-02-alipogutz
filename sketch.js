let numeroglifi = 100; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop(); 
}

function draw() {
  
  background(220, 65, 12);

  let numerocolonne = ceil(sqrt(numeroglifi));
  let numerorighe = ceil(numeroglifi / numerocolonne);
  
  let dimcolonna = width / numerocolonne;
  let dimriga = height / numerorighe;

  let dimMaxCerchio = min(dimcolonna, dimriga) * 0.85; 

  let xcorrente = 0;
  let ycorrente = 0;

  for (let g = 0; g < numeroglifi; g++) {
    mioglifo(xcorrente + dimcolonna / 2, ycorrente + dimriga / 2, dimMaxCerchio);
    
    xcorrente = xcorrente + dimcolonna;

    if (xcorrente >= width) {
      xcorrente = 0;
      ycorrente = ycorrente + dimriga; 
    }
  }
}

function mioglifo(_x, _y, _size) {
  push();
  translate(_x, _y);

  let tonalitaBase = random(0, 360);
  let col1 = color(tonalitaBase, random(70, 95), random(75, 100), 90);
  let col2 = color((tonalitaBase + random(120, 240)) % 360, random(70, 95), random(80, 100), 90);
  let colAccent = color((tonalitaBase + 60) % 360, 95, 100);

  let spessore = max(2, _size * 0.035);
  strokeWeight(spessore);
  noFill();

  // Cerchio di contenimento
  stroke(col1);
  circle(0, 0, _size);

  // Struttura assi e punti 
  let angoliAssi = random([0, 45]);
  let tipoAssi = floor(random(3));

  push();
  rotate(angoliAssi);
  stroke(col2);

  if (tipoAssi === 0) {
    // 4 estremità sul bordo
    line(-_size / 2, 0, _size / 2, 0);
    line(0, -_size / 2, 0, _size / 2);

    // Punti posizionati sulle estremità 
    fill(colAccent);
    noStroke();
    circle(_size / 2, 0, _size * 0.09);
    circle(-_size / 2, 0, _size * 0.09);
    circle(0, _size / 2, _size * 0.09);
    circle(0, -_size / 2, _size * 0.09);

  } else if (tipoAssi === 1) {
    // 2 estremità sul bordo
    line(-_size / 2, 0, _size / 2, 0);

    // Punti posizionati sulle estremità
    fill(colAccent);
    noStroke();
    circle(_size / 2, 0, _size * 0.09);
    circle(-_size / 2, 0, _size * 0.09);

  } else {
    // Archi lungo i quadranti
    noFill();
    stroke(col2);
    arc(0, 0, _size * 0.7, _size * 0.7, 0, 90);
    arc(0, 0, _size * 0.7, _size * 0.7, 180, 270);

    // Punti posizionati  sulle estremità
    fill(colAccent);
    noStroke();
    circle(_size * 0.35, 0, _size * 0.08);
    circle(0, _size * 0.35, _size * 0.08);
    circle(-_size * 0.35, 0, _size * 0.08);
    circle(0, -_size * 0.35, _size * 0.08);
  }
  pop();

  // Forma al centro
  fill(col1);
  noStroke();
  let tipoNucleo = floor(random(3));
  if (tipoNucleo === 0) {
    circle(0, 0, _size * 0.25);
  } else if (tipoNucleo === 1) {
    push();
    rotate(45);
    rect(0, 0, _size * 0.2, _size * 0.2);
    pop();
  } else {
    noFill();
    stroke(col1);
    circle(0, 0, _size * 0.35);
    fill(col2);
    noStroke();
    circle(0, 0, _size * 0.12);
  }

  pop();
}
