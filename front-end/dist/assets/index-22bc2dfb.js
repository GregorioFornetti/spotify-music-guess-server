import"./modulepreload-polyfill-3cfb730f.js";/* empty css              */import{r as a}from"./configs-efb1f43b.js";const t=new URLSearchParams(window.location.search);document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("login");e==null||e.addEventListener("click",()=>{document.location=`${a}?${t.toString()}`});const n=document.getElementById("no-login");n==null||n.addEventListener("click",async()=>{const o=await fetch("/auth-without-login").then(c=>c.text());t.append("login","false"),t.append("acessToken",o),t.append("country","br"),document.location=`home.html?${t.toString()}`})});
