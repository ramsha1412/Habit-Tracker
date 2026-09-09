const addHabit = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const habitInput = document.getElementById("habit-input");
const newHabitBtn = document.getElementById("new-habit-btn");
const emptyMessage = document.getElementById("empty-message");
const days = [ document.getElementById("mon"),
               document.getElementById("tue"),
               document.getElementById("wed"),
               document.getElementById("thu"),
               document.getElementById("fri"),
               document.getElementById("sat"),
               document.getElementById("sun"),
];

const crossIcon = "✖️";
const tickIcon = "✔️";

addHabit.onclick = () => {
       inputBox.style.visibility = inputBox.style.visibility === 'visible' ? 'hidden' : 'visible';
}
habitInput.addEventListener("keypress", (event) => {
      if(event.key === "Enter") {
            newHabitBtn.click();
      }
});
newHabitBtn.onclick=() => {
      const habitToAdd = habitInput.value.trim();
      if(!habitToAdd) {
            emptyMessage.style.display = 'block';
      }
      else{
            emptyMessage.style.display = 'none';
            inputBox.style.visibility = 'hidden';
            
            const habitDiv = document.getElementById("div");
            const habitList = habitDiv.querySelector("ul");
            const newLi = document.createElement("li");
            newLi.textContent = habitToAdd;
            habitList.appendChild(newLi);
            habitInput.value = "";
            
             days.forEach(dayElement => {
            if (dayElement) {
                  const dayList = dayElement.querySelector("ul");
                  const dayNewLi = document.createElement("li");
                  
                  dayNewLi.textContent = crossIcon;
                  dayNewLi.style.listStyle = "none";
                  dayNewLi.style.cursor = "pointer"; // Makes it obvious it's clickable

                  dayNewLi.onclick = () => {
                        dayNewLi.textContent = dayNewLi.textContent === crossIcon ? tickIcon : crossIcon;
                  };

                  dayList.appendChild(dayNewLi);
             } 
            }); 
      }
};