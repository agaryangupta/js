var person={
   firstname:"john",
   lastname:"doe",
   id:5522,
   getinfo:function(){
    return this.firstname + " " + this.lastname;
   }
};
document.getElementById("demo").innerHTML=person.getinfo();

var person ={
   name: "Ramesh",
   age: 30,
   isMarried: true,
   adress:{
      street:"vijay nagar",
      flat:201
   }
}
var ob= new Object();
ob.name="annvesh"
ob.hob={}
ob.hob.sport="cricket"
ob.hob.drawing=true
ob.hob.exp=12

console.log(ob.name)
console.log(person.adress)
document.write(ob.name)

function myfunc(){
   var car="Buggati"
   document.getElementById("demo").innerHTML= typeof(car) + " " +car;
}
document.getElementById("demo").innerHTML=typeof(car) + " " +car;
function world(){
   var a="a is local to outer \n"
   function below(){
      var b="\n b is local to inner"
      document.write(b)
   }document.write(a)
   below()
}
world();



var myvar=10
function check(){
    console.log("Start function A")
    function check2(){
        console.log("In fuction B")
    }check2();
}check();
console.log("Global context")


var name="john"
function first(){
    var a="hello "
    second();
    console.log(a + name);
}
function second(){
    var b="hi "
    third();
    console.log(b + name);
}
function third(){
    var c="hola "
    console.log(c + name);
}first()


var a=5
function add(){
    var b=10
    console.log(a+b)
    function mul(){
        var c=48
        console.log(b*c);
    }mul()
}add()
var grade="D"
switch(grade){
    case "A":
        console.log("Good job")
        break;
    case "B":
            console.log("OK job")
            break;
    case "C":
        console.log("bad job")
        break;
    case "D":
        console.log("very bad job")
        break;
    default:
        console.log("Wrong input")
}
function myfunc(){
    alert("Hello")
}

function myfunc(name, age){
    document.write(name + " is " + age + " years old")
}
add(10,20)

function add(a,b){
    console.log(a+b)
    document.write(a+b)
    console.log(a-b)
    document.write(a-b)
    console.log(a*b)
    document.write(a*b)
    console.log(a/b)
    document.write(a/b)
}

var add=(a,b)=>{
    console.log(a+b)
};
a=15
b=56
add(a,b)

function myfunc(){
var a=3+3;
var b='3'+3;
var c="hello"+3
var demop=document.getElementById("demo")
demop.innerHTML=a+" "+b+" "+c;}

var mycollection=[
    1,
    "Hello World",
    true,
    {name:"rahul",age:30},
    function yello(){
        console.log("hellnah");
    },
    ["Anya","Forger","Loid","Forger"]
];
console.log(mycollection);


function info (first,last, lang){
    if(arguments.length===3){
        console.log(first);
        console.log(last);
        console.log(lang);
    }
}
function myfunc() {
    alert("Hola amigoos")
}

function over() {
    document.getElementById("mytext").style.color="red";

}function mount() {
    document.getElementById("mytext").style.color="magenta"
}


var con=confirm("DO YOU WANT TO CONTINUE?");
if(con==true){
    alert("User is a goat");
}else{
    alert("User is a bitch")
}

var a=Number(prompt("ENTER A="));
var b=Number(prompt("ENTER B="));

alert(a+b)

var q="Guess 10+10";

for(var i=0;i<=3;i++){
    if(i==3){
        alert("Cannot attemp now");
        break;
    }
    var res=prompt(q,"0");
    if(res!="20"){
        confirm("Wrong. Try again")
    }else{
        alert("Correct")
    }
}
function redirect() {
    window.location="https://www.google.com/search?q=heaven+images&rlz=1C1RXQR_en-GBIN1069IN1069&oq=heven+im&gs_lcrp=EgZjaHJvbWUqCQgBEAAYChiABDIGCAAQRRg5MgkIARAAGAoYgAQyCQgCEAAYChiABDIJCAMQABgKGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQABgKGIAE0gEKMTUyODVqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8#vhid=rOGC6NRsd76M2M&vssid=__ExuZ_D5Jt2c4-EPiOTt8Q8_50"
}
document.write("You are going to heven");
setTimeout('redirect()',10000);



function validate() {
    var x=document.forms["myForm"]["fname"].value;
    var y=document.forms["myForm"]["number"].value;
    var z=document.forms["myForm"]["email"].value;
    var atpos=z.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if(x==null || x==""){
        alert("Fill the first name")
        return false;
    }

    if(y.length!=10){
        alert("Enter 10 digit mobile number");
        return false;
    }
    if(y.match(/^[0-9]{10}$/)){
        alert("Only digits please")
    }

    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
{
    alert("Not a valid email");
    return false;
}

}