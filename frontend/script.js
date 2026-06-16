// Updated API URL
fetch("https://resume-backend-43zb.onrender.com/api/profile")
    .then(response => response.json())
    .then(data => {

        document.getElementById("profile").innerHTML = `
        <h1>${data.name}</h1>
        <h2>${data.role}</h2>
        <p>Java Full-Stack Developer | B.Tech CSE Student</p>
    `;

        const skillList = document.getElementById("skillList");

        data.skills.forEach(skill => {
            const span = document.createElement("span");
            span.className = "skill";
            span.innerText = skill;
            skillList.appendChild(span);
        });

    })
    .catch(error => {
        console.log(error);
    });

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});