document.addEventListener("DOMContentLoaded", function() {
    let yearSpans = document.querySelectorAll(".year-selector span");
    let yearContents = document.querySelectorAll(".year-content");

    yearSpans.forEach(span => {
        span.addEventListener("click", function() {
            yearSpans.forEach(s => s.classList.remove("active"));
            yearContents.forEach(content => content.classList.remove("active"));

            span.classList.add("active");
            document.querySelector(`.${span.getAttribute("data-year")}-content`).classList.add("active");
        });
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const l3Element = document.querySelector('.year-selector span:first-child');
    l3Element.click();
});