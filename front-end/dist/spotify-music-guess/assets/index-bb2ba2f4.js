import"./modulepreload-polyfill-3cfb730f.js";/* empty css              */import{r as d,a as o}from"./configs-48bf7a92.js";const t=new URLSearchParams(window.location.search);document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("login");e==null||e.addEventListener("click",()=>{document.location=`${d}?${t.toString()}`});const n=document.getElementById("no-login");n==null||n.addEventListener("click",async()=>{const a=await fetch(`${o}/auth-without-login`).then(c=>c.text());t.append("login","false"),t.append("acessToken",a),t.append("country","br"),document.location=`${o}/home.html?${t.toString()}`})});
