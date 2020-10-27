

window.onload = () => {
    let itemButton = document.querySelectorAll('.item');
    itemButton.onclick = (event) => {
        console.log('Button clicked!');
        console.log(event);
    };
}