document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("guestbook-form");
    const entriesList = document.getElementById("entries-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        const entry = document.createElement("li");
        entry.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

        entriesList.appendChild(entry);

        form.reset();
    });
});
