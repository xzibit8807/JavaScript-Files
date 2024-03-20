function areaOfFigure(input){
    let type = input[0];
    
    if (type === "square"){
        let side = Number(input[1]);
        let result = side * side;
        console.log(result.toFixed(3));
    }
}

areaOfFigure(["square","5"])