var now=new Date;
function createtime()
{
    now.setTime(now.getTime()+1e3);
    var e=new Date("08/01/2022 00:00:00"),
    t=Math.trunc(234e8+(now-e)/1e3*17),
    a=(t/1496e5).toFixed(6),
    o=new Date("01/16/2023 00:00:00"),
    n=(now-o)/1e3/60/60/24,
    r=Math.floor(n),
    i=(now-o)/1e3/60/60-24*r,
    s=Math.floor(i);
    1==String(s).length&&(s="0"+s);
    var d=(now-o)/1e3/60-1440*r-60*s,l=Math.floor(d);
    1==String(l).length&&(l="0"+l);
    var g=(now-o)/1e3-86400*r-3600*s-60*l,b=Math.round(g);
    1==String(b).length&&(b="0"+b);
    let c=`<div style="font-size":20px>Power By <a href="https://hexo.io/zh-cn/">Hexo</a> | Theme <a href="https://github.com/jerryc127/hexo-theme-butterfly">Butterfly</a> |已运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒|
    施工中。。。但是想摆。。。。<div style="font-size:20px;font-weight:bold">
    <a class="social-icon" href="https://github.com/ydduuccuuf" target="_blank" title="Github" style="font-size:20px;font-weight:bold"><i class="fab fa-github"></i></a>     
    <a class="social-icon" href="https://steamcommunity.com/profiles/76561199183986536/" target="_blank" title="Steam" style="font-size:20px;font-weight:bold"><i class="fab fa-steam"></i></a>
    <a class="social-icon" href="mailto:ydduuccuuf@gmail.com" target="_blank" title="Email" style="font-size:20px;font-weight:bold"><i class="fas fa-envelope"></i></a>
    </div>
    `
    ;
    /*c=s<18&&s>=9?
    `
     本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 
     旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`:
     `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> 
      <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br>
      旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>
    `,*/
    document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)
}
setInterval((()=>{createtime()}),1e3);