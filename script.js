const addHabit = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const habitInput = document.getElementById("habit-input");
const newHabitBtn = document.getElementById("new-habit-btn");
const emptyMessage = document.getElementById("empty-message");

const days = [
    document.getElementById("mon"),
    document.getElementById("tue"),
    document.getElementById("wed"),
    document.getElementById("thu"),
    document.getElementById("fri"),
    document.getElementById("sat"),
    document.getElementById("sun")
];

const crossIcon = "✖️";
const tickIcon = "✔️";

addHabit.onclick = () => {
    inputBox.style.visibility =
        inputBox.style.visibility === "visible"
            ? "hidden"
            : "visible";

    if (inputBox.style.visibility === "visible") {
        habitInput.focus();
    }
};

habitInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        newHabitBtn.click();
    }
});

newHabitBtn.onclick = () => {
    const habitToAdd = habitInput.value.trim();

    if (!habitToAdd) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";
    inputBox.style.visibility = "hidden";

    const habitDiv = document.getElementById("div");
    const habitList = habitDiv.querySelector("ul");

    // Create habit
    const newLi = document.createElement("li");

    const habitName = document.createElement("span");
    habitName.textContent = habitToAdd;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";

    newLi.appendChild(habitName);
    newLi.appendChild(deleteBtn);
    habitList.appendChild(newLi);

    // Clear input
    habitInput.value = "";

    // Store all 7 day elements for this habit
    const dayItems = [];

    days.forEach(dayElement => {
        if (dayElement) {
            const dayList = dayElement.querySelector("ul");
            const dayNewLi = document.createElement("li");

            dayNewLi.textContent = crossIcon;
            dayNewLi.style.listStyle = "none";
            dayNewLi.style.cursor = "pointer";

            dayNewLi.onclick = () => {
                dayNewLi.textContent =
                    dayNewLi.textContent === crossIcon
                        ? tickIcon
                        : crossIcon;
            };

            dayList.appendChild(dayNewLi);
            dayItems.push(dayNewLi);
        }
    });

    // Delete habit and its day entries
    deleteBtn.addEventListener("click", () => {
        newLi.remove();

        dayItems.forEach(dayItem => {
            dayItem.remove();
        });
    });
};
