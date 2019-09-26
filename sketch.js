var speed = 3    // 0 > speed <= 2
var opacity = 255
var old_background, new_background, percentage = 0
var x, y, radius
var n_of_petals = 0, n_of_circles = 49
var direction_x = 0, direction_y = 0
var color_list
var draw_function = false
var valorAleatori = 0
var distorcio = 3
var provabilitat = 40
function setup () {
  createCanvas (400, 400)
  background (255, 255, 255)
  noStroke ()
  textAlign (CENTER)
  old_background = color (0, 0, 0)
  new_background = color (246, 234, 208)
  color_list = [color (192, 100, 87, 70), color (222, 124, 63, 70), color (253, 193, 81, 70), color (234, 171, 166, 70), color (245, 167, 101, 70), color (225, 221, 111, 70), color (245, 124, 71, 70), color (97, 103, 163, 70), color (244, 191, 175, 70), color (200, 135, 95, 70), color (254, 211, 107, 70), color (18, 149, 117, 70), color (114, 185, 151, 70), color (226, 148, 86, 70), color (102, 114, 154, 70), color (254, 217, 77, 70), color (232, 127, 82, 70), color (163, 201, 114, 70), color (228, 139, 123, 70), color (46, 62, 114, 70), color (31, 55, 117, 70), color (187, 38, 40, 70), color (189, 89, 66, 70), color (237, 53, 61, 70), color (254, 200, 50, 70), color (105, 117, 79, 70), color (3, 135, 96, 70), color (254, 194, 44, 70), color (248, 173, 58, 70), color (242, 104, 91, 70), color (254, 223, 133, 70), color (200, 97, 54, 70)]
}

function mouseClicked () {
  draw_function = false
  frameRate (30)
  pre_intro ()
}
function deviceShaken () {
  draw_function = false
  frameRate (30)
  pre_intro ()
}
function pre_intro () {
  background (0, 0, 0)
  fill (255, 255, 255, opacity)
  textSize (30)
  textFont ("Courier New")
  text ("Blooming Flower", width / 2, height / 3)
  textSize (20)
  text ("Oriol Serrabassa", width / 2, height / 1.5)
  text ("Andreu Bermúdez", width / 2, height / 1.5 + 20)
  setTimeout (intro, 1000 / speed)
}

function intro () {
  background (0, 0, 0)
  fill (255, 255, 255, opacity)
  textSize (30)
  textFont ("Courier New")
  textAlign (CENTER);
  text ("Blooming Flower", width / 2, height / 3)
  textSize (20)
  text ("Oriol Serrabassa", width / 2, height / 1.5)
  text ("Andreu Bermúdez", width / 2, height / 1.5 + 20)
  --opacity
  if (opacity <= 0) {
    opacity = 255
    setTimeout (paint_background, 500 / speed)
  }
  else setTimeout (intro, 10 / speed)
}

function paint_background () {
  background (lerpColor (old_background, new_background, percentage))
  percentage += 0.1
  if (percentage >= 1) {
    percentage = 0
    setTimeout (activate_draw, 500 / speed)
  }
  else setTimeout (paint_background, 50 / speed)
}

function activate_draw () {
  frameRate (int (30 * speed))
  draw_function = true
}

function draw () {
  if (draw_function) {
    if (n_of_circles == 49) {
      x = 200
      y = 200
      let rng = int (random (1, 4))
      if (rng == 1 || rng == 2) radius = random (30, 45)
      else radius = random (45, 70)
      fill (color_list [int (random (0, color_list.length))])
      direction_x = random (-5, 5)
      direction_y = random (-5, 5)
      n_of_circles = 0
      n_of_petals++
    }
    if (n_of_petals < 50) {
      if (n_of_circles < 50) {
        valorAleatori = int(random(0,provabilitat))
        if (valorAleatori == 1) {
          let rng = int (random (0, 2))
          if (rng == 1) {
            direction_x += random (-distorcio, distorcio)
            direction_y += random (-distorcio, distorcio)
          }
        }
        
        radius += random (-1, 1)
        x += direction_x + random (-3, 3)
        y += direction_y + random (-3,3)
        ellipse (x, y, radius)
        n_of_circles++
      }
    }
  }
}
