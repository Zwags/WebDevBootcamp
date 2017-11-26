console.log("Loop 1! -10 to 19.")
for(var i = -10; i <=19; i++) {
  console.log(i);
}

console.log("Loop 2! All Evens. 10 to 40")

for(var i = 10; i <= 40; i++) {
  if(i % 2 === 0) {
      console.log(i);
  }
}

console.log("Loop 3! All Odds. 300 to 333")

for(var i = 300; i <= 333; i++) {
  if(i % 2 !== 0) {
      console.log(i);
  }
}

console.log("Loop 4! All divisable by 5 AND 3. 5 to 50")

for(var i = 5; i <= 50; i++) {
  if((i % 3 === 0) && (i % 5 === 0)) {
      console.log(i);
  }
}
