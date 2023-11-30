class Ball {

  constructor(x, y, dx, dy, radius, color) {
    this.x = x;   // left position of the ball
    this.y = y;   // top position of the ball
    this.dx = dx;   // velocity along the x-axis (left)
    this.dy = dy;   // velocity along the y-axis (top)
    this.radius = radius;   // radius of the ball 
    this.color = color;     // color of the ball
  }
  createBall() {
    const main_container = document.getElementById("main_container");
    const ball = document.createElement("div");
    ball.setAttribute("id", "balls");

    //setting all the styling properties of a ball
    ball.style.left = this.x + "px";
    ball.style.top = this.y + "px";
    ball.style.backgroundColor = this.color;
    ball.style.width = BALL_WIDTH+"px";
    ball.style.height = BALL_HEIGHT+"px";
    ball.style.borderRadius = BORDER_RADIUS+"px";
    main_container.appendChild(ball);
  }
  update(balls_array) {
    // Check for collisions with other balls
    for (let i = 0; i < balls_array.length; i++) {
      // Don't check for collision with self
      if (this === balls_array[i]) continue;
      // If the distance between the balls is less than their combined radius, they are colliding
      if (distance(this.x, this.y, balls_array[i].x, balls_array[i].y) - this.radius * 2 < 0) {
        collision(this, balls_array[i]);
      }
    }

    let boundrayLeft = 0;
    let boundrayTop = 0;
    let boundrayWidth = VIEWPORT_WIDTH;
    let boundaryHeight = VIEWPORT_HEIGHT;

    // Check for collisions with the edges of the parent container

    // if ball is beyond horizontal range of the parent div
    if (this.x < boundrayLeft || this.x + BALL_WIDTH > boundrayWidth) {
      this.dx = -this.dx;
    }

    // if ball is beyond vertical range of the parent div
    if (this.y < boundrayTop || this.y + BALL_HEIGHT > boundaryHeight) {
      this.dy = -this.dy;
    }

    // Update positions
    this.x += this.dx;
    this.y += this.dy;
  }
}
