const { body } = document;

const form = document.querySelector("form");
const input = form.querySelector("input");
const submitBtn = form.querySelector("button");
const todos = document.querySelector(".todos");



input.addEventListener("input", () => {
    if (input.value.length > 42)
    {
        submitBtn.style.background = "#999";
        submitBtn.style.pointerEvents = "none";
        body.style.animation = "shake .3s linear 3";
        setTimeout(() => body.style.animation = "", 900);
    } else
    {
        submitBtn.style.background = "#54cbf3";
        submitBtn.style.pointerEvents = "all";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();


    todos.innerHTML += `
        <div class="todo" style="opacity: 0; transform: scaleY(0)">
            <input class="checked-off" type="checkbox" />
            <span contentEditable="true">${input.value}
                <p class="strike-through"></p>
            </span>
            <div>
                <button class="remove-todo">Remove Todo</button>
            </div>
        </div>
    `;


    let todoItems = document.querySelectorAll(".todo");

    todoItems.forEach(item => {

        setTimeout(() => {item.style.opacity = 1;
        item.style.transform = "scaleY(1)";}, 200);


        const removeBtn = item.querySelector(".remove-todo");
        const checkedOff = item.querySelector(".checked-off");

        removeBtn.addEventListener("click", () => {
            item.remove();
            
        });


        checkedOff.addEventListener("click", () => {
            checkedOff.classList.add("checked-wave");
            const strike = item.querySelector(".strike-through");
            strike.style.width = "90%";

            setTimeout(() => {
                item.classList.add("animate__animted");
                item.classList.add("animate__hinge");
                setTimeout(() => item.remove(), 2000);
            }, 1000);

            setTimeout(() => checkedOff.classList.remove("checked-wave"), 500);
        });




    });




});
