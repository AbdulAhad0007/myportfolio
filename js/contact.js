function message() {
    document.addEventListener('click', () => {
        let mess = document.querySelector(".message");
        mess.innerText = "Message sent successfully";
    });
}