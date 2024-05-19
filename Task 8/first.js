//                        //    Q1 Create array containg five fruit name 
// let fruit = ["apple" , "orange" , "bannanaya" , "mango" , "gava"];


//                        //    Q2 Retrive the third element 
// let color = ["red" , "orange" , "green" , "yellow" , "blue"];
// color.splice(2,1,);
// console.log(color);


//                        //    Q3 Replace the second element with New York
// let city = ["London" , "Paris" , "Tokyo" , "Berlin" ];
// city.splice(2,1,"New York");
// console.log(city);


//                        //    Q4 add element strawberry in the end of fruit array 
// fruit.push("strawberry");
// console.log(fruit);


//                        //    Q5 remove last element in vegetables array
// let vegetables = ["Carrot" , "Broccoli" , "Asparagus" ];
// vegetables.pop();
// console.log(vegetables);


//                        //    Q6 add element Monday in the start of days array 
// let days = ["Sunday" , "Friday" , "Thursday" ];
// days.unshift("Monday");
// console.log(days);


//                        //    Q7 remove element  in the start of sports array 
// let sports = ["Soccer" , "Basketball" , "Tennis" ];
// sports.shift();
// console.log(sports);


//                        //    Q8 determine the length of array books 
// let books = ["1984" , "Brave New World" , "Fahrenheit" , "451" , "The Handmaid's Tale" ];
// console.log(books.length);


//                        //    Q9 combine two arrays of number
// let no1 = [1 , 2 , 3];
// let no2 = [4 , 5 , 6];
// let combined = no1.concat(no2);
// console.log(combined);


//                        //    Q10 slice first three element  in the start of name array 
// let name = ["John" , "Paul" , "George" , "Ringo" ];
// console.log(name.slice("3"));


//                        //    Q11 Remove two elements middle of an array countries
// let countries = ["London" , "Paris" , "Tokyo" , "Berlin" ];
// countries.splice(1,2,);
// console.log(countries);


//                         //   Q12 find the indx of banana in fruits array 
// let fruits = ["apple" , "orange" , "bannan" , "mango" , "gava"];
// let i = 0;
// for(let value in fruits){
//     if(fruits[value] == "bannan"){
//       console.log(i) ;
//     }
//   i ++;
// };


//                        //    Q13 check if "Australia" is in an array  of continents: print yes 
// let continents = ["Asia" , "Europe" , "Australia" , "North America" , "South America" , "Africa"];
// let i = 0;
// for(let value in continents){
//     if(continents[value] == "Australia"){
//       console.log(`Australia is at index of ${i}`) ;
//     }
//   i ++;
// };


//                        //    Q14 reverse the order of an elements in an array  of numbers
// let numbers = [1, 2 , 3 , 4 , 5];
//  console.log(numbers.reverse());


//                          //     Q15 sort an array of string alphabetically                                                     ?
// let sort = ["apple" , "cherry" , "bannan"];


//                         //     Q16 filter out numbers grater than 10 from an array  
// let num = [5, 12 , 8 , 20 , 15];
// let i = 0 ;
// for(let value in num){
//     if(num[value] > 10){
//         console.log(num[value]);
//     };
//     i ++
// };


//                             // Q17 creat a new array by doubling the  numbers in an array                                         ?
// let numb = [1 , 2 , 3 , 4 , 5];
// let i = 0 ;
// let sum = console.log(numb);
// for(let value in numb){
//     sum = sum + i ;
//     i ++
//     console.log(sum);
// };


//                         //     Q18 sum of all number in an array 
// let numbe = [1 , 2 , 3 , 4 , 5];
// let sum = 0 ;
// for(let val of numbe){
//     sum = sum + val ;    
// };
// console.log(sum);


//                         //     Q19 the first  numbers grater than 10  an array  
// let grater = [3, 7 , 14 , 5 , 20];
// let i = 0 ;
// for(let value in grater){
//     if(grater[value] > 10  ){
//         console.log(grater[value]);
//         console.log(`this value is at index of ${i}`);       
//     }; 
//     i ++   
// };


//                         //     Q20 find the index of first even  number                                                                ?
// let even = [3, 8 , 11 , 2, 14];
// let i = 0 ;
// for(let value of even){
//     if(even[value]/2 == 0){
//         console.log (value);
//     };
//    i ++
// };


//                         //     Q21 check if every  elements in array of ages is above 18 : print index number
// let ages = [22 , 34 , 18 , 40];
// let i = 0 ;
// for(let value in ages){
//     if(ages[value] > 18  ){
//         console.log(`this age is at index of ${i}`);
//         console.log(ages[value]);
//     };
//     i ++
// };


//                         //     Q22 check if some elements in array of scores are above 90 : print index number
// let scores = [85 , 92 , 88 , 76 , 95];
// let i = 0 ;
// for(let value in scores){
//     if(scores[value] > 90  ){
//         console.log(`this value is at index of ${i}`);
//         console.log(scores[value]);
//     };
//     i ++
// };


//                          //  Q 23 join all elements of an array into a single string, with element separated by comma
// let say = ["hello" , "World"];
// console.log(say.join());


//                         //  Q 24 what is the type of array ([])
// console.log(`the array([])   =  this is a undifine object`);


//                            // Q 25 create an array from a string
// let hello = "hello";
// console.log([hello]);


//                             // Q 26 check if a a variable is an array                                         ?
// let myVar = ["dog" , "cat" , "bird"];




//                             // Q 27 fill an array of length 5 with the value "A": [undifine , undifine , undifine , undifine , undifine]        ?
// let empty = [undefined , undefined , undefined , undefined , undefined]
// empty[0] = "A"
// empty[1] = "A"
// empty[2] = "A"
// empty[3] = "A"
// empty[4] = "A"
// console.log(empty);


//                            // Q 28 copy the first two elements of an array to the last two positions                     ?
// let positions = [ 1 , 2 , 3 , 4 , 5];




//                         // Q 29 convert an array of numbers into a string
// let convert = [1, 2 , 3 , 4 , 5]
//  let ab = convert.toString()
//  console.log(convert.toString());


//                         // Q 30 convert back to an array Q29                                            ?
// console.log([ab]);
// console.log(convert);


