function vacationBooksList (input){
    let pagesCount = Number(input[0]);
    let pagesPerHouer = Number(input[1]);
    let Days = Number(input[2]);

    let TotalHouers = pagesCount / pagesPerHouer;
    let houersPerDay = TotalHouers / Days;

    console.log(houersPerDay);

}

vacationBooksList (["212", "20", "2"])