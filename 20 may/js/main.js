const input = document.getElementById ("text");
const wrapper = document.getElementsByClassName ("tag-wrapper") [0];
const style = document.getElementsByClassName("style")[0];
input.onkeydown = function(event) {
    if (event.keyCode === 13){
        const deyer = input.value;
        const yeniDiv = document.createElement ("div");
        yeniDiv.classList.add("style")
        yeniDiv.innerHTML = deyer;
        wrapper.appendChild(yeniDiv)
        input.value = "";
    }
}
