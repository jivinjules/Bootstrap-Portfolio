$(document).ready(function () {

//Adding moment.js to get clock at the top of the screen
var currentTime = moment();

//displays current time on the jumbotron
$('#clock').html(moment(currentTime).format('MMMM D. YYYY LT'));

function update() {
    $('#clock').html(moment().format('MMMM D. YYYY LT'));
}
setInterval(update, 60000);

})