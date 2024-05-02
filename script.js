const audioPlayer = document.getElementById('audioPlayer');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const wave = document.querySelector('.wave');

function loadAudio(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            audioPlayer.src = e.target.result;
            audioPlayer.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
        };
        reader.readAsDataURL(file);
    } else {
        audioPlayer.src = '';
    }
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
        startWaveAnimation();
    } else {
        audioPlayer.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
        stopWaveAnimation();
    }
}

function stop() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
    stopWaveAnimation();
}

function startWaveAnimation() {
    wave.style.display = 'block';
}

function stopWaveAnimation() {
    wave.style.display = 'none';
}



