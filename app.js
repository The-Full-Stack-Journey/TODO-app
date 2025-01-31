document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todoInput");
    const addButton = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");
    const themeSelector = document.getElementById("theme");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    body.classList.add(savedTheme);
    themeSelector.value = savedTheme;

    // Theme switching logic
    themeSelector.addEventListener("change", (event) => {
        const selectedTheme = event.target.value;
        body.classList.remove("light", "dark", "blue");
        body.classList.add(selectedTheme);
        localStorage.setItem("theme", selectedTheme);
    });

    // Add a new TODO
    addButton.addEventListener("click", () => {
        const todoText = input.value.trim();
        if (todoText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${todoText}</span>
            <div class="actions">
                <button class="done-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        todoList.appendChild(li);
        input.value = "";

        // Mark as Done
        li.querySelector(".done-btn").addEventListener("click", () => {
            li.classList.toggle("done");
        });

        // Delete TODO
        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });
    });

    // Allow "Enter" key to add TODO
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
