import { dictionaries } from "../models/dictionaries";

const dec = new dictionaries<string,number>()

dec.set("a",111)
dec.set("b",2)
dec.set("a",1)

dec.forEach((e,i) =>{
    console.log(e,i)
})

console.log(dec.has("c"))

dec.del("a")
dec.set("c",3)

console.log(dec.size)