// let cash = 50
// let price = 40
// let isStoreOpen = false

// let str = cash>=40 && isStoreOpen ? 'give the receipt' : 'do not give receipt'
// console.log(str)

// let count = 1;

// while(count<=100){
//     console.log (count)
//     count++;

// }


// FOR LOOP

// for (let i = 0; i < 100; i +=2){
//     console.log(i)
// }


/** Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisible by either 3 or 5, print the number
 * 
 * @Example
 * 1->1
 * 2->2
 * 3-> "Frontend"
 * 4->4
 * 5->"Simplified"
 * ...
 * 15-> "Frontend Simplified"
 * ...
 * 20-> "Simplified"
 */

// for (let i = 1; i<=20; i++){

//     if(i % 3===0 && i % 3===0) {
//         console.log(`${i} Frontend Simplified`)
//     }
//     else if(i % 3===0) {
//         console.log(`${i} Frontend`)
//     }
//     else if(i % 5===0) {
//         console.log(`${i} Simplified`)
//     }
//     else{
//         console.log(`${i} -> ${i} `)
//     }

// }



// const str = "abcd"

// for (let i=0; i< str.length; ++i){
//     console.log(str[i])
// }


// FUNCTIONS: 

// DRY - Don't Repeeat Yourself

// //Function definition

// function welcomePersonToFES(firstName, lastName){
//     console.log(`Welcome to FES, ${firstName} ${lastName}`)

// }

// //Call the Function
// welcomePersonToFES('Anson','Chow');
// welcomePersonToFES('John','Doe');





// function sumOfTwoNumbers (num1, num2){
//    return  num1 + num2
// }

// console.log(sumOfTwoNumbers(10, 10))



// 1st way of defining a function:


// function convertCelsiustoFahrenheit(celsius){
//     let fahrenheit = celsius * 1.8 +32
//     return fahrenheit
// }

// console.log (convertCelsiustoFahrenheit(0))
// console.log (convertCelsiustoFahrenheit(10))
// console.log (convertCelsiustoFahrenheit(30))

// 2nd way of defining a function:

// const convertCelsiustoFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }


// console.log (convertCelsiustoFahrenheit(0))


// ARRAYS: 

// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100

// is the same as

// let arr = [20,30,40,50,100]

// //First element of array
// console.log(arr[0])

// //Last element of array:
// console.log(arr[arr.length-1])

// //Add element onto end of array:
// arr.push(200)

//[20, 30, 40, 50, 100]

// let newArr = arr.filter((element) => {
//     console.log(element)
//     if(element < 50){
//     return true;
//     }
// })

// console.log(newArr)

// console.log(arr)

// Same thing: You can remove the parenthesis around element if there is only one variable
// If there is only one line of code underneath, you can get rid of return


// let arr = [20,30,40,50,100]

// let newArr = arr.filter(element =>  element < 50)

// console.log(newArr)


/**
 * Filter out all the 'FAIL' elements in an array
 * 
 * @examples
 * ['A+,' 'A,' 'Fail'] => ['A+', 'A']
 * ['FAIL, 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

// let grades = ['A+', 'A', 'Fail'] 

// let goodGrades = grades.filter((element) => {
//     console.log (element)
//     if (element !== 'Fail'){
//     return true;
//     }
// })

// console.log (goodGrades)

// let grades = ['A+', 'A', 'Fail'] 

// let goodGrades = grades.filter(element => element !== 'Fail')

// console.log (goodGrades)


// let grades = ['A+', 'A', 'Fail'] 


// // Create a new empty array called 'goodGrades'
// let goodGrades = []

// for (let i = 0; i < grades.length; ++i){
//     if (grades[i] !== 'Fail'){
//         goodGrades.push (grades[i]);
//     }
//     // add the current element onto 'goodGrades only if
//     // the current element is not equal to 'Fail'
// }

// // console log 'goodGrades'
// console.log(goodGrades);


// let arr = [1,4,9,16]

// let newArray = arr.map ((element)=> {
//     console.log(element)
//     return undefined;
// })

// console.log (newArray)


// let arr = [1,4,9,16]

// let newArray = arr.map (element => 'dog');

// console.log (newArray);


/**
 * Turn each element in an array of dollars into cents
 * Long way
 * Short way
 * Without map method
 * 
 * @examples
 * [1, 5, 10, 30] => [100,500,1000,300]
 * [0,10,20] => [0,1000,2000]
 */

// let dollars = [1,5,10,3]

// let cents = dollars.map((element)=>{
//     console.log (element)
//     return element * 100
// })

// console.log (cents)

// let dollars = [1,5,10,3]

// let cents = dollars.map(element => element * 100)

// console.log (cents)

// let dollars = [1,5,10,3]

// let cents = []

// for (let i = 0; i < dollars.length; i++){
//     cents.push (dollars[i]*100)
// } 

// console.log(cents)





// Objects

// let userFirstName = 'Anson'
// let userLastName = 'Chow'
// let userDiscordId = 'Anson Chow#0001'
// let userSubscriptionStatus = 'VIP'

// let users = [

// {username: 'Anson',
// email: 'chow.anson25@gmail.com',
// password: 'test123',
// subscriptionStatus: 'VIP',
// discordId: 'Anson Chow#0001',
// lessonsCompleted: [0, 1]},

// {
// username: 'Mitri',
// email: 'Mitri@frontendsimplified.com',
// password: 'mitri123',
// subscriptionStatus: 'VIP',
// discordId: 'Mitri#0001',
// lessonsCompleted: [0, 1, 2 ,3, 4]
// },

// {
// username: 'Zen',
// email: 'Zen@frontendsimplified.com',
// password: 'zen123',
// subscriptionStatus: 'VIP',
// discordId: 'zen#0001',
// lessonsCompleted: [0, 1, 2 ,3, 4]
// },

// ];

// function login(email, password){
//     for (let i = 0; i < users.length; i++){
//     console.log('this ran@@@')
//     if (users[i].email === email){
//         console.log(users[i])
//         if (users[i].password === password){
//             console.log ('log the user in - the details are correct')
//         }
//         else {
//             console.log('password is incorrect - try again')
//         }
//         return;
//     }
// }
// console.log ('could not find an email that matches')
// }

// login('chow.anson25@gmail.com', 'test123')

// console.log(users[0].lessonsCompleted.map(elem => elem*2))


// console.log(users.username[0]);

// console.log(users.subscriptionStatus);

// console.log(users.lessonsCompleted. map(elem => elem *2));


/**
 * Create a register function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted 
 * 
 *  Inside your register function:
 *  1. Create a user object
 *  2. Push this user object onto the 'users' array
 */


// function register (user){  
//     users.push(user);

// }

// register(
//   { Username:'zen', 
//     email: 'zen@frontendsimplified.com',
//     password: 'zen123',
//     subscriptionStatus:'VIP', 
//     discordId: 'Zen#0002',
//     lessonsCompleted: [0, 1]
// });



// console.log(users);






//DOM Document Object Model

//First way of accessing an element

// console.log(document.querySelector('.title'))

// // To access ID: you use #
// // To access class: you use .


// //Second way of accessing an element
// console.log (document.getElementById ('title'))



// //Change HTML
// document.querySelector('.title').innerHTML += 'Frontend Simplified'

// //Change CSS
// document.querySelector('.title').style.fontSize = '50px'

// function changeTitleToRed(){
//     console.log('clicked');
//     document.querySelector('.title').style.color = 'red'

// }

function toggleDarkMode(){
   console.log(document.querySelector('body').classList.toggle("dark-theme"));
}