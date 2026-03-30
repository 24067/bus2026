const timelst =[
    [445,452,480,570,645,705,765,825,885,945,1005,1035,1095,1170,1230,1260,1290,1323,1355],
    [405,420,453,485,525,585,645,705,765,825,885,945,1005,1065,1112,1170,1230,1290,1320,1380,1395,]
];


window.onload = function(){
    const now = new Date();              //時間
    const youbi = now.getDay();          //曜日
    if (youbi == 0 || youbi == 6){      
        document.getElementById("doniti").style.display = "table";      //日曜(0)か土曜(6)なら土日の表を表示   
    }else {
        document.getElementById("heijitu").style.display = "table";
    }
}

let ho = 0;

function nextbus(){
    const now = new Date();              //時間
    const youbi = now.getDay();          //曜日
    const hour = now.getHours();         //時間
    const minute = now.getMinutes();     //分
    const now_time = hour*60 + minute;   //今の時間を分に
    let u = 0;
    let found = 0;
    if (ho == 1){                      //祝日ボタン押されていたら
        youbi = 0;
    }
    if (youbi == 0 || youbi == 6){    //日曜(0)か土曜(6)ならリスト0を使用
        targetlst = timelst[0];       //日か土をえらんだら1
        u++;
    }else {
        targetlst = timelst[1];
    }

    for (let i = 0; i < targetlst.length; i++){      //現在時刻の次のバスの時刻を表示
        let bus_time = targetlst[i];
        if (bus_time > now_time){
            let bus_hour = Math.floor(bus_time / 60);
            let bus_minute = bus_time % 60;
            if (bus_minute < 10){
                bus_minute = "0" + bus_minute;
            }
                    
            let new_bus = bus_hour + ":" + bus_minute      
            if ((u == 1 && i >14) || (u == 0 && i > 18)){   //天郷なら追加
                new_bus ="天郷" + new_bus;
            }
            document.getElementById("hyouji").innerHTML = new_bus;
            found++;
            break;
        }
    }
    if (found == 0){                                        //本日バスがないなら
        document.getElementById("hyouji").innerHTML = "無";
    }
}


//[戻る]ボタンの動き
function showback(){
    window.location.href = "index.html";
}

//時刻表ボタンの
function timetable(){
    window.location.href = "timetable.html";
}

//祝日ボタンの
function holiday(){
    ho = 1;
    if (document.getElementById("heijitu").style.display = "table"){
        document.getElementById("heijitu").style.display = "none";
        document.getElementById("doniti").style.display = "table";
    }
}
