/* jshint mocha: true, expr: true, strict: false */

function addStockToTable(stock) {
  var $row = $('<tr></tr>');

  $row.append('<td>' + stock.Name + '</td>');
  $row.append('<td>' + stock.Symbol + '</td>');
  $row.append('<td>' + stock.LastPrice + '</td>');

  $('tbody').append($row);

  return $row;
}


function getStock(symbol, cb) {
  var url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + symbol;

  $.get(url, function(data) {
    return cb(data);
  }, 'jsonp');
}

function hello() {
  return 'world';
}

