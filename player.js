

 var player = JSON.parse(localStorage.getItem("team2Player"))
 console.log(player)
$(document).ready(() => {
    var division = $("#division")
    var details = $("<div>").attr("id", "details")
    var image1 = $("<img>").attr("src", player.photo).attr("id", "photo")
    division.append(image1)
    var namec = $("<div>").attr("id", "namec")
    var name = $("<h1>").text(player.name)
    var tname = $("<h5>").attr("id", "teamName").text(player.team)
    namec.append(name, tname)
    var type = $("<h2>").text("Type: " + player.Role)
    var price = $("<h3>").text("Price: " + player.price)
    var status = $("<h3>").text("Status: " + player.playingStatus)
    details.append(namec, type, price, status)
    division.append(details)
    var img2 = $("<img>").attr("src", player.logo).attr("id", "logo")
    division.append(img2)
     if (player.team == "Chennai Super Kings") {
         division.css({ "background": "linear-gradient(70deg, yellow,orange" })
         tname.css({"color":"goldenrod"})
    }
    if (player.team == "Delhi Capitals") {
        division.css({ "background": "linear-gradient(70deg, blanchedalmond,blue)" })
        tname.css({"color":"#fc8a00"})
    } if (player.team == "Kolkata Knight Riders") {
        division.css({ "background": "linear-gradient(70deg, rgb(58, 1, 58), 70%,goldenrod)" })
        tname.css({"color":"royalblue"})
    } if (player.team == "Mumbai Indians") {
        division.css({ "background": "linear-gradient(70deg, rgb(52, 52, 197), 70%,silver)" })
        tname.css({"color":"darkblue"})
    } if (player.team == "Punjab Kings") {
        division.css({ "background": "linear-gradient(70deg, rgb(247, 30, 30), 70%,silver)" })
        tname.css({"color":"white"})
    } if (player.team == "Rajasthan Royals") {
        division.css({ "background": "linear-gradient(70deg,blue, 30%,rgb(226, 89, 112)" })
        tname.css({"color":"royalblue"})
    } if (player.team == "Royal Challengers Bangalore") {
        division.css({ "background": "linear-gradient(70deg, red, 60%,black)"})
        tname.css({"color":"white"})
    } if (player.team == "Sunrisers Hyderabad") {
        division.css({ "background": "linear-gradient(70deg, #fc8a00, 60%,grey)"})
        tname.css({"color":"yellow"})
    }
})