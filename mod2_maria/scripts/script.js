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