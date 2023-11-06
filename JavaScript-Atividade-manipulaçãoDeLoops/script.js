// function verticalText(text){
//     for(let i = 0; i < text.length; i++){
//         console.log(text[i])
//     }
// }

// verticalText("Frontend")



// function incrementText(str){
//     let result = "";

//     for(let i = 0; i < str.length; i++){
//         result += str[i];
//         console.log(result);
//     }

// }
// incrementText("Backend")


// function incrementTextBackwars(str){
//     let result = "";

//     for(let i = str.length - 1; i >= 0; i--){
//         result = str[i] + result
//         console.log(result)
//     }
// }

// incrementTextBackwars("Fullstack")




// function padEnd(text, numRepeat, textRepeat){
//     let result = text;

//     for(let i = 0; i < numRepeat; i++){
//         result += textRepeat;

//     }

//     return result;
// }

// console.log(padEnd("Kenzie", 5, "foo"))
// console.log(padEnd("Kata", 8, "*"))




// function subString(text, stratPosition, endPosition){
//     let result = "";

//     for(let i = 0; i< text.length; i++){
//         if(i > stratPosition && i < endPosition){
//             result += text[i];
//         }
//     }
//     return result;
// }

// console.log(subString("Mozilla",0,4))
// console.log(subString("Chrome",3,5))



// function stringRepeater(text, numRepeat){
//     let result = "";

//     for(let i = 0; i< numRepeat; i++){
//         result += text
//     }
//     return result;
// }

// console.log(stringRepeater("Because I'm happy",3))



// function stringCentralizer(text, numRepeat, textRepeat){
//     let result = ` ${text} `;


//     for(let i = 0; i < numRepeat; i++){
//         result = textRepeat + result + textRepeat;
        
//     }

//     return result;
// }

// console.log(stringCentralizer("JavaScript",8, "="))


// function stringMin(string){
//     let stringEmArray = []

//     for(let i = 0; i < string.length; i++){
//         stringEmArray.push(string[i]);
//     }
//     return stringEmArray
// }

// console.log(stringMin("TESTE"))


