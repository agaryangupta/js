// var mycollection=[
//     1,
//     "Hello World",
//     true,
//     {name:"rahul",age:30},
//     function yello(){
//         console.log("hellnah");
//     },
//     ["Anya","Forger","Loid","Forger"]
// ];
// console.log(mycollection);

function validate(){
    var x=document.forms["myForm"]["email"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if(atpos<1||dotpos<atpos+2||dotpos+2>=x.length){
        alert('not a vlid email address');
        return false;
    }
}
