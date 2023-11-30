let main_container = document.getElementById("main_container");

// Empty array to get append all the balls
let balls_array = [];

// Create instances of the balls
for (let i = 0; i < BALL_COUNT; i++) {
  // Generate random properties for the ball
  let radius = generateRandomNumber(5, 10);
  let x = generateRandomNumber(radius, VIEWPORT_WIDTH - radius);
  let y = generateRandomNumber(radius, VIEWPORT_HEIGHT - radius);
  let dx = generateRandomNumber(-2, 2);
  let dy = generateRandomNumber(-2, 2);
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Create a new ball and add it to the array
  let newBall = new Ball(x, y, dx, dy,radius,color)
  balls_array.push(newBall);
}

function start() {
  // Clear the entire container everytime the frame refreshes
  main_container.innerHTML = "";

    // Create each ball and update its position
  for (let i = 0; i < BALL_COUNT; i++) {
    // console.log(balls_array[i])
    balls_array[i].createBall();
    balls_array[i].update(balls_array);
  }
  // Call the start function again in the next frame
  requestAnimationFrame(start);
}

// Call the start function to start the animation
start();
