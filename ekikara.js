const timelst =[
    [445,452,480,570,645,705,765,825,885,945,1005,1035,1095,1170,1230,1260,1290,1323,1355],
    [405,420,453,485,525,585,645,705,765,825,885,945,1005,1065,1112,1170,1230,1290,1320,1380,1395,]
];

window.onload = function(){
    localStorage.setItem("number", "1");
    let now = new Date();              
    let youbi = now.getDay();          //曜日
    let hour = now.getHours();         //時間
    let minute = now.getMinutes();     //分
    let targetlst;
    let now_time = hour*60 + minute;   //今の時間を分に
    let u = 0;
    let found = 0;
    if (youbi == 0 || youbi == 6){    //日曜(0)か土曜(6)ならリスト0を使用
        document.getElementById("doniti").style.display = "table";      //日曜(0)か土曜(6)なら土日の表を表示
        targetlst = timelst[0];       //日か土をえらんだらu=1
        u++;
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
            let nokori_bus = bus_time - now_time;  

            if ((u == 1 && i >14) || (u == 0 && i > 18)){   //天郷なら追加
                new_bus = "天郷" + new_bus;
                document.getElementById("nokori").innerHTML = nokori_bus;
                document.getElementById("t_hyouji").innerHTML = new_bus;

            }else{
                document.getElementById("nokori").innerHTML = nokori_bus;
                document.getElementById("hyouji").innerHTML = new_bus;
            }
            found++;
            break;
        }
    }
    if (found == 0){                                   //本日バスがないなら
        document.getElementById("hyouji").innerHTML = "バス無し";
        document.getElementById("nokori").innerHTML = "";
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
    let targetlst = timelst[0];

    for (let i = 0; i < targetlst.length; i++){      //現在時刻の次のバスの時刻を表示
        let bus_time = targetlst[i];
        if (bus_time > now_time){
            let bus_hour = Math.floor(bus_time / 60);
            let bus_minute = bus_time % 60;
            if (bus_minute < 10){
                bus_minute = "0" + bus_minute;
            }
                    
            let new_bus = bus_hour + ":" + bus_minute  
            let nokori_bus = bus_time - now_time;
            
            if (i > 14){               //天郷なら追加
                new_bus ="天郷" + new_bus;
                document.getElementById("nokori").innerHTML = nokori_bus;
                document.getElementById("t_hyouji").innerHTML = new_bus;
                document.getElementById("hyouji").innerHTML = "";
            }else{
                document.getElementById("nokori").innerHTML = nokori_bus;
                document.getElementById("hyouji").innerHTML = new_bus;
                document.getElementById("t_hyouji").innerHTML = "";
            }
            found++;
            break;
        }
    }
    if (found == 0){                                        //本日バスがないなら
        document.getElementById("hyouji").innerHTML = "バス無し";
        document.getElementById("t_hyouji").innerHTML = "";
        document.getElementById("nokori").innerHTML = "";
    }
}
