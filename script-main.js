document.addEventListener('DOMContentLoaded', () => {
  const contentContainer = document.getElementById('content');
  const linksContainer = document.getElementById('links');

  fetch('links-main.json')
    .then(response => response.json())
    .then(data => {
      // Add course and links content
      data.courses.forEach(course => {
        const courseHeader = document.createElement('h2');
        courseHeader.textContent = course.title;
        linksContainer.appendChild(courseHeader);

        course.videos.forEach(video => {
          const a = document.createElement('a');
          a.href = video.url;
          a.textContent = video.title;
          a.target = '_blank';
          linksContainer.appendChild(a);
        });
      });

      // Wait for title to finish animating (1.5 + 1 = 2.5s)
      setTimeout(() => {
        contentContainer.classList.remove('hidden');
        contentContainer.classList.add('fade-in');
      }, 2500);
    })
    .catch(error => {
      console.error('Error loading links:', error);
    });
});
