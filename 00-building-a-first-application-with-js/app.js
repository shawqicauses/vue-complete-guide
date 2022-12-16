const goalsInput = document.getElementById("goals-input")
const goalsButton = document.getElementById("goals-button")
const goalsList = document.getElementById("goals-list")

const goalsInsert = function goalsInsert(event) {
  event.preventDefault()
  if (goalsInput.value) {
    const goalsListItem = document.createElement("li")
    goalsListItem.innerHTML = goalsInput.value
    goalsInput.value = ""
    goalsList.append(goalsListItem)
  }
}

goalsButton.addEventListener("click", goalsInsert)
document.addEventListener("submit", (event) => event.preventDefault())
