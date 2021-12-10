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

        // Project settings
        let starCount = 150;
        let backgroundStarCount = 500;

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
                return Math.atan2(this.deltaY, this.deltaX);
            }

            mouseHasCollided(a, b, x, y, r) {
                var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
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

        class Rotates extends DrawsCircle {
            update() {
                if (this.isStatic) {
                    return;
                }
                this.radians +=
                    (50 / Math.abs(this.orbitRadius)) *
                    (Math.PI / (700 * this.speed));
                this.x =
                    blackHole.x + this.orbitRadius * Math.cos(this.radians);
                this.y =
                    blackHole.y + this.orbitRadius * Math.sin(this.radians);

                let orbitalDecay = (1 / this.orbitRadius) * 5;
                this.orbitRadius -= orbitalDecay;

                if (this.orbitRadius < blackHole.size) {
                    this.color = `rgba(255,255,255, ${
                        1 - blackHole.size / 3 / this.orbitRadius
                    })`;
                } else {
                    this.color = `hsla(293, 100%, ${
                        (300 / this.orbitRadius) * 70 + 30
                    }%, 1)`;
                }

                if (this.orbitRadius < blackHole.size / 3) {
                    starArray.push(generateStar());
                    this.deleteSelf();
                }
            }

            deleteSelf() {
                let index = starArray.indexOf(this);
                starArray.splice(index, 1);
            }
        }

        class Star extends Rotates {
            constructor(x, y, size, color, speed, isStatic = false) {
                super();
                this.x = x;
                this.y = y;
                this.originSize = size;
                this.size = size;
                this.isStatic = isStatic;
                // Color should be a function of distance from black hole
                this.originColor = color;
                this.color = color;
                this.radians = this.getRadian(x, y);
                // Orbit radius should instead be hypotenuse (enough data is provided for this)
                this.orbitRadius = Math.max(
                    Math.abs(this.deltaY),
                    Math.abs(this.deltaX)
                );
                this.speed = speed;
                this.isInMouse = false;
            }

            checkCollisions() {
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
                        this.size *= 2;
                    }
                } else {
                    this.isInMouse = false;
                    this.size = this.originSize;
                }
            }
        }

        class BlackHoleGlow {
            constructor() {
                this.x = canvas.width / 2;
                this.y = canvas.height / 2;
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
                this.x = canvas.width / 2;
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
                this.x = canvas.width / 2;
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

        function generateStar() {
            let { x, y } = randomCoordinates();
            let speed = Math.random() + 0.2;
            return new Star(
                x,
                y,
                Math.ceil(Math.random() * 2),
                `hsla(261, 100%, 52%, 1)`,
                speed,
                false
            );
        }

        function generateStarField() {
            for (let i = 0; starCount > i; i++) {
                starArray.push(generateStar());
                starArray[i].draw();
            }
        }

        function generateStarBackground() {
            for (let i = 0; backgroundStarCount > i; i++) {
                let { x, y } = randomCoordinates();
                let speed = 1;
                let redShift = Math.random() * 80;
                let opacity = Math.random() * 0.8;
                starBackgroundArray.push(
                    new Star(
                        x,
                        y,
                        Math.ceil(Math.random() * 1),
                        `rgba(${50 + redShift}, 8, 255, ${opacity})`,
                        speed,
                        true
                    )
                );
                starBackgroundArray[i].draw();
            }
        }

        function generatePlanetBackground() {
            const planetCount = 10;
            for (let i = 0; planetCount > i; i++) {
                let { x, y } = randomCoordinates();
                let speed = 1;
                planetBackgroundArray.push(
                    new Star(
                        x,
                        y,
                        Math.ceil(Math.random() * 15),
                        `rgba(255, 181, 126, ${Math.random() * 0.3})`,
                        speed,
                        false
                    )
                );
                planetBackgroundArray[i].draw();
            }
        }

        function generateBlackHole() {
            blackHoleGlow = new BlackHoleGlow();
            blackHoleGlow.draw();
            blackHoleHalo = new BlackHoleHalo();
            blackHoleHalo.draw();
            blackHole = new BlackHole();
            blackHole.draw();
        }

        function randomCoordinates() {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            return {
                x,
                y,
            };
        }

        function init() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            generateBlackHole();
            generateStarBackground();
            generatePlanetBackground();
            generateStarField();
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
                starArray[i].checkCollisions();
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
