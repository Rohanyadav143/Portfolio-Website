const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);


let stars = [];
const STAR_COUNT = 120;
let mouse = { x: null, y: null };

for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        let dist = Math.hypot(mouse.x - star.x, mouse.y - star.y);

        if (dist < 100) {
            star.x -= (mouse.x - star.x) * 0.05;
            star.y -= (mouse.y - star.y) * 0.05;
        }

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
