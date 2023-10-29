const Result =() =>{
    let math = parseFloat(document.getElementById('math').value);
    let physics = parseFloat(document.getElementById('physics').value);
    let chemistry = parseFloat(document.getElementById('chemistry').value);
    let c = parseFloat(document.getElementById('cprogramming').value);
    let computer = parseFloat(document.getElementById('computer').value);
    let totatl = parseFloat(document.getElementById('totatl').value)    

    if(document.getElementsByTagName('input').value ==""){
        alert("Please Enter Some Value")
    }
    var obtaine = math + physics+ chemistry + c + computer ;
    var percentage = (obtaine*100)/ totatl;
    if(percentage>=90){
        document.getElementById("grade").innerHTML = "A+1"
    }
    else if(percentage>=80){
        document.getElementById("grade").innerHTML = "A+"
    }
    else if(percentage>=70){
        document.getElementById("grade").innerHTML = "A"
    }
    else if(percentage>=60){
        document.getElementById("grade").innerHTML = "B"
    }
    else if(percentage>=50){
        document.getElementById("grade").innerHTML = "C"
    }
    else if(percentage>=40){
        document.getElementById("grade").innerHTML = "D"
    }
    else if(percentage>=30){
        document.getElementById("grade").innerHTML = "Failed"
    }
    else if(percentage>=20){
        document.getElementById("grade").innerHTML = "Dup kar mar ja"
    }
    else {
        document.getElementById("grade").innerHTML = "Teri Zindagi Par Lanat"
    }
    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('total').innerHTML = obtaine;
}