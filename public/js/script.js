$(document).ready(function () {
    // DO NOT TOUCH THIS LINE BELOW
    // $('.mdb-select').materialSelect();


    $(".report-form").on("submit", function (event) {
        event.preventDefault();
  
        var hood_id = $(this).children(".hood_id").val();
        var date_id = $(this).children(".date_id").val();
        var arrest_id = $(this).children(".arrest_id").val();
        var type_id = $(this).children(".type_id").val();
        var desc_id = $(this).children(".desc_id").val();

        console.log(hood_id, date_id, arrest_id, type_id, desc_id)
        $.ajax({
            method: "POST",
            url: "/report/" + hood_id, date_id, arrest_id, type_id, desc_id
        }).then(function (data) {
            // SHOULD WE MAKE A NEW TABLE JUST FOR WHEN THINGS ARE REPORTED??
            location.reload();
        })
  
    })
// ("submit", function (event)
    $(".searchForm").on("submit", function(event) { 
        event.preventDefault();
        debugger
        // var loc = [];
        //var neighborhood = $('#hood').find(':selected').val()
        var neighborhood = "{\"lat\":\"41.987\",\"long\":\"-87.662\"}"
        // loc.push(neighborhood)
        console.log(neighborhood);
        // neighborhood = event.target.value;
        // loc.push(neighborhood);
        // console.log(neighborhood);
        // console.log(loc)
        
    

  
        // // var neighborhood = $(this).children(".neighborhood").val();

        // console.log(event)
        $.ajax({
            method: "GET",
            url: "/map/neighborhood?neighborhood=" + neighborhood
        }).then(function (data) {
            // SHOULD WE MAKE A NEW TABLE JUST FOR WHEN THINGS ARE REPORTED??
            // location.reload();
            console.log(data)
        })

  });

});
