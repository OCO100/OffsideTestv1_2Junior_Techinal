input_string = "bbbaacdafe"
// input_string = "bbbbcbaacdafe"
// input_string = "bbb"

function is_beautiful_string(input_string) {
    let array = input_string.split('').sort()
    let max = array.length
    if(max<3 || max >50)
      return false
    let unique = [...new Set(array)];
    let duplicates = unique.map(value => [value,array.filter(str => str === value).length]);
    for(let i =0 ;i<duplicates.length-1;i++)
      if(duplicates[i][1]<duplicates[i+1][1])
         return false
  return true
}

let result = is_beautiful_string(input_string)
console.log(result)