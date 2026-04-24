// Dữ liệu câu hỏi
const quizData = [
    {
        question: "Câu 1. Dẫn nhiệt là hình thức truyền nhiệt xảy ra chủ yếu trong",
        options: ["Chất khí", "Chất lỏng", "Chất rắn", "Chân không"],
        correct: 2
    },
    {
        question: "Câu 2. Trong các vật sau, vật nào dẫn nhiệt tốt nhất?",
        options: ["Gỗ", "Nhựa", "Kim loại", "Cao su"],
        correct: 2
    },
    {
        question: "Câu 3. Đối lưu là hình thức truyền nhiệt xảy ra trong",
        options: ["Chất rắn", "Chất lỏng và chất khí", "Chân không", "Kim loại"],
        correct: 1
    },
    {
        question: "Câu 4. Bức xạ nhiệt có thể truyền nhiệt trong môi trường nào?",
        options: ["Chỉ trong chất rắn", "Chỉ trong chất lỏng", "Chỉ trong chất khí", "Trong cả chân không"],
        correct: 3
    },
    {
        question: "Câu 5. Nhiệt được truyền từ vật nào sang vật nào?",
        options: ["Từ vật lạnh sang vật nóng", "Từ vật nóng sang vật lạnh", "Từ vật nhẹ sang vật nặng", "Không theo quy luật"],
        correct: 1
    },
    {
        question: "Câu 6. Ví dụ nào sau đây là dẫn nhiệt?",
        options: ["Nước sôi lan nhiệt trong nồi", "Không khí nóng bay lên", "Muỗng kim loại nóng lên khi khuấy nước nóng", "Ánh sáng Mặt Trời làm nóng Trái Đất"],
        correct: 2
    },
    {
        question: "Câu 7. Ví dụ nào là đối lưu?",
        options: ["Thanh sắt nóng dần", "Nước trong nồi sôi chuyển động", "Ánh sáng truyền từ Mặt Trời", "Cốc nước lạnh đặt ngoài không khí"],
        correct: 1
    },
    {
        question: "Câu 8. Ví dụ nào là bức xạ nhiệt?",
        options: ["Đun nước trên bếp", "Sờ vào cốc nước nóng", "Mặt Trời làm nóng Trái Đất", "Không khí chuyển động"],
        correct: 2
    },
    {
        question: "Câu 9. Chất nào sau đây dẫn nhiệt kém nhất?",
        options: ["Đồng", "Nhôm", "Sắt", "Không khí"],
        correct: 3
    },
    {
        question: "Câu 10. Trong các hình thức truyền nhiệt, hình thức nào không cần môi trường truyền?",
        options: ["Dẫn nhiệt", "Đối lưu", "Bức xạ nhiệt", "Cả 3 đều cần môi trường"],
        correct: 2
    },
    {
        question: "Câu 11. Tại sao nồi thường làm bằng kim loại nhưng tay cầm lại bằng nhựa?",
        options: ["Kim loại nhẹ hơn", "Nhựa dẫn nhiệt tốt", "Nhựa cách nhiệt tốt, tránh bỏng", "Kim loại không truyền nhiệt"],
        correct: 2
    },
    {
        question: "Câu 12. Khi đun nước, phần nước dưới nóng lên trước rồi chuyển động lên trên. Đây là do",
        options: ["Dẫn nhiệt", "Đối lưu", "Bức xạ", "Bay hơi"],
        correct: 1
    },
    {
        question: "Câu 13. Tại sao vào mùa hè, mặc áo sáng màu lại mát hơn?",
        options: ["Hấp thụ nhiệt tốt hơn", "Phản xạ nhiệt tốt hơn", "Dẫn nhiệt nhanh hơn", "Giữ nhiệt tốt hơn"],
        correct: 1
    },
    {
        question: "Câu 14. Vì sao không khí nóng thường bay lên cao?",
        options: ["Nặng hơn không khí lạnh", "Nhẹ hơn không khí lạnh", "Không thay đổi khối lượng riêng", "Không liên quan đến nhiệt độ"],
        correct: 1
    },
    {
        question: "Câu 15. Tại sao khi chạm vào kim loại và gỗ ở cùng nhiệt độ, ta thấy kim loại lạnh hơn?",
        options: ["Kim loại có nhiệt độ thấp hơn", "Kim loại dẫn nhiệt tốt hơn", "Gỗ nóng hơn", "Gỗ dẫn nhiệt tốt hơn"],
        correct: 1
    },
    {
        question: "Câu 16. Một bạn đặt tay gần bếp lửa (không chạm vào). Tay bạn nóng lên chủ yếu do",
        options: ["Dẫn nhiệt", "Đối lưu", "Bức xạ nhiệt", "Bay hơi"],
        correct: 2
    },
    {
        question: "Câu 17. Tại sao trong phòng điều hòa, máy lạnh thường đặt trên cao?",
        options: ["Để tiết kiệm điện", "Vì không khí lạnh nặng hơn nên đi xuống", "Vì không khí nóng nhẹ hơn", "Không liên quan"],
        correct: 1
    },
    {
        question: "Câu 18. Khi đun nước trong ấm, hiện tượng nào xảy ra đồng thời?",
        options: ["Chỉ dẫn nhiệt", "Chỉ đối lưu", "Chỉ bức xạ", "Cả dẫn nhiệt, đối lưu và bức xạ"],
        correct: 3
    },
    {
        question: "Câu 19. Tại sao người ta thường lót rơm hoặc xốp quanh thùng đá?",
        options: ["Để tăng dẫn nhiệt", "Để tăng đối lưu", "Để giảm truyền nhiệt", "Để làm đẹp"],
        correct: 2
    },
    {
        question: "Câu 20. Một bình nước nóng được giữ nhiệt tốt nhờ",
        options: ["Tăng đối lưu", "Giảm dẫn nhiệt, đối lưu và bức xạ", "Tăng bức xạ", "Chỉ giảm dẫn nhiệt"],
        correct: 1
    }
];

