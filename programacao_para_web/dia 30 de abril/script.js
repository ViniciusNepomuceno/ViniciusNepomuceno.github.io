function sortear(max, min){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

for (let i = 0; i < 3; i++) {
    console.log(`Iteração ${i + 1}`);
}