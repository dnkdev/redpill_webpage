function open_pop_window(e) {
    let main = document.getElementById("main");
    let children = main.querySelectorAll('div');

    let selected_id = e.target.attributes.href.nodeValue;
    let selected_node;
    children.forEach(child => {
        if( selected_id.includes(child.attributes.id.nodeValue)) {
            selected_node = child;
        }
        else {
            child.classList.remove('open');
        }

    })
    selected_node.classList.toggle('open')
}