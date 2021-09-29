
var arr = ['Web Developer', 'Competitive Coder'];
var speed = 150;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function typeWriter() {
    while (1) {
        var i = 0;
        for (i = 0; i < arr.length; i++) {
            let txt = arr[i], j = 0;
            while (j < txt.length) {
                document.getElementById("hobbies").innerHTML += txt.charAt(j);
                j++;
                await sleep(speed);
            }
            await sleep(sleep);
            document.getElementById("hobbies").innerHTML = "";

        }
    }
}
