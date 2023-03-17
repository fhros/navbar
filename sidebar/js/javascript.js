//variable et nappulat toimii

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

//nappula oikees yläkulmas yippee

toggleBtn.addEventListener("click", function () {
    console.log(sidebar.classList);
    sidebar.classList.toggle("show-sidebar");
});

//ruksi nappi joka sammuttaa jötikän

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
    
})