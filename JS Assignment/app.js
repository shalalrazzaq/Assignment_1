//Reverse a number
/*function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));*/
// Palindrome String
/*
function checkPalindrome(string) {

    // find the length of a string
    var len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
var string = prompt('Enter a string: ');

// call the function
var value = checkPalindrome(string);

console.log(value);
*/
// Combinations of String
// function combString(str){
//     var lenStr = str.length;
//     var result = [];
//     var indexCurrent = 0;

//     while(indexCurrent < lenStr){
//         var char = str.charAt(indexCurrent);
//         var x;
//         var arrTemp = [char];

//         for(x in result) {
//             arrTemp.push(""+result[x]+char);
//         }
//         result = result.concat(arrTemp);

//         indexCurrent++;
//     }

//     return result;
// }

// console.log(combString("Dog"));

/// alphabatical order
// function alphabet_order(str)
//   {
// return str.split('').sort().join('');
//   }
// console.log(alphabet_order("webmaster"));

// Converting to uppercase
// function uppercase(str)
// {
//     var array1 = str.split(' ');
//     var newarray1 = [];
      
//     for(var x = 0; x < array1.length; x++){
//         newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//     return newarray1.join(' ');
//   }
//   console.log(uppercase("the quick brown fox"));

// // Find longest word
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// Function that counts the highest number of vowels
// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));

// function that checks a prime number
// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// console.log(test_prime(58));

// Function that detects a data type

// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
    
//     return typeof value;
// }
// console.log(detect_data_type(56));
// console.log(detect_data_type('Hello'));
// console.log(detect_data_type(false));

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));