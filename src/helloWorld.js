
    // console.log(23 + 97);
    // console.log(1 + 2 + 3 + 4 + 5 + 6);
    // console.log((4 + 6 + 9) / 77);
    // let a = 10;
    // console.log(a);
    // console.log(9 * a);
    // let b = 7 * a;
    // console.log(b);
    // let max = 57;
    // let actual = max - 13;
    // let percentage = actual/max;
    // console.log(percentage);
    // const a = 1;
    // const b = 1;
    // let result = "a" + "b";
    // console.log(result);
    // result = a + b;
    // console.log(result);
    // const birthYear = 1948;
    // const thisYear = 1965;
    // const firstName = "Carlos";
    // const lastName = "Stevenson";
    // const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";
    // console.log(greeting)
    // function add7 (number) {
    //     return number + 7;
    // }
    // console.log(add7(7));
    // function multiply (first, second) {
    //     return first * second;
    // }
    // console.log(multiply(5,4));
    // let textTest = "text"
    // function capitalize (text = ""){
    //     var lower = text.toLowerCase();
    //     var first = text.charAt(0);
    //     return first.toUpperCase() + lower.substring(1,lower.length);
    // }
    // console.log(capitalize(textTest));
    // function lastLetter (text = "") {
    //     return text.charAt(text.length-1)
    // }
    // console.log(lastLetter(textTest));
    function alertFunction() {
        alert("YAY! YOU DID IT!");
      }
      
    // METHOD 2
    const btn = document.getElementsByClassName("btn");
    btn[0].onclick = alertFunction;
      
    // METHOD 3
    btn[0].addEventListener('click', alertFunction);
    btn[0].addEventListener('click', function (e) {
      console.log(e);
    });
    btn[0].addEventListener('click', function (e) {
      console.log(e.target);
    });
    btn[0].addEventListener('click', function (e) {
      e.target.style.background = 'blue';
    });