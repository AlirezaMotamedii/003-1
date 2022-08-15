

// Varibale
let sum  = ""
let sum1 = ""
let sum2 = ""

// End Var

// Harf Kochak

for (let i = 0; i < 2; i++) {

    let random1 = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    sum = sum + random1;
}

// End Harf Kochak
// Harf Bozorg

for (let a = 0; a < 2; a++) {

    let random2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    sum1 += random2;
}

// End Harf Bozorg
// Adad 3 Raghami

for (let b = 0; b < 3; b++) {

    let random3 = Math.floor(Math.random()*10);
    sum2 += random3

}

// End Adad

console.log(sum + sum2 + sum1)



