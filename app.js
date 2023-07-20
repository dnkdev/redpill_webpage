function toggle_header_border() {
    let left = document.getElementById("nav-left-border")
    let right = document.getElementById("nav-right-border")
    left.classList.toggle("top")
    right.classList.toggle("top")
}

let is_sticked = false;
document.addEventListener("scroll",() => {
    let el = document.querySelector("header");
    let header_y = el.getBoundingClientRect().y;
    
    if (header_y <= 0 && is_sticked == false) {
        toggle_header_border();
        is_sticked = true;
    }
    else if (header_y > 0 && is_sticked ==true) {
        toggle_header_border();
        is_sticked = false;
    }
})