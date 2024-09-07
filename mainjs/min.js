document.getElementById('toggleSkillsBtn').addEventListener('click', function() {
    const skillsSection = document.getElementById('skillsSection');
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
