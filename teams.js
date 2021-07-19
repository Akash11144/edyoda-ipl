console.log("Script loaded!!!")

let tarr=JSON.parse(localStorage.getItem("homeToTeamP"));
let teamm=JSON.parse(localStorage.getItem("homeToTeam"));
let ask=teamm.name


$(document).ready(function ()
 {
    console.log("dom ready")
    $("#teamLogo > img").attr("src",teamm.icon)
    $("#detail> p:nth-of-type(1)").text(teamm.name)
    $("#detail> p:nth-of-type(2)").text("Championships Won :  "+teamm.champions)
    $("#detail> p:nth-of-type(3)").text("Total Players :  "+teamm.playerCount)


    for( var i=0; i<tarr.length;i++){
     if(teamm.topBatsman==tarr[i].name){
         $("#bestbat > img").attr("src",tarr[i].photo)
         $("#bestbat > p").text(tarr[i].name)
     }
    }

    for( var i=0; i<tarr.length;i++){
        if(teamm.topBowler==tarr[i].name){
            $("#bestbowl > img").attr("src",tarr[i].photo)
            $("#bestbowl > p").text(tarr[i].name)
        }
       }



    for (let i = 0; i < tarr.length; i++)
    {
        if(ask==tarr[i].team)
        {
            $("#teamname").text("Indian Premier League")
            let card = $('<div>').append(
                $('<div>').append($('<img>').attr("src", tarr[i].photo)).addClass("imgC"),
                $('<div>').append(
                    $('<h4>').text(tarr[i].name),
                    $('<h5>').text("Price: " + tarr[i].price),
                    $('<h5>').text(tarr[i].playingStatus),
                    $('<h5>').text(tarr[i].Role),
                ).addClass("info")
            );
            $('#cardContainer').append(card);
            $(card).click((e)=>
            {
                let re=e.delegateTarget.children[1].firstElementChild.innerText
                for(let i=0;i<tarr.length;i++)
                    if(re==tarr[i].name){
                     localStorage.setItem("team2Player",JSON.stringify(tarr[i]));
                     window.open("player.html","_self")
                    }
                
            })
        }


    }
//    ------------------------------------



$('#addP').on(
    {
        // name: "Shabaz Nadeem",
        // photo: "https://static.iplt20.com/players/210/57.png",
        // team: "Sunrisers Hyderabad",
        // price: "Rs 0.3 Million",
        // playingStatus: "On-bench",
        // Role: "Bowler"
        'click':()=>{
            $('#inputTaker div').remove();
            $('#inputTaker').css("display","block");
            $('#inputTaker').append(
                            $('<div>').append(
                                $('<label>').text('Enter player Name'),
                                $('<input>').attr("id","playername")
                            ),
                            $('<div>').append(
                                $('<label>').text('Enter link for photo'),
                                $('<input>').attr("id","playerphoto")
                            ),
                            $('<div>').append(
                                $('<label>').text('Enter player team'),
                                $('<input>').attr(
                                    {
                                         "id":"playerteam",
                                         "value":ask,
                                         "disabled":true
                                    })
                            ),
                            $('<div>').append(
                                $('<label>').text('Enter price for player'),
                                $('<input>').attr("id","playerprice")
                            ),
                            $('<div>').append(
                                $('<label>').text('Enter playing Status'),
                                $('<input>').attr("id","playerstatus")
                            ),
                            $('<div>').append(
                                $('<label>').text('Enter role of player'),
                               $('<input>').attr("id","playerrole")
                            ),
                            $('<div>').append(
                                $('<button>').text('Submit').click(()=>
                                {
                                        let a=document.getElementById("playername").value
                                        let b=document.getElementById("playerphoto").value
                                        let c=document.getElementById("playerteam").value
                                        let d=document.getElementById("playerprice").value
                                        let e=document.getElementById("playerstatus").value
                                        let f=document.getElementById("playerrole").value
                                        if(a==""||b==""||c==""||d==""||e==""||f=="")
                                            alert("fill all details")
                                            else
                                            {
                                                let r=
                                                {
                                                    name:a,
                                                    photo:b,
                                                    team:c,
                                                    price:d,
                                                    playingStatus:e,
                                                    Role:f
                                                }

                                                    let uuu=JSON.parse(localStorage.getItem('homeToTeamP'));
                                                    uuu.push(r);
                                                    localStorage.setItem('homeToTeamP',JSON.stringify(uuu));

                                                    let card = $('<div>').append(
                                                        $('<div>').append($('<img>').attr("src", b)).addClass("imgC"),
                                                        $('<div>').append(
                                                            $('<h4>').text(a),
                                                            $('<h5>').text("Price: " + d),
                                                            $('<h5>').text(e),
                                                            $('<h5>').text(f),
                                                        ).addClass("info")
                                                    );
                                                    $('#cardContainer').append(card);
                                                    document.getElementById("playername").value=""
                                                    document.getElementById("playerphoto").value=""
                                                    document.getElementById("playerteam").value=""
                                                    document.getElementById("playerprice").value=""
                                                    document.getElementById("playerstatus").value=""
                                                    document.getElementById("playerrole").value=""

                                                    $('#inputTaker').css("display","none");
                                                    localStorage.setItem("playerdata",JSON.stringify(larr));

                                                    $(card).click((e)=>
                                                    {
                                                        window.open("teams.html","_self");
                                                        
                                                    })
                                                
                                            }

                                }),
                                $('<button>').text("close").click(()=>$('#inputTaker').css("display","none"))
                            )
                            
            )
        }
    }
)





// ---------------------------------------





        if (ask == "Chennai Super Kings") {
            $('.imgC').css({ "background": "linear-gradient(70deg, yellow,orange" })
            $('.info').css({ "background": "linear-gradient(70deg, yellow,orange" })
            $("main").css({"backgroundColor":"#eed202"})
       }
       if (ask == "Delhi Capitals") {
           $('.imgC').css({ "background": "linear-gradient(70deg, blanchedalmond,blue)" })
           $('.info').css({ "background": "linear-gradient(70deg, blanchedalmond,blue)" })

           $("main").css({"backgroundColor":"#000080"})
       } if (ask == "Kolkata Knight Riders") {
           $('.imgC').css({ "background": "linear-gradient(70deg, rgb(58, 1, 58), 70%,goldenrod)" })
           $('.info').css({ "background": "linear-gradient(70deg, rgb(58, 1, 58), 70%,goldenrod)" })

           $("main").css({"backgroundColor":"#800080"})
       } if (ask == "Mumbai Indians") {
           $('.imgC').css({ "background": "linear-gradient(70deg, rgb(52, 52, 197), 70%,silver)" })
           $('.info').css({ "background": "linear-gradient(70deg, rgb(52, 52, 197), 70%,silver)" })

           $("main").css({"backgroundColor":"slategrey"})
       } if (ask == "Punjab Kings") {
           $('.imgC').css({ "background": "linear-gradient(70deg, rgb(247, 30, 30), 70%,silver)" })
           $('.info').css({ "background": "linear-gradient(70deg, rgb(247, 30, 30), 70%,silver)" })
           

           $("main").css({"backgroundColor":"pink"})
       } if (ask == "Rajasthan Royals") {
           $('.imgC').css({ "background": "linear-gradient(70deg,blue, 30%,rgb(226, 89, 112)" })
           $('.info').css({ "background": "linear-gradient(70deg,blue, 30%,rgb(226, 89, 112)" })

           $("main").css({"backgroundColor":"#e75480"})
       } if (ask == "Royal Challengers Bangalore") {
           $('.imgC').css({"background": "linear-gradient(70deg, red, 60%,black)"})
           $('.info').css({ "background": "linear-gradient(70deg, red, 60%,black)"})
           $("main").css({"backgroundColor":"darkred"})
       } if (ask == "Sunrisers Hyderabad") {
           $('.imgC').css({ "background": "linear-gradient(70deg, #fc8a00, 60%,grey)"})
           $('.info').css({ "background": "linear-gradient(70deg, #fc8a00, 60%,grey)"})
           $("main").css({"backgroundColor":"#ff8c00"})
       }
})
