import"./modulepreload-polyfill-3cfb730f.js";import{a as l,U as p}from"./addLoading-82809337.js";import{l as f}from"./configs-62dd7812.js";const h=window.location.href.replace("?","");async function m(e){const o=g(128),n=await y(o);localStorage.setItem("verifier",o);const t=window.location.href.replace("?",""),a=new URLSearchParams;a.append("client_id",e),a.append("response_type","code"),a.append("redirect_uri",t),a.append("scope","user-read-private user-read-email user-modify-playback-state user-read-playback-state playlist-read-private playlist-read-collaborative user-library-read"),a.append("code_challenge_method","S256"),a.append("code_challenge",n),document.location=`https://accounts.spotify.com/authorize?${a.toString()}`}async function u(e,o){if(localStorage.getItem("acess_token")){const n=localStorage.getItem("refresh_token"),t=new URLSearchParams;t.append("client_id",e),t.append("grant_type","refresh_token"),t.append("refresh_token",n);const a=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t}),{access_token:r,refresh_token:s}=await a.json();return r&&localStorage.setItem("acess_token",r),s&&localStorage.setItem("refresh_token",s),r}else{const n=localStorage.getItem("verifier"),t=new URLSearchParams;t.append("client_id",e),t.append("grant_type","authorization_code"),t.append("code",o),t.append("redirect_uri",h),t.append("code_verifier",n);const a=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t}),{access_token:r,refresh_token:s}=await a.json();return r&&localStorage.setItem("acess_token",r),s&&localStorage.setItem("refresh_token",s),r}}function g(e){let o="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let t=0;t<e;t++)o+=n.charAt(Math.floor(Math.random()*n.length));return o}async function y(e){const o=new TextEncoder().encode(e),n=await window.crypto.subtle.digest("SHA-256",o);return btoa(String.fromCharCode.apply(null,[...new Uint8Array(n)])).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function w(){return(await fetch("https://api.spotify.com/v1/me",{method:"GET",headers:p.accessTokenHeader}).then(o=>o.json())).country}async function _(e){return l(w,e)}const i="b3c2339a149d46afa94a39347466b623",c=new URLSearchParams(window.location.search),d=c.get("code");document.addEventListener("DOMContentLoaded",async()=>{if(d)try{const e=await u(i,d);p.accessToken=e;const o=await _();c.delete("code"),c.append("login","true"),c.append("acessToken",e),c.append("country",o),document.location=`${f}?${c.toString()}`}catch(e){console.log("Não foi possível carregar o home page",e)}else m(i)});
