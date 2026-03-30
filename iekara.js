const timelst =[
    [399,430,459,532,579,654,714,774,834,894,954,1030,1043,1117,1168,1234],
    [383,429,469,482,537,580,655,715,775,835,895,977,1021,1042,1110,1136,1166,1225,1285,1345,]
];

window.onload = function(){
    let now = new Date();              
    let youbi = now.getDay();          //曜日
    let hour = now.getHours();         //時間
    let minute = now.getMinutes();     //分

    let now_time = hour*60 + minute;   //今の時間を分に
    let found = 0;
    let targetlst;
    if (youbi == 0 || youbi == 6){    //日曜(0)か土曜(6)ならリスト0を使用
        document.getElementById("doniti").style.display = "table";      //日曜(0)か土曜(6)なら土日の表を表示
        targetlst = timelst[0];       
    }else {
        document.getElementById("heijitu").style.display = "table";
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
                    
            let new_bus = bus_hour + ":" + bus_minute;      
            
            document.getElementById("hyouji").innerHTML = new_bus;
            found++;
            break;
        }
    }
    if (found == 0){                                        //本日バスがないなら
        document.getElementById("hyouji").innerHTML = "バス無し";
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
    if (document.getElementById("heijitu").style.display == "table"){
        document.getElementById("heijitu").style.display = "none";
        document.getElementById("doniti").style.display = "table";
    }

    let now = new Date();             
    let hour = now.getHours();         //時間
    let minute = now.getMinutes();     //分

    let now_time = hour*60 + minute;   //今の時間を分に
    let found = 0;
    let targetlst = timelst[typeIdx];
    targetlst = timelst[0];

    for (let i = 0; i < targetlst.length; i++){      //現在時刻の次のバスの時刻を表示
        let bus_time = targetlst[i];
        if (bus_time > now_time){
            let bus_hour = Math.floor(bus_time / 60);
            let bus_minute = bus_time % 60;
            if (bus_minute < 10){
                bus_minute = "0" + bus_minute;
            }
                    
            let new_bus = bus_hour + ":" + bus_minute      
            
            document.getElementById("hyouji").innerHTML = new_bus;
            found++;
            break;
        }
    }
    if (found == 0){                                        //本日バスがないなら
        document.getElementById("hyouji").innerHTML = "バス無し";
    }
}
