/* jshint jquery: true */
/* global async: false */

function refreshStockPrices(stocks) {
  var $trs = $('tr');

  _.forEach(stocks, function (stock, i) {
    $($($trs[i]).find('td')[3]).text(stock.LastPrice);
  });
}

function addStockToTable(stock) {
  var $row = $('<tr></tr>');

  $row.append('<td>' + stock.Name + '</td>');
  $row.append('<td>' + stock.Symbol + '</td>');
  $row.append('<td>' + stock.LastPrice + '</td>');
  $row.append('<td>' + stock.LastPrice + '</td>');

  $('tbody').append($row);

  return $row;
}

function getStock(symbol, cb) {
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol;

  $.get(url, function (res) {
    return cb(res);
  }, 'jsonp');
}

function getMultipleStocks(symbols, cb) {
  async.map(symbols,
    function (symbol, innercb) {
      getStock(symbol, function(stock){
        innercb(null, stock);
      });
    },
    function (err, stocks){
      cb(stocks);
    }
  );
 }

function hello() {
  return 'world';
}


/*[>  THIS IS THE NEW FUNCTION BELOW <]*/


 //var stocks = [
      //{ Symbol: 'AAPL', LastPrice: 12.45 },
      //{ Symbol: 'MSFT', LastPrice: 23.56 }
    //];

//function refreshStockPrices(obj) {
   //[> for each object, check whether the symbol matches the row <]

  //.forEach(obj) function ( ) {            }


    //[> if the symbol matches the row...  The syntax isn't right here. <]

    //if (obj[i].Symbol) === $trs

    //[> replace the text in the 3rd 'td' space with the (obj[i].Symbol) <]

       //replace ('td')[3].obj[i].LastPrice;


//[> This is the middle part of the function I used to check the syntax of the object call:  <]

 //return obj[0].Symbol;


//[> BELOW HERE IS THE TEST THAT GOES WITH THE FUNCTION WE'RE SUPPOSED TO BE WRITING <]

//describe('refreshStockPrices', function (){
  //it('should edit each stock in the table with a new price', function () {
    //var stocks = [
      //{ Symbol: 'AAPL', LastPrice: 12.45 },
      //{ Symbol: 'MSFT', LastPrice: 23.56 }
    //];

      //$tbody = $('tbody'),
      //$trs   = $('tr');

    //$('tbody').append('<tr><td> Apple Inc </td><td> 12.45</td><</tr>');
    //$('tbody').append('<tr><td>Microsoft Corp</td><td>23.56</td><</tr>');

    //refreshStockPrices(stocks);

    //$($($trs[0]).find('td')[3]).text().should.equal('12.45');
    //$($($trs[1]).find('td')[3]).text().should.equal('23.56');
  //});
//});


