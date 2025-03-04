/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';


//higher order function 
let array = [1,2,3]
let a = array.map(number => number*5) // output 5,10,15
console.log(a)

setTimeout(()=> console.log(("hi"),1000));

//normal way of thinking
let input = "  FuncTional  "
let output ="<div>"+ input.trim()+"</div>"
console.log(output);

//functional way of thinking , best practice

const trim = (str: string) =>str.trim()
const wrapInDiv = (str: any) =>`<div>${str}</div>`
const toLowerCase = (str: string) => str.toLowerCase


const r = wrapInDiv(trim(input))
const result = wrapInDiv((trim(input)))

console.log(r)
console.log(result)

//npm i lodash // it is a library, here itnis for compse and piping
// const transform = compose(wrapInDiv, toLowerCase, trim)// it is from right to left
//const transform = pipe(trim,  toLowerCase,(wrapInDiv )// orderwise
//console.log(transform(input));

//curing // implement multiple arguments in function , and exceute 1 by 1

//pure function  - advantage: cachable, concurrency
function randomNumber(number: number){
  return number *3 // here we give numbers as 1 we giveas 3 .

}
let num = randomNumber(1)
console.log(num)

//impure function
function eligibleToVote(age: number){
  return age > 18  // herewe give as 23,17 it is changed 
}
let votingAge = eligibleToVote(20)
console.log(votingAge)


function App(){

}

 

export default App;