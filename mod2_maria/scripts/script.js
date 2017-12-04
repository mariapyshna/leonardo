var rawData


$.getJSON("data/senate.json", function(data) {
    rawData = data;

    console.log(data);
    buildTable()
})


function buildTable() {

    console.log("Bilding Table")
    var table = $("#politicians")
    $.each(rawData.results[0].members, function(index, member) {

        console.log(member)
        var tr = $("<tr>")

        var fullName = [member.first_name, member.middle_name, member.last_name].filter(function(v) { return v !== null }).join(" ")

        var link = $("<a>").text(fullName).attr("href", member.url)
        $("<td>").append(link).appendTo(tr)

        $("<td>").text(member.party).appendTo(tr)

        $("<td>").text(member.state).appendTo(tr)

        $("<td>").text(member.seniority).appendTo(tr)

        $("<td>").text(member.votes_with_party_pct).appendTo(tr)



        table.append(tr)

    })
}





var dataHandler = new DataHandler();
dataHandler.init();
dataHandler.loadJsonFile();

console.log(dataHandler)


$(document).on("ready", function() {
    console.log("document loaded...")
})

// $(document).on("click", function(){
// 	console.log("document clicked...")
// } )

$("#myTextInput").on("change", function() {
    console.log("change...");
    $("#textValue").text($(this).val())
})

$("#myTextInput").on("focus", function() {
    console.log("focus...");
    $(this).css("background", "red");
})

$("#myTextInput").on("blur", function() {
    console.log("blur...");
    $(this).css("background", "white");
})

$("#myTextInput").on("blur", function() {
    console.log("blur...");
    $(this).css("background", "white");
})


$("#myTextInput").on("keydown", function() {
    console.log("keydown...");

})
$("#myTextInput").on("keyup", function() {
    console.log("keyup...");
    $("#textValue").text($(this).val())
})
$("#myTextInput").on("keypress", function() {
    console.log("keypress...");
})


$("#filter input[type=checkbox]").on("change",function(){
	console.log("checkbox change");

	tgifFilter.updateParty( $(this).val(), $(this).prop("checked") )
})


// $("#myTextInput").change(function(){
// 	console.log("change with _change_")
// })



function Filter (){

	this.D = true;
	this.R = true;
	this.I = true;

	this.activeState = "";

	this.updateParty = function(party, checked) {
		console.log("should update parties now...", party, checked)


		// if(party == "D"){
		// 	if(checked){
		// 		this.D = true
		// 	} else{
		// 		this.D = false
		// 	}
		// }

		// ..better
		this[party] = checked;



		dataHandler.updateTable();

	}

}
var tgifFilter = new Filter();

console.log(tgifFilter);
