// 간단한 애니메이션 효과를 위한 JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 페이지가 로드되면 보노보노에 애니메이션 효과 추가
    const bonobono = document.querySelector('.bonobono img');
    if (bonobono) {
        bonobono.style.transition = 'transform 0.5s ease';
        
        // 보노보노 이미지에 마우스를 올리면 약간 확대
        bonobono.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        // 마우스가 벗어나면 원래 크기로
        bonobono.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // 관심사 태그에 애니메이션 효과 추가
    const interestTags = document.querySelectorAll('.interest-tag');
    interestTags.forEach(tag => {
        tag.style.transition = 'background-color 0.3s ease';
        
        tag.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#4fc3f7';
        });
        
        tag.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#bbdefb';
        });
    });
});