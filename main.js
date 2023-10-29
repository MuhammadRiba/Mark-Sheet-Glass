const getResult = () => {
    let math = document.getElementById('math').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let c = document.getElementById('cprogramming').value;
    let computer = document.getElementById('computer').value;
    let totatl = document.getElementById('totatl').value;

    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value");
    }
    let obtaine = parseInt(math) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(c) + parseFloat(computer);
    let percentage = (obtaine * 100) / totatl;

    if (percentage >= 90) {
        document.getElementById("grade").innerHTML = " A+1 😎😎😎";
    }
    else if (percentage >= 80) {
        document.getElementById("grade").innerHTML = " A+ 😍😍😍";

    }
    else if (percentage >= 70) {
        document.getElementById("grade").innerHTML = " A 😇😇😇";

    }
    else if (percentage >= 60) {
        document.getElementById("grade").innerHTML = " B 😎😎😎";

    }
    else if (percentage >= 50) {
        document.getElementById("grade").innerHTML = " C 🥳🥳🥳";

    }
    else if (percentage >= 40) {
        document.getElementById("grade").innerHTML = " D 🥵🥵🥵";

    }
    else if (percentage >= 30) {
        document.getElementById("grade").innerHTML = " Failed";

    }
    else if (percentage >= 20) {
        document.getElementById("grade").innerHTML = " Failed";

    }
    else {
        document.getElementById("grade").innerHTML = " Failed";

    }


    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('total').innerHTML = obtaine;
}