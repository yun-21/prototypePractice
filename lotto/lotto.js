const lotte = () => {
    const array = [];
    while (array.length < 6) {
        const random = Math.floor((Math.random() * 45) + 1);
        if(array.includes(random)){
            continue;
        }
        else{
            array.push(random)
        }
    }
    return array
}
console.log(lotte())