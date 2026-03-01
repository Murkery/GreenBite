// ─────────────────────────────────────────────────────────────
// 1. AUTH CHECK ON LOAD — uses Supabase session
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    const { data: { session } } = await supabaseClient.auth.getSession();

    if (session) {
        const meta = session.user.user_metadata;
        const displayName = session.user.is_anonymous
            ? 'Guest'
            : (meta?.username || session.user.email?.split('@')[0] || 'Chef');
        showDashboard(displayName);
    } else {
        document.getElementById('auth-section').style.display = 'block';
        document.getElementById('app-section').style.display = 'none';
    }
});

function showDashboard(name) {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('app-section').style.display = 'block';
    document.getElementById('display-name').innerText = name;
    if (typeof canvas !== 'undefined') canvas.style.opacity = '0';
}

function logout() {
    signOutUser();
}

// ─────────────────────────────────────────────────────────────
// AUTH FORM HANDLERS
// ─────────────────────────────────────────────────────────────
let isLoginMode = true;

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('auth-title').innerText  = isLoginMode ? 'Welcome Back'  : 'Create Account';
    document.getElementById('auth-btn').innerText    = isLoginMode ? 'Login'         : 'Sign Up';
    document.getElementById('toggle-link').innerText = isLoginMode
        ? "Don't have an account? Sign up"
        : 'Already have an account? Login';

    // Bestätigungs-Passwortfeld ein-/ausblenden
    const confirmGroup = document.getElementById('confirm-group');
    if (confirmGroup) {
        confirmGroup.style.display = isLoginMode ? 'none' : 'block';
        document.getElementById('password-confirm').value = '';
    }
}

async function handleAuth() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;
    if (!user || !pass) return alert('Please fill in all fields!');

    // Passwort-Bestätigung bei Registrierung prüfen
    if (!isLoginMode) {
        const confirmInput = document.getElementById('password-confirm');
        if (confirmInput && confirmInput.value !== pass) {
            return alert('Passwords do not match!');
        }
    }

    const btn = document.getElementById('auth-btn');
    btn.innerText = '...';
    btn.disabled  = true;

    const res = await validateAuth(user, pass, isLoginMode);

    btn.innerText = isLoginMode ? 'Login' : 'Sign Up';
    btn.disabled  = false;

    if (res.success) {
        startApp(res.username);
    } else {
        alert(res.message);
    }
}

async function continueAsGuest() {
    const { data, error } = await supabaseClient.auth.signInAnonymously();
    if (!error && data?.session) {
        startApp('Guest');
    } else {
        startApp('Guest');
    }
}

function startApp(name) {
    document.getElementById('display-name').innerText = name;
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('app-section').style.display  = 'block';
    document.body.style.overflow = 'auto';
    canvas.style.opacity = '0';
    particles = [];
}

// ─────────────────────────────────────────────────────────────
// 2. CANVAS & PARTICLE SETUP
// ─────────────────────────────────────────────────────────────
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');
let animationID;
let particles = [];
const particleCount      = 30;
const connectionDistance = 260;

