import { useRef, useEffect } from "react";
const Galaxy = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef === null) {
            return;
        }
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        const mouse = {
            x: null,
            y: null,
            halo: 100,
        };

        canvas.addEventListener("mousemove", function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        const positionOffset = 0;
        let blackHole;
        let blackHoleHalo;
        let blackHoleGlow;
        let starArray = [];
        let starBackgroundArray = [];
        let planetBackgroundArray = [];

        class DrawsCircle {
            draw() {
                ctx.fillStyle = `${this.color}`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            getRadian(x, y) {
                this.deltaX = x - blackHole.x;
                this.deltaY = y - blackHole.y;
                return Math.atan2(this.deltaX, this.deltaY);
            }

            mouseHasCollided(a, b, x, y, r) {
                var dist_points =
                    (a - (x + positionOffset)) * (a - (x + positionOffset)) +
                    (b - y) * (b - y);
                r *= r;
                if (dist_points < r) {
                    return true;
                }
                return false;
            }

            getHoverColor() {
                const colors = [
                    "rgba(233,44, 163, 1)",
                    "rgba(250, 211, 92, 1)",
                    "rgba(169, 7, 222, 1)",
                    "rgba(64, 12, 192, 1)",
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }
        }

        class Star extends DrawsCircle {
            constructor(x, y, size, color, speed) {
                super();
                this.x = x;
                this.y = y;
                this.originSize = size;
                this.size = size;
                this.originColor = color;
                this.color = color;
                this.radians = this.getRadian(x, y);
                this.orbitRadius = Math.abs(this.deltaX);
                this.speed = speed;
                this.isInMouse = false;
            }
            update() {
                this.radians +=
                    (50 / Math.abs(this.deltaX)) *
                    (Math.PI / (500 * this.speed));
                this.x =
                    blackHole.x +
                    Math.abs(this.deltaX) * Math.cos(this.radians);
                this.y =
                    blackHole.y +
                    Math.abs(this.deltaX) * Math.sin(this.radians);
                let mouseHasColided = this.mouseHasCollided(
                    mouse.x,
                    mouse.y,
                    this.x,
                    this.y,
                    mouse.halo
                );
                if (mouseHasColided) {
                    if (!this.isInMouse) {
                        this.isInMouse = true;
                        this.color = this.getHoverColor();
                        this.size *= 3;
                    }
                } else {
                    this.isInMouse = false;
                    this.color = this.originColor;
                    this.size = this.originSize;
                }
            }
        }

        class BlackHoleGlow {
            constructor() {
                this.x = canvas.width / 2 + positionOffset;
                this.y = canvas.height / 2 + positionOffset;
                this.size = 1000;
                this.color = "#FFFFFF";
            }

            draw() {
                let gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    100,
                    this.x,
                    this.y,
                    1000
                );
                gradient.addColorStop(0, "rgba(37, 0, 96, 0.1");
                gradient.addColorStop(0.5, "rgba(233, 44, 163, 0.05");
                gradient.addColorStop(0.9, "rgba(0,0,0,0)");
                // gradient.addColorStop(1, "black");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class BlackHoleHalo {
            constructor() {
                this.x = canvas.width / 2 + positionOffset;
                this.y = canvas.height / 2;
                this.size = 120;
                this.color = "#FFFFFF";
            }

            draw() {
                let gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    40,
                    this.x,
                    this.y,
                    120
                );
                gradient.addColorStop(0, "white");
                gradient.addColorStop(0.15, "white");
                gradient.addColorStop(0.25, "#FE7221");
                gradient.addColorStop(0.3, "#F22AB1");
                gradient.addColorStop(0.4, "#BE00CD");
                gradient.addColorStop(0.6, "#4908C5");
                gradient.addColorStop(1, "rgba(0,0,0,0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class BlackHole extends DrawsCircle {
            constructor() {
                super();
                this.x = canvas.width / 2 + positionOffset;
                this.y = canvas.height / 2;
                this.size = 48;
                this.color = "#000000";
            }

            draw() {
                let gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    48
                );
                gradient.addColorStop(0, "black");
                gradient.addColorStop(0.7, "black");
                gradient.addColorStop(1, "#250060");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function generateStarField() {
            const starCount = 100;
            for (let i = 0; starCount > i; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let speed = Math.random() + 0.5;
                starArray.push(
                    new Star(
                        x,
                        y,
                        Math.ceil(Math.random() * 2),
                        `rgba(255,255,255, ${Math.random()})`,
                        speed
                    )
                );
                starArray[i].draw();
            }
        }

        function generateStarBackground() {
            const starCount = 500;
            for (let i = 0; starCount > i; i++) {
                let x = Math.random() * (canvas.width + 500);
                let y = Math.random() * (canvas.height + 500);
                let speed = 1;
                let redShift = Math.random() * 80;
                let opacity = Math.random() * 0.8;
                starBackgroundArray.push(
                    new Star(
                        x,
                        y,
                        Math.ceil(Math.random() * 2),
                        `rgba(${42 + redShift}, 8, 224, ${opacity})`,
                        speed
                    )
                );
                starBackgroundArray[i].draw();
            }
        }

        function generatePlanetBackground() {
            const planetCount = 10;
            for (let i = 0; planetCount > i; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let speed = 1;
                planetBackgroundArray.push(
                    new Star(
                        x,
                        y,
                        Math.ceil(Math.random() * 15),
                        `rgba(255, 181, 126, ${Math.random() * 0.3})`,
                        speed
                    )
                );
                planetBackgroundArray[i].draw();
            }
        }

        function init() {
            // set up initial items on canvas, animate after to begin frames
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            blackHoleGlow = new BlackHoleGlow();
            blackHoleGlow.draw();
            blackHoleHalo = new BlackHoleHalo();
            blackHoleHalo.draw();
            blackHole = new BlackHole();
            blackHole.draw();
            generateStarBackground();
            generatePlanetBackground();
            generateStarField();
            // Add a white circle to the center of the canvas
            // Add some particles around the page (static)
            // work how how to move them rotating around center point

            animate();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; starBackgroundArray.length > i; i++) {
                starBackgroundArray[i].draw();
            }
            for (let i = 0; planetBackgroundArray.length > i; i++) {
                planetBackgroundArray[i].draw();
            }
            blackHoleGlow.draw();
            blackHoleHalo.draw();
            blackHole.draw();
            for (let i = 0; starArray.length > i; i++) {
                starArray[i].update();
                starArray[i].draw();
            }
            requestAnimationFrame(animate);
        }
        init();
    }, [canvasRef]);

    return (
        <div className="bg-black h-screen w-screen overflow-none">
            <canvas
                className="hidden lg:block absolute"
                ref={canvasRef}
            ></canvas>
        </div>
    );
};

export default Galaxy;
