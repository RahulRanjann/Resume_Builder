function redirectToResumeBuilder() {
    // Replace with the actual URL of your Resume Builder page
    window.location.href = 'resume-builder.html';
}

function changeBackgroundColor() {
    // Get the current background color of the body
    const body = document.body;
    const currentColor = getComputedStyle(body).backgroundColor;

    // Determine which section is currently displayed
    const homeSection = document.getElementById('home');
    const resumeSection = document.getElementById('resume');
    const jobSection = document.getElementById('job');
    const aboutSection = document.getElementById('about');

    // Change the background color of the body and header based on the current section
    if (homeSection.style.display === 'block') {
        const bgColor = homeSection.style.backgroundColor;
        body.style.backgroundColor = bgColor;
        header.style.backgroundColor = bgColor;
    } else if (resumeSection.style.display === 'block') {
        const bgColor = resumeSection.style.backgroundColor;
        body.style.backgroundColor = bgColor;
        header.style.backgroundColor = bgColor;
    } else if (jobSection.style.display === 'block') {
        const bgColor = jobSection.style.backgroundColor;
        body.style.backgroundColor = bgColor;
        header.style.backgroundColor = bgColor;
    } else if (aboutSection.style.display === 'block') {
        const bgColor = aboutSection.style.backgroundColor;
        body.style.backgroundColor = bgColor;
        header.style.backgroundColor = bgColor;
    }
}

function scrollToResume() {
    // Scroll to the Resume section
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
        resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
}
