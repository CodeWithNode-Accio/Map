
let arr = [10,20,10,10,20,10,20,10,10,10,30,40,30]


let map = new Map() 
/* {
    10 => 1,
    20 => 1
    



} */

for(let t of arr){
    if(map.has(t)){ // t already exists in the map
       let v = map.get(t) //1
         map.set(t, v+1) // (20, 2)

    }
    else{ // t does not exist in the map
       map.set(t, 1)
    }
}

console.log(map)


for(let t of map){
    console.log(t[1])
}