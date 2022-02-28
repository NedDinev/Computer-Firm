function computerFirm(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;
  let models = input[index];
  let counter = 0;
  let lastDigit = 0;

  let rating = 0;
  let ratingCount = 0;

  let madeSales = 0;
  while (counter < n) {
    models = input[index];
    lastDigit = models % 10;
    counter++;
    index++;
    let possibleSales;
    switch (lastDigit) {
      case 2:
        possibleSales = models
          .toString()
          .substr(0, models.toString().length - 1);
        ratingCount += 2;
        rating = 0;
        

        break;
      case 3:
        possibleSales = models
          .toString()
          .substr(0, models.toString().length - 1);
        ratingCount += 3;
        rating = (possibleSales * 0.5).toFixed(1);
        
        break;
      case 4:
        possibleSales = models
          .toString()
          .substr(0, models.toString().length - 1);
        ratingCount += 4;
        rating = (possibleSales * 0.7).toFixed(1);
        break;
      case 5:
        possibleSales = models
          .toString()
          .substr(0, models.toString().length - 1);
        ratingCount += 5;
        
        rating = (possibleSales * 0.85).toFixed(1);
        break;
      case 6:
        possibleSales = models
          .toString()
          .substr(0, models.toString().length - 1);
        ratingCount += 6;
        rating = possibleSales;
        
        break;

      default:
        break;
    }
    rating = Number(rating);
    madeSales += rating;
    
  }

  console.log(madeSales.toFixed(2));
  console.log((ratingCount / n).toFixed(2));
}
computerFirm(["5", "122", "156", "202", "214", "185"]);
