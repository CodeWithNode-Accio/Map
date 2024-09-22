let arr1 = ["eat", "tea",  "ate"]


// check if string inside array are anagram of each other or not

let m = new Map()
for(let t of arr1[0]){
    if(m.has(t)){
        let v = m.get(t)
        m.set(t, v+1)
    }
    else{
        m.set(t, 1)
    }
}

console.log(m)

for(i = 1; i<=arr1.length-1; i++){

    let sub = arr1[i] // tea
    let flag = 0
    for(let t of sub){
        if(m.has(t) == false){
            console.log("Not anagram")
            flag = 1
            break
        }
    }
    if(flag == 0){
        console.log("Anagram")
    }
    

}






