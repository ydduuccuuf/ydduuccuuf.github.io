var now=new Date();
var nowYear = now.getFullYear();
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

    let c=`<div class="timercounter">Power By <a href="https://hexo.io/zh-cn/">Hexo</a>&nbsp;&nbsp;&nbsp;
    Theme <a href="https://github.com/jerryc127/hexo-theme-butterfly">Butterfly</a>&nbsp;&nbsp;&nbsp;
    本站持续施工中。。。
    <div style="float:right" >已运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒</div></div>

    `
    ;

    document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=c)
}
setInterval((()=>{createtime()}),1e3);