document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.typing-effect');
    const typingDelay = 100; // 글자 사이의 딜레이(ms)
    const pauseDelay = 500; // 특정 글자 후의 지연(ms)

    elements.forEach(element => {
        const text = element.textContent; // 텍스트 가져오기
        element.textContent = ''; // 초기화

        let i = 0; // 글자 인덱스

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i); // 한 글자씩 추가
                i++;

                // 특정 조건에서 지연 추가
                const currentChar = text.charAt(i - 1);
                const nextPause = (currentChar === ' ' || currentChar === '.') ? pauseDelay : typingDelay;

                setTimeout(type, nextPause); // 다음 글자 타이핑
            }
        }

        type(); // 타이핑 시작
    });
});
