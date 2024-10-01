const monthYearDisplay = document.getElementById("monthYear");
const daysContainer = document.querySelector(".days");
const prevButton = document.getElementById("prevMonth");
const nextButton = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {
    daysContainer.innerHTML = "";
    monthYearDisplay.textContent = currentDate.toLocaleString('ja-JP', { year: 'numeric', month: 'long' });

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    for (let i = 0; i < firstDay.getDay(); i++) {
        daysContainer.innerHTML += "<div></div>"; // 空のセル
    }
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        daysContainer.innerHTML += `<div>${day}</div>`;
    }
}

prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// 初回表示
renderCalendar();
