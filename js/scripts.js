// Business Logic for AddressBook ---------
var places = function(locations, landmarks, season, notes) {
  this.locations = locations;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

var rlyeh = new places("cthulus eternal slumber sleepover", "deadspire", "rainy", "run");

var europa = new places("saturn's moon", "white and big", "-10000 degrees f", "bring a sweater weather");

var ashai = new places("melisandres birthing home", "dark and cold", "magical acid", "don't not bring children");



//Front End Code
$(document).ready(function(){
  $("#rlyeh").click(function(event){
    $("#rlyehOutput").show();
    $("#europaOutput").hide();
    $("#ashaiOutput").hide();
    $("#rlyehOutput").text(Object.values(rlyeh));
  });
  $("#europa").click(function(event){
    $("#rlyehOutput").hide();
    $("#europaOutput").show();
    $("#ashaiOutput").hide();
    $("#europaOutput").text(Object.values(europa));
  });
  $("#ashai").click(function(event){
    $("#rlyehOutput").hide();
    $("#europaOutput").hide();
    $("#ashaiOutput").show();
    $("#ashaiOutput").text(Object.values(ashai));
  });

  event.preventDefault();
  });
