  // Optimized particle creation
  function createParticles() {
    const emojis = ['❤️', '🌎', '🌠', '💝', '🌟', '💞'];
    const container = document.body;
    let lastTime = 0;

    function animate(timestamp) {
        if (!lastTime || timestamp - lastTime >= 500) { // Reduced frequency
            const particle = document.createElement('div');
            particle.className = 'love-particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = Math.random() * 3 + 3 + 's';
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 6000);
            lastTime = timestamp;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// Optimized message animation
let currentMessage = 0;
const messages = document.querySelectorAll('.message');
const finalQuestion = document.querySelector('.final-question');

function showNextMessage() {
    requestAnimationFrame(() => {
        if (currentMessage > 0) {
            messages[currentMessage - 1].classList.add('exit');
        }
        
        if (currentMessage < messages.length) {
            messages[currentMessage].classList.add('active');
            currentMessage++;
            setTimeout(showNextMessage, 3000);
        } else {
            finalQuestion.style.display = 'block';
            finalQuestion.style.opacity = '1';
        }
    });
}

// Button interactions
document.querySelector('.yes-btn').addEventListener('click', function() {
    const celebration = document.querySelector('.celebration');
    celebration.style.display = 'block';

    // Optimized heart burst
    requestAnimationFrame(() => {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-burst';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            celebration.appendChild(heart);
        }
    });

    finalQuestion.innerHTML = 
        "<h2>🎉 Thankyouuuu for staying with this DUMB BANDAR💝</h2>" +
        "<p>I am sorry that I am not physically present, but this is the last time it’s happening—then no more long distance.</p>" +

        "<p>From thinking of you as soon as I wake up to going to sleep after talking to you, I missssss youuuu every time.</p>" +

        "<p>You have been the best thing that has happened to me in so many years. Didn’t know that a failure, depressed, unloveable kid could even get such a person in life and have a completely opposite life now than before.</p>" +

        "<p>Even in LDR, you always know how to bring a smile to my face. From our daily calls to time-to-time video calls, all are just the besttt thing.</p>" +

        "<p>Because of you, the 7th Std Malhar and the current stage Malhar have a hugeeee positive difference, but one thing that has not changed is the amount of love I have for you. Till now, it has just kept increasing, and it’s still going up n upp.</p>" +

        "<p>Thank you for everything, for being my everything. From listening to my yapping to handling me at my lowest, you are not just a girlfriend to me but a god-gift.</p>" +

        "<p>Of course, you are my girlfriend—I love when you kinda get angry at me, when you make mistakes, when you do little parenting on me, or when you act like a small baby. I love it all. (I am crying rn btw.) I am just greatfull to have you in my life.</p>" +

        "<p>I will always be your No.1 supporter, your biggest loverrr. Yes, I know I have a few defects in me, some points where I lack, and I promise that I will overcome them and be a more changed, better person.</p>" +

        "<p><strong>JUST FUKING THANKKYOUUUUUUUUUUU FOR BEING WITH THIS IDIOT BANDARRR, TAKING CARE OF ME WHEN IT’S NEEDED, AND SHOWING AFFECTION TO THIS IDIOT.</strong></p>" +

        "<p><strong>I lOVEEEEEEEEEEEE YOUUUUUUUUUUUUUU ALOTTTTTT, MY HOT HOT EXTREMELY PYAAAARIIII LADY, MY RANI SARKARRR.</strong></p>" +

        "<p><strong>I MISSSSS YOU ALOTT.</strong></p>"

        "<div style='margin-top: 2rem; font-size: 5rem'>💞🌟</div>";
});

document.querySelector('.no-btn').addEventListener('mouseover', function() {
    requestAnimationFrame(() => {
        this.style.transform = 
            `translate(${Math.random() * 200 - 100}px, 
            ${Math.random() * 200 - 100}px)
            rotate(${Math.random() * 360}deg)`;
        this.style.transition = 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    });
});

// Initialize
createParticles();
setTimeout(showNextMessage, 1000);