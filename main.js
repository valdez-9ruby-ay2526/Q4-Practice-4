function opengate() {
    let carCounter = 18;
    const maxCars = 25;

    while (carCounter < maxCars) {
        window.alert("Car Number " + carCounter + "is entering"); 
        carCounter += 1;
    }
    window.alert("Full parking") 
}