const veggieShapes = [
    { paths: [[{x:0,y:25},{x:-8,y:-5},{x:8,y:-5},{x:0,y:25}],[{x:0,y:-5},{x:-6,y:-18},{x:0,y:-10},{x:6,y:-18},{x:0,y:-5}],[{x:-4,y:5},{x:2,y:7}],[{x:3,y:12},{x:-2,y:14}]] },
    { paths: [[{x:-10,y:-15},{x:10,y:-15},{x:18,y:-5},{x:18,y:10},{x:0,y:18},{x:-18,y:10},{x:-18,y:-5},{x:-10,y:-15}],[{x:0,y:-15},{x:-5,y:-22},{x:0,y:-18},{x:5,y:-22},{x:0,y:-15}],[{x:-12,y:-5},{x:0,y:-2},{x:12,y:-5}]] },
    { paths: [[{x:-15,y:0},{x:-10,y:-15},{x:0,y:-20},{x:10,y:-15},{x:15,y:0},{x:0,y:5},{x:-15,y:0}],[{x:-5,y:5},{x:-5,y:18},{x:5,y:18},{x:5,y:5}],[{x:-7,y:-5},{x:0,y:0},{x:7,y:-5}],[{x:0,y:0},{x:0,y:-12}]] },
    { paths: [[{x:-12,y:-10},{x:-5,y:-14},{x:5,y:-14},{x:12,y:-10},{x:14,y:10},{x:8,y:18},{x:-8,y:18},{x:-14,y:10},{x:-12,y:-10}],[{x:0,y:-14},{x:0,y:-22},{x:4,y:-24}],[{x:-5,y:-14},{x:-5,y:10}],[{x:5,y:-14},{x:5,y:10}]] },
    { paths: [[{x:0,y:-22},{x:12,y:-5},{x:12,y:10},{x:0,y:20},{x:-12,y:10},{x:-12,y:-5},{x:0,y:-22}],[{x:0,y:-22},{x:0,y:10}],[{x:-6,y:-15},{x:-6,y:15}],[{x:6,y:-15},{x:6,y:15}]] }
];

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor(svgString = null) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = (Math.random() - 0.5) * 0.25;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.008;
        if (svgString) {
            const m = svgString.match(/d="([^"]+)"/);
            this.path  = m ? new Path2D(m[1]) : null;
            this.isSVG = true;
        } else {
            this.shape = veggieShapes[Math.floor(Math.random() * veggieShapes.length)];
            this.isSVG = false;
        }
    }
    update() {
        this.x += this.speedX; this.y += this.speedY; this.rotation += this.rotationSpeed;
        if (this.x > canvas.width)  this.x = 0;
        if (this.x < 0)             this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0)             this.y = canvas.height;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = '#2d6a4f';
        ctx.lineWidth   = 2;
        if (this.isSVG && this.path) {
            ctx.scale(1.2, 1.2);
            ctx.stroke(this.path);
        } else if (this.shape) {
            this.shape.paths.forEach(path => {
                ctx.beginPath();
                path.forEach((p, i) => { i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
                ctx.stroke();
            });
        }
        ctx.restore();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
            const dx   = particles[i].x - particles[j].x;
            const dy   = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connectionDistance) {
                ctx.strokeStyle = `rgba(64,145,108,${0.5 - dist / connectionDistance})`;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    animationID = requestAnimationFrame(animate);
}

for (let i = 0; i < particleCount; i++) particles.push(new Particle());
animate();

// ─────────────────────────────────────────────────────────────
// 3. MENU BUTTONS — hover icons & navigation
// ─────────────────────────────────────────────────────────────
const buttonIcons = {
    'Find Recipes':  ['<svg viewBox="0 0 24 24"><path d="M12 6v2M9 5l1 3M15 5l-1 3"/></svg>','<svg viewBox="0 0 24 24"><path d="M14 4l-9 9c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0l9-9c1-1 1-2.5 0-3.5s-2.5-1-3.5 0z"/></svg>'],
    'My Tracking':   ['<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 6-6"/></svg>','<svg viewBox="0 0 24 24"><path d="M12 20a8 8 0 100-16 8 8 0 000 16z"/></svg>'],
    'My Collection': ['<svg viewBox="0 0 24 24"><path d="M4 19V5a2 2 0 012-2h13.4a.5.5 0 01.49.4v15.2a.5.5 0 01-.49.4H6a2 2 0 01-2-2z"/></svg>','<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>']
};

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? e.target.classList.add('reveal') : e.target.classList.remove('reveal'));
}, { threshold: 0 }); // threshold:0 is more reliable on Android Chrome

// Mobile fallback: force reveal after short delay in case observer doesn't fire
setTimeout(() => {
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.add('reveal'));
}, 600);

let isThrottled = false;
let lastScrollY = window.scrollY;

document.querySelectorAll('.menu-btn').forEach(btn => {
    revealObserver.observe(btn);

    btn.addEventListener('mouseenter', () => {
        const icons = buttonIcons[btn.innerText.trim()];
        if (!icons) return;
        canvas.style.opacity = '0.4';
        particles = [];
        for (let i = 0; i < 20; i++) particles.push(new Particle(icons[Math.floor(Math.random() * icons.length)]));
    });

    btn.addEventListener('mouseleave', () => {
        canvas.style.opacity = '0';
        particles = [];
    });

    // Navigation now handled by href on <a> tags — no click handler needed
});

window.addEventListener('scroll', () => {
    if (document.getElementById('app-section').style.display === 'none') return;
    const header = document.getElementById('main-header');
    const cur    = window.scrollY;
    if (cur > 60)  header.classList.add('scrolled');
    else if (cur < 20) header.classList.remove('scrolled');
    if (!isThrottled) {
        if (cur > 80 && cur < window.innerHeight / 2 && cur > lastScrollY) {
            isThrottled = true;
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            setTimeout(() => isThrottled = false, 1200);
        } else if (cur < window.innerHeight - 80 && cur > 100 && cur < lastScrollY) {
            isThrottled = true;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => isThrottled = false, 1200);
        }
    }
    lastScrollY = cur;
});
