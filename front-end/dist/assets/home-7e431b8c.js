var oe=Object.defineProperty;var ce=(e,t,s)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var o=(e,t,s)=>(ce(e,typeof t!="symbol"?t+"":t,s),s);import{a as p,U as c,b as x}from"./addLoading-d4a3ae7d.js";const le={"empty-page":"none","home-page":"flex","playlist-info-page":"block","rounds-mode-game-page":"block","credits-page":"block"};function m(e){var s;const t=(s=document.getElementById("main"))==null?void 0:s.children;if(t)for(let n=0;n<t.length;n++){const i=t[n];i.style.display="none",i.id===e&&(i.style.display=le[e])}}function de(e,t){var n;const s=(n=document.getElementById(e))==null?void 0:n.children;if(s)for(let i=0;i<s.length;i++){const a=s[i];a.style.display="none",a.id===t&&(a.style.display="block")}}const D="([A-Za-z0-9]{22})",ue=new RegExp(`^${D}$`),V=new RegExp(`^spotify:playlist:${D}$`),W=new RegExp(`^https://open.spotify.com/playlist/${D}(\\?si=.*)?$`);function me(e){return ue.test(e)}function pe(e){return V.test(e)}function ye(e){return W.test(e)}function he(e){return e.match(V)[1]}function ge(e){return e.match(W)[1]}function fe(e){if(e=e.trim(),pe(e))return he(e);if(ye(e))return ge(e);if(me(e))return e;throw new Error("URI, URL ou ID inválido.")}function P(e){const t=document.createElement("div");t.classList.add("music");const s=document.createElement("img");s.classList.add("music-image");const n=document.createElement("p");n.classList.add("music-name"),n.innerText=e.name;const i=document.createElement("p");return i.classList.add("music-artist"),e.type==="track"?(e.album.images.length!==0&&s.setAttribute("src",e.album.images[0].url),i.innerText=e.artists[0].name):e.type==="episode"&&(e.images.length!==0&&s.setAttribute("src",e.images[0].url),i.innerText=e.show.name),t.appendChild(s),t.appendChild(n),t.appendChild(i),t}class r{static reset(){this.resetCorrectAnswerCount(),this.resetRoundNumber(),this.resetCurrentTime(),this.resetExtraTriesCount(),this.resetRoundsHistory()}static get playlist(){return this._playlist}static set playlist(t){this._playlist=t}static get playlistId(){return this._playlistId}static set playlistId(t){this._playlistId=t}static get roundNumber(){return this._roundNumber}static resetRoundNumber(){this._roundNumber=1}static increaseRoundNumber(){if(this._totalRounds<=this._roundNumber)throw new Error("Número do round não pode ser maior que o número total de rounds");this._roundNumber++}static get totalRounds(){return this._totalRounds}static set totalRounds(t){this._totalRounds=t}static get correctAnswersCount(){return this._correctAnswerCount}static resetCorrectAnswerCount(){this._correctAnswerCount=0}static increaseCorrectAnswerCount(){if(this._totalRounds<=this._correctAnswerCount)throw new Error("Número de acertos não pode ser maior que o número total de rounds");this._correctAnswerCount++}static get musicPos(){return this._musicPos}static set musicPos(t){this._musicPos=t}static get musicPlaytime(){return this._musicPlaytime}static set musicPlaytime(t){this._musicPlaytime=t}static get musicsQnt(){return this._musicsQnt}static set musicsQnt(t){this._musicsQnt=t}static get extraTries(){return this._extraTries}static set extraTries(t){this._extraTries=t}static get currentTime(){return this._currentTime}static resetCurrentTime(){this._currentTime=0,this.roundCurrentTime=0}static increaseCurrentTime(){this._currentTime++,this.roundCurrentTime++}static get extraTriesCount(){return this._extraTriesCount}static resetExtraTriesCount(){this._extraTriesCount=0,this.roundExtraTriesCount=0}static increaseExtraTriesCount(){this._extraTriesCount++,this.roundExtraTriesCount++}static get roundsHistory(){return this._roundsHistory}static resetRoundsHistory(){this._roundsHistory=[]}static addRoundHistory(t,s){this.extraTries?this._roundsHistory.push({timeSpent:this.roundCurrentTime,correctMusic:t,guessedMusic:s}):this._roundsHistory.push({timeSpent:this.roundCurrentTime,correctMusic:t,guessedMusic:s,extraTriesCount:this.roundExtraTriesCount}),this.roundCurrentTime=0,this.roundExtraTriesCount=0}static get score(){return Math.max(this._correctAnswerCount*500-(this._currentTime+this._extraTriesCount*25),50*this._correctAnswerCount)}static get incorrectAnswerCount(){return this._totalRounds-this._correctAnswerCount}static get isPremiumMode(){return this._isPremiumMode}static set isPremiumMode(t){this._isPremiumMode=t}}o(r,"_playlist"),o(r,"_playlistId"),o(r,"_roundNumber"),o(r,"_correctAnswerCount"),o(r,"_totalRounds"),o(r,"_musicPos"),o(r,"_musicPlaytime"),o(r,"_musicsQnt"),o(r,"_extraTries"),o(r,"_currentTime"),o(r,"_extraTriesCount"),o(r,"_roundsHistory"),o(r,"_isPremiumMode"),o(r,"roundCurrentTime"),o(r,"roundExtraTriesCount");function I(e){de("rounds-mode-game-page",e)}function L(e){const t=Math.floor(e/3600),s=Math.floor(e%(60*60)/60),n=e%60;return t?`${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}`:`${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function j(e){const t=document.createElement("div");t.classList.add("music-round-history");const s=document.createElement("img");s.classList.add("music-image-round-history");const n=document.createElement("p");n.classList.add("music-name-round-history"),n.innerText=e.name;const i=document.createElement("p");return i.classList.add("music-artist-round-history"),e.type==="track"?(e.album.images.length!==0&&s.setAttribute("src",e.album.images[0].url),i.innerText=e.artists[0].name):e.type==="episode"&&(e.images.length!==0&&s.setAttribute("src",e.images[0].url),i.innerText=e.show.name),t.appendChild(s),t.appendChild(n),t.appendChild(i),t}function Ee(e){const t=document.createElement("div");t.appendChild(j(e.guessedMusic)),t.appendChild(j(e.correctMusic));const s=document.createElement("p");if(s.innerText=`Tempo gasto: ${L(e.timeSpent)}`,t.appendChild(s),e.extraTriesCount){const n=document.createElement("p");n.innerText=`Tentativas extras utilizadas: ${e.extraTriesCount}`,t.appendChild(n)}return t}function ve(){document.getElementById("rounds-mode-score").innerText=r.score.toString(),document.getElementById("rounds-mode-correct-count").innerText=r.correctAnswersCount.toString(),document.getElementById("rounds-mode-incorrect-count").innerText=r.incorrectAnswerCount.toString(),document.getElementById("rounds-mode-total-rounds").innerText=r.totalRounds.toString(),document.getElementById("rounds-mode-total-time").innerText=L(r.currentTime),document.getElementById("rounds-mode-extra-tries-count").innerText=r.extraTriesCount.toString(),r.extraTries?document.getElementById("rounds-mode-extra-tries").style.display="block":document.getElementById("rounds-mode-extra-tries").style.display="none";const e=document.getElementById("rounds-mode-history");e.innerHTML="";for(let t of r.roundsHistory)e.appendChild(Ee(t));I("final-result-rounds-subpage")}document.addEventListener("DOMContentLoaded",()=>{var e,t,s;(e=document.getElementById("final-result-return"))==null||e.addEventListener("click",()=>{m("home-page")}),(t=document.getElementById("play-again-rounds-mode-new-configs"))==null||t.addEventListener("click",()=>{r.reset(),ee()}),(s=document.getElementById("play-again-rounds-mode-same-configs"))==null||s.addEventListener("click",()=>{r.reset(),Z()})});function Te(e,t){r.addRoundHistory(e,t),e.id===t.id?(document.getElementById("song-result-message").innerText="Você acertou !",r.increaseCorrectAnswerCount()):document.getElementById("song-result-message").innerText="Você errou !",document.getElementById("song-result-current-round").innerText=r.roundNumber.toString(),document.getElementById("song-result-total-rounds").innerText=r.totalRounds.toString();const s=document.getElementById("song-result-correct-song");s.innerHTML="",s.appendChild(P(e));const n=document.getElementById("song-result-guessed-song");n.innerHTML="",n.appendChild(P(t)),I("song-result-rounds-subpage")}document.addEventListener("DOMContentLoaded",()=>{var e;(e=document.getElementById("song-result-next"))==null||e.addEventListener("click",()=>{r.roundNumber===r.totalRounds?ve():(r.increaseRoundNumber(),K())})});function Ce(e,t){return t.filter(s=>s.track.name.toLowerCase().includes(e.toLowerCase()))}function ke(e,t){return t.filter(s=>s.track.type==="episode"?s.track.show.name.toLowerCase().includes(e.toLowerCase()):s.track.type==="track"?s.track.artists[0].name.toLowerCase().includes(e.toLowerCase()):!1)}function xe(e,t,s){return Ce(e,ke(t,s))}function H(e){let t=[...e];for(let s=t.length-1;s>0;s--){const n=Math.floor(Math.random()*(s+1));[t[s],t[n]]=[t[n],t[s]]}return t}async function Pe(){await fetch("https://api.spotify.com/v1/me/player/pause",{method:"PUT",headers:c.accessTokenHeader})}function X(e){return p(Pe,e)}async function be(e,t,s,n){let i=0;return n&&(i=n),await fetch("https://api.spotify.com/v1/me/player/play",{method:"PUT",headers:c.accessTokenHeader,body:JSON.stringify({context_uri:`spotify:playlist:${s}`,position_ms:i,offset:{position:e}})}),window.setTimeout(()=>{X()},t*1e3)}async function we(e,t,s,n,i){return p(be,i,e,t,s,n)}class ${constructor(t,s,n,i){o(this,"musicFullDuration");o(this,"playlistId");o(this,"musicNumber");o(this,"musicPlaytimes");o(this,"currentIndex");o(this,"musicPlaytime");o(this,"timeoutId");this.musicNumber=n,this.currentIndex=0,this.musicPlaytimes=[],this.musicFullDuration=t.tracks.items[this.musicNumber].track.duration_ms,this.playlistId=s,this.musicPlaytime=i,this.constructPlaytimes()}async play(){if(!this.finished){let t=this.musicPlaytime;this.musicPlaytimes[this.currentIndex]+t*1e3>this.musicFullDuration&&(t=(this.musicFullDuration-this.musicPlaytimes[this.currentIndex])/1e3-.01),this.timeoutId=await we(this.musicNumber,t,this.playlistId,this.musicPlaytimes[this.currentIndex],!0),this.currentIndex+=1}}pause(){clearTimeout(this.timeoutId),X(!0)}get finished(){return this.currentIndex>=this.musicPlaytimes.length}}class Ie extends ${constructPlaytimes(){this.musicPlaytimes.push(0);let t=this.musicPlaytime*1e3;for(;t<this.musicFullDuration;)this.musicPlaytimes.push(t),t+=this.musicPlaytime*1e3;this.musicPlaytimes=H(this.musicPlaytimes)}close(){}}class Le extends ${constructPlaytimes(){this.musicPlaytimes.push(0);let t=this.musicPlaytime*1e3;for(;t<this.musicFullDuration;)this.musicPlaytimes.push(t),t+=this.musicPlaytime*1e3}close(){}}class _e extends ${constructor(s,n,i,a){super(s,n,i,a);o(this,"playerElement");this.playerElement=this.createPlayerElement(s),this.musicFullDuration=3e4}createPlayerElement(s){const n=s.tracks.items[this.musicNumber].track,i=document.createElement("audio");i.style.display="none";const a=document.createElement("source");return n.type==="track"?a.src=n.preview_url:n.type==="episode"&&(a.src=n.audio_preview_url),a.type="audio/mpeg",i.appendChild(a),document.body.appendChild(i),i}constructPlaytimes(){this.musicPlaytimes.push(0);let s=this.musicPlaytime*1e3;for(;s<this.musicFullDuration;)this.musicPlaytimes.push(s),s+=this.musicPlaytime*1e3}async play(){this.finished||(this.playerElement.play(),setTimeout(()=>{this.playerElement.pause()},this.musicPlaytime*1e3))}pause(){this.playerElement.pause()}close(){this.playerElement.remove()}}var d=null,u=null,E,C,v,k,b=-1;async function Z(){E=H([...Array(r.playlist.tracks.items.length).keys()]),d=null,u=null;const e=document.getElementById("song-guess-hear-next");r.extraTries?e.disabled=!1:e.disabled=!0;const t=document.getElementById("rounds-mode-timer");t.innerHTML=L(0),b!==-1&&clearInterval(b),await K()}async function K(){const e=document.getElementById("song-guess-input"),t=document.getElementById("artist-guess-input");if(e.value="",t.value="",r.playlist.tracks.items.length===r.musicsQnt)k=r.playlist.tracks.items;else{let n=[E[r.roundNumber-1]],i=[...E];delete i[r.roundNumber-1],i=H(i);for(let a=0;a<r.musicsQnt-1;a++)n.push(i[a]);n.sort(),k=n.map(a=>r.playlist.tracks.items[a])}Y(k),r.isPremiumMode?r.musicPos==="random"?C=Ie:r.musicPos==="start"&&(C=Le):C=_e,v=new C(r.playlist,r.playlistId,E[r.roundNumber-1],r.musicPlaytime),await v.play();const s=document.getElementById("rounds-mode-timer");b=window.setInterval(()=>{r.increaseCurrentTime(),s.innerHTML=L(r.currentTime)},1e3),I("song-guess-rounds-subpage")}function Y(e){d=null;const t=document.getElementById("playlist-tracks-list-game");t.innerHTML="";for(let s of e){const n=P(s.track);n.classList.add("clickable"),n.addEventListener("click",()=>{d&&d.classList.remove("selected"),d=n,d.classList.add("selected"),u=s.track}),u&&s.track.id===u.id&&(d=n,d.classList.add("selected")),t.appendChild(n)}}document.addEventListener("DOMContentLoaded",()=>{var n,i;const e=document.getElementById("song-guess-input"),t=document.getElementById("artist-guess-input"),s=()=>{Y(xe(e.value,t.value,k))};e.addEventListener("input",s),t.addEventListener("input",s),(n=document.getElementById("song-guess-submit"))==null||n.addEventListener("click",()=>{u&&(clearInterval(b),Te(r.playlist.tracks.items[E[r.roundNumber-1]].track,u),u=null,d=null,v.pause(),v.close())}),(i=document.getElementById("song-guess-hear-next"))==null||i.addEventListener("click",()=>{v.play()})});function ee(){te(document.getElementById("configs-rounds-form"));const e=r.playlist.tracks.items.length;document.getElementById("configs-rounds-rounds-number").setAttribute("max",e.toString());const s=document.getElementById("configs-rounds-music-qnt");s.setAttribute("max",e.toString()),s.setAttribute("value",e.toString()),I("configs-rounds-subpage")}function A(e){const t=document.getElementById("music-pos-init"),s=document.getElementById("music-pos-random");e?(t.disabled=!1,t.checked=!0,s.disabled=!1):(t.disabled=!0,t.checked=!1,s.disabled=!0,s.checked=!1)}function te(e){const t=document.getElementById("input-premium");e.reset(),c.isLogged?(t.checked=!0,t.disabled=!1,A(!0)):(t.checked=!1,t.disabled=!0,A(!1))}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("input-premium");e.addEventListener("input",()=>{A(e.checked)});const t=document.getElementById("configs-rounds-form");t.addEventListener("submit",async s=>{s.preventDefault();const n=new FormData(t);r.totalRounds=Number(n.get("rounds-number")),r.musicPos=n.get("music-pos"),r.musicPlaytime=Number(n.get("music-play-time")),r.musicsQnt=Number(n.get("music-qnt")),r.isPremiumMode=n.get("premium")==="on",r.extraTries=n.get("extra-tries")==="on",r.isPremiumMode&&(r.playlist.tracks.items=r.playlist.tracks.items.filter(i=>{const a=i.track;return a.type==="track"?a.preview_url!==null:a.type==="episode"?a.audio_preview_url!==null:!1})),await Z(),te(t)})});function Be(e,t){r.reset(),r.playlist=e,r.playlistId=t,ee(),m("rounds-mode-game-page")}function Ne(e,t){document.getElementById("playlist-image").setAttribute("src",e.images[0].url),document.getElementById("playlist-name").innerText=e.name,e.description?document.getElementById("playlist-description").innerText=e.description:document.getElementById("playlist-description").innerText="Sem descrição",e.owner.display_name?document.getElementById("playlist-owner").innerText=e.owner.display_name:document.getElementById("playlist-owner").innerText="",document.getElementById("playlist-tracks-count").innerText=String(e.tracks.total);const s=document.getElementById("playlist-tracks-list");s.innerHTML="";for(let n of e.tracks.items)s.appendChild(P(n.track));document.getElementById("game-start").onclick=()=>{Be(e,t)},m("playlist-info-page")}document.addEventListener("DOMContentLoaded",()=>{var e;(e=document.getElementById("playlist-return"))==null||e.addEventListener("click",()=>{m("home-page")})});function z(e){return e.track?e.track.is_playable:!1}async function Se(e){return fetch(`https://api.spotify.com/v1/playlists/${e}?market=${c.country}&additional_types=episode`,{method:"GET",headers:c.accessTokenHeader}).then(t=>t.json()).then(async t=>{var s=t.tracks.next;for(t.tracks.items=t.tracks.items.filter(z);s;)await fetch(s,{method:"GET",headers:c.accessTokenHeader}).then(n=>n.json()).then(n=>{t.tracks.items.push(...n.items.filter(z)),s=n.next});return t})}async function se(e,t){return p(Se,t,e)}async function Me(){return fetch("https://api.spotify.com/v1/me/player/devices",{headers:c.accessTokenHeader,method:"GET"}).then(e=>e.json()).then(e=>e.devices)}async function Re(e){return p(Me,e)}function Ae(e){const t=document.createElement("div");t.classList.add("device");const s=document.createElement("div");s.classList.add("device-is-selected-container");const n=document.createElement("p");n.classList.add("device-is-selected-text"),e.is_active&&(t.classList.add("selected"),n.innerText="Dispositivo seleccionado"),s.appendChild(n),t.appendChild(s);const i=document.createElement("div");i.classList.add("device-icon-container");const a=document.createElement("i");e.type==="Computer"?a.className="bi bi-laptop":e.type==="Smartphone"?a.className="bi bi-phone":e.type==="Speaker"&&(a.className="bi bi-speaker"),i.appendChild(a),t.appendChild(i);const l=document.createElement("div");l.classList.add("device-name-container");const h=document.createElement("p");return h.classList.add("device-name"),h.innerText=e.name,l.appendChild(h),t.appendChild(l),t}function ne(e,t){const s=document.createElement("div");s.classList.add("simplified-playlist-container"),t&&s.classList.add("selectable");const n=document.createElement("img");n.classList.add("simplified-playlist-image"),e.images.length!==0&&n.setAttribute("src",e.images[0].url);const i=document.createElement("p");i.classList.add("simplified-playlist-name"),i.innerText=e.name;const a=document.createElement("p");return a.classList.add("simplified-playlist-description"),e.description?a.innerText=e.description:a.innerText=`De ${e.owner.display_name}`,s.appendChild(n),s.appendChild(i),s.appendChild(a),s}async function De(e){return fetch("https://api.spotify.com/v1/me/player",{headers:c.accessTokenHeader,method:"PUT",body:JSON.stringify({device_ids:[e]})})}async function He(e,t){return p(De,t,e)}async function $e(){return fetch("https://api.spotify.com/v1/me/playlists?limit=8",{method:"GET",headers:c.accessTokenHeader}).then(e=>e.json())}async function Fe(e){return p($e,e)}async function Ue(e){const s=["collaborative","description","external_urls","href","id","images","name","owner","public","snapshot_id","tracks(href,total)","type","uri"].join(",");return fetch(`https://api.spotify.com/v1/playlists/${e}?fields=${s}`,{method:"GET",headers:c.accessTokenHeader}).then(n=>n.json())}async function G(e,t){return p(Ue,t,e)}const O=class{static savePlaylistId(t){const s=this.ids.indexOf(t);return s!==-1&&this.ids.splice(s,1),console.log(t),this.ids.unshift(t),console.log(this.ids),localStorage.setItem(this.storageName,JSON.stringify(this.ids)),s}static getPlaylistsIds(){return this.ids}};let y=O;o(y,"storageName","play_again_playlists_ids"),o(y,"ids",JSON.parse(localStorage.getItem(O.storageName)||"[]"));async function Oe(){return Re().then(e=>{e||console.log("Não foi possível carregar os dispositivos");const t=document.getElementById("devices-list");for(const s of e){const n=Ae(s);n.addEventListener("click",async()=>{if(s.id){await He(s.id);for(let i=0;i<t.children.length;i++){const a=t.children[i];a.classList.remove("selected"),a.getElementsByClassName("device-is-selected-text")[0].innerHTML=""}n.classList.add("selected"),n.getElementsByClassName("device-is-selected-text")[0].innerHTML="Dispositivo selecionado",document.getElementById("no-device-selected").style.display="none"}}),t.appendChild(n)}e.length===0?document.getElementById("no-devices-found").style.display="block":e.some(s=>s.is_active)||(document.getElementById("no-device-selected").style.display="block")})}function w(e,t){for(const s of e){const n=ne(s,!0);n.addEventListener("click",async()=>{const i=s.id,a=await se(i,!0);F(a,i)}),t.appendChild(n)}}async function qe(){return Fe().then(e=>{const t=document.getElementById("user-playlists-list"),s=document.getElementById("user-playlists-load-more");w(e.items,t);let n=e.next;n?s.onclick=()=>{x(async()=>{await fetch(n,{method:"GET",headers:c.accessTokenHeader}).then(i=>i.json()).then(i=>{w(i.items,t),n=i.next,n||(s.style.display="none")})})}:s.style.display="none"})}async function J(){const e=y.getPlaylistsIds(),t=document.getElementById("play-again-list"),s=document.getElementById("play-again-load-more"),n=8;let i=0;return Promise.all(e.slice(i,i+n).map(async a=>G(a))).then(a=>{w(a,t),i+=n,i>=e.length?s.style.display="none":s.onclick=()=>{x(async()=>{await Promise.all(e.slice(i,i+n).map(async l=>G(l))).then(l=>{w(l,t),i+=n,i>=e.length&&(s.style.display="none")})})}})}async function Qe(){c.isLogged?x(async()=>{await Promise.all([Oe(),qe(),J()])}):(document.getElementById("user-library").style.display="none",document.getElementById("devices-home-page").style.display="none",x(J))}function F(e,t){const s=document.getElementById("play-again-list");Ne(e,t);const n=y.savePlaylistId(t);n!==-1&&s.children.length>n&&s.removeChild(s.children[n]);const i=ne(e,!0);i.addEventListener("click",async()=>{F(e,t)}),s.insertBefore(i,s.children[0])}document.addEventListener("DOMContentLoaded",async()=>{var e;(e=document.getElementById("playlist-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const s=document.getElementById("playlist-input").value;try{const n=fe(s),i=await se(n,!0);F(i,n)}catch(n){console.log(n)}})});const U=new URLSearchParams(window.location.search),je=U.get("login")==="true",ze=U.get("acessToken"),Ge=U.get("country");document.addEventListener("DOMContentLoaded",async()=>{m("empty-page"),c.accessToken=ze,c.country=Ge,c.isLogged=je,await Qe(),m("home-page")});async function Je(e){try{return await(await fetch(`https://api.github.com/users/${e}`,{headers:{"X-GitHub-Api-Version":"2022-11-28"}})).json()}catch(t){return console.log(t),null}}document.addEventListener("DOMContentLoaded",()=>{var e;(e=document.getElementById("credit"))==null||e.addEventListener("click",()=>{m("credits-page"),Ve();const t=[{nickname:"A-nita",cargos:["Diretora de Artes","Desenvolvedora"],linkedin:"https://www.linkedin.com/in/anita-moura/"},{nickname:"caiopadovan",cargos:["Desenvolvedor"],linkedin:"https://www.linkedin.com/in/caio-padovan-b28a97262/"},{nickname:"Pandxra",cargos:["Faltou na reunião","Desenvolvedora"],linkedin:"https://www.linkedin.com/in/cinthiacosta98/"},{nickname:"GregorioFornetti",cargos:["Chefe","Desenvolvedor"],linkedin:"https://www.linkedin.com/in/greg%C3%B3rio-fornetti-azevedo-4a0193201/"},{nickname:"guilhermesdc",cargos:["Desenvolvedor"],linkedin:"https://www.linkedin.com/in/guilherme-silva-de-camargo-104618220/"},{nickname:"N4NiNi",cargos:["Analista"],linkedin:"https://www.linkedin.com/in/vinicius-nanini/"}],s=document.getElementById("credits_cards");for(let n of t)Je(n.nickname).then(a=>{const l=a.name,h=a.avatar_url,ie=a.html_url,re=n.linkedin,ae=n.cargos[0],_=document.createElement("div"),g=document.createElement("div"),T=document.createElement("div"),f=document.createElement("div"),B=document.createElement("h5"),N=document.createElement("p"),S=document.createElement("img"),q=document.createElement("i"),Q=document.createElement("i"),M=document.createElement("a"),R=document.createElement("a");M.href=ie,R.href=re,T.className="position-relative",_.className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch",g.className="zoomeffect cardborder mb-5 card",g.style.width="18rem",f.className="zoomeffect text-white cardcolor card-body d-flex align-items-start flex-column",B.className="cardnome h5 card-title mb-auto",N.className="cardcargo card-text my-3",S.className="p-2 card-img-top",S.setAttribute("src",h),q.className="social_icon bi bi-github fs-2 p-2",Q.className="social_icon bi bi-linkedin fs-2 p-2",B.textContent=l,N.textContent=ae,_.appendChild(g),g.appendChild(S),g.appendChild(f),f.appendChild(B),f.appendChild(N),f.appendChild(T),R.appendChild(Q),T.appendChild(R),M.appendChild(q),T.appendChild(M),s.appendChild(_)})})});function Ve(){const e=document.getElementById("credits_cards");e.innerHTML=""}