
let str = "abcdeadadcc"

// First non repeating character

let map = new Map()

/* 
  {
   a => 4
    b => 1
    c => 1
    d => 1
    e => 1
}
*/

for(let t of str){

    if(map.has(t)){
        let v = map.get(t)
        map.set(t, v+1)
    }

    else{
        map.set(t, 1)
    }

}

console.log(map)


for(let t of map){
      console.log(t) //[k, v]
    // if(t[1] == 1){
    //     console.log(t[0])
    //     break
    // }   
}