// Các biến trạng thái
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// DOM Elements
const studentNameInput = document.getElementById('student-name');
const studentClassInput = document.getElementById('student-class');
const formError = document.getElementById('form-error');

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const questionCount = document.getElementById('question-count');
const scoreDisplay = document.getElementById('score-display');

const finalScore = document.getElementById('final-score');
const totalQuestionsDisplay = document.getElementById('total-questions');
const feedbackMessage = document.getElementById('feedback-message');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', loadNextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Functions
function startQuiz() {
    const name = studentNameInput.value.trim();
    const className = studentClassInput.value.trim();

    if (!name || !className) {
        formError.classList.remove('hidden');
        return;
    }

    formError.classList.add('hidden');

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    loadQuestion();
}

function loadQuestion() {
    hasAnswered = false;
    nextBtn.classList.add('hidden');

    const currentQuizData = quizData[currentQuestionIndex];

    // Cập nhật text câu hỏi
    questionText.textContent = currentQuizData.question;

    // Xóa các lựa chọn cũ
    optionsContainer.innerHTML = '';

    // Tạo các lựa chọn mới
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');

        button.innerHTML = `
            <span class="option-letter">${letters[index]}</span>
            <span class="option-text">${option}</span>
        `;

        button.addEventListener('click', () => selectOption(button, index));
        optionsContainer.appendChild(button);
    });

    // Cập nhật thông tin quá trình
    updateProgress();
}

function selectOption(selectedButton, selectedIndex) {
    if (hasAnswered) return; // Nếu đã trả lời thì không cho chọn lại

    hasAnswered = true;
    const currentQuizData = quizData[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuizData.correct;

    // Vô hiệu hóa tất cả các nút
    const allOptions = optionsContainer.children;
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].disabled = true;

        // Hiển thị đáp án đúng
        if (i === currentQuizData.correct) {
            allOptions[i].classList.add('correct');
        }
    }

    // Hiển thị kết quả của người dùng
    if (isCorrect) {
        score++;
        updateScore();
    } else {
        selectedButton.classList.add('incorrect');
    }

    // Hiện nút "Tiếp theo"
    nextBtn.classList.remove('hidden');
}

function loadNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function updateProgress() {
    questionCount.textContent = `Câu ${currentQuestionIndex + 1}/${quizData.length}`;
    const progressPercentage = ((currentQuestionIndex) / quizData.length) * 100;
    // Cập nhật width của thanh tiến trình. Khi đang ở câu 1, tiến trình phản ánh câu đó
    progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
}

function updateScore() {
    scoreDisplay.textContent = `Điểm: ${score * 10}`; // Nhân 10 cho điểm số đẹp hơn
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    finalScore.textContent = score;
    totalQuestionsDisplay.textContent = quizData.length;

    // Tạo tin nhắn phản hồi dựa trên điểm số
    const percentage = score / quizData.length;
    let message = "";

    if (percentage === 1) {
        message = "Xuất sắc! Bạn trả lời đúng tất cả các câu hỏi. 🌟";
    } else if (percentage >= 0.7) {
        message = "Rất tốt! Kiến thức của bạn rất vững. 👍";
    } else if (percentage >= 0.5) {
        message = "Khá tốt! Nhưng bạn có thể làm tốt hơn nữa. 💪";
    } else {
        message = "Cần cố gắng hơn! Hãy ôn tập lại và thử lại nhé. 📚";
    }

    feedbackMessage.textContent = message;

    // Gửi dữ liệu lên Google Sheets
    sendDataToGoogleSheets(studentNameInput.value.trim(), studentClassInput.value.trim(), score, quizData.length);
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    // Không gọi startQuiz() vì có thể học sinh muốn đổi tên/lớp
    // Trở về màn hình bắt đầu
    startScreen.classList.add('active');
}

// URL của Google Apps Script Web App (Bạn sẽ thay thế URL này bằng URL của bạn)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwM2QWhuV989Q8CKgyFYSqMDYER4XL3yu7RkLzDhjBBOkKKk8bezsvWULfkyGDpJT9tMA/exec';

function sendDataToGoogleSheets(name, className, score, total) {
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('THAY_THE_URL')) {
        console.log("Chưa cấu hình URL Google Sheets. Dữ liệu không được gửi.");
        return;
    }

    // Sử dụng fetch với mode no-cors để tránh lỗi CORS khi gửi từ trình duyệt
    const url = `${GOOGLE_SCRIPT_URL}?name=${encodeURIComponent(name)}&class=${encodeURIComponent(className)}&score=${score}&total=${total}`;

    fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    }).then(() => {
        console.log('Đã gửi dữ liệu thành công!');
    }).catch(error => {
        console.error('Lỗi khi gửi dữ liệu:', error);
    });
}
