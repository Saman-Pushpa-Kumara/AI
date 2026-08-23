/**
 * Minified by jsDelivr using Terser v5.39.0.
 * Original file: /npm/ytpro@3.9.80/script.js
 */
if(null==window.eruda&&"true"==localStorage.getItem("devMode")){
    var script=document.createElement("script");
    script.src="//youtube.com/ytpro_cdn/npm/eruda";
    document.body.appendChild(script);
    script.onload=()=>{
        try { if(window.eruda) eruda.init(); } catch(e){}
    }
}
if(!YTProVer){
    var YTProVer="3.98",ytoldV="",isF=!1,isAp=!1;
    const e=HTMLMediaElement.prototype.pause;
    window.PIPause=!1,window.isPIP=!1,window.pauseAllowed=!0;
    var sTime=[],webUrls=["m.youtube.com","youtube.com","yout.be","accounts.google.com"],GeminiAT="",GeminiModels={"3.0 Pro":'[1,null,null,null,"9d8ca3786ebdfbea",null,null,0,[4],null,null,1]',"3.0 Flash":'[1,null,null,null,"fbb127bbb056c959",null,null,0,[4],null,null,1]',"3.0 Flash Thinking":'[1,null,null,null,"5bf011840784117a",null,null,0,[4],null,null,1]',"3.0 Pro Plus":'[1,null,null,null,"e6fa609c3fa255c0",null,null,0,[4],null,null,4]',"3.0 Flash Plus":'[1,null,null,null,"56fdd199312815e2",null,null,0,[4],null,null,4]',"3.0 Flash Thinking Plus":'[1,null,null,null,"e051ce1aa80aa576",null,null,0,[4],null,null,4]',"3.0 Pro Advanced":'[1,null,null,null,"e6fa609c3fa255c0",null,null,0,[4],null,null,2]',"3.0 Flash Advanced":'[1,null,null,null,"56fdd199312815e2",null,null,0,[4],null,null,2]',"3.0 Flash Thinking Advanced":'[1,null,null,null,"e051ce1aa80aa576",null,null,0,[4],null,null,2]'},YTPROCodecs={video:["AV1","VP8","VP9","H264"],audio:["Opus","Mp4a"]};
    let t=0,n=0,a=null;
    var sens=.005,vol=Android.getVolume(),brt=Android.getBrightness()/100;
    null!=localStorage.getItem("saveCInfo")&&null!=localStorage.getItem("gesC")&&null!=localStorage.getItem("gesM")&&null!=localStorage.getItem("bgplay")||(localStorage.setItem("autoSpn","true"),localStorage.setItem("bgplay","true"),localStorage.setItem("gesC","true"),localStorage.setItem("gesM","false"),localStorage.setItem("fzoom","false"),localStorage.setItem("saveCInfo","true"),localStorage.setItem("geminiModel","3.0 Flash"),localStorage.setItem("prompt","Give me details about this YouTube video Id: {videoId} , a detailed summary of timestamps with facts , resources and reviews of the main content"),localStorage.setItem("devMode","false"),localStorage.setItem("block_60fps","false"),YTPROCodecs.video.forEach((e=>{localStorage.setItem(e,"true")})),YTPROCodecs.audio.forEach((e=>{localStorage.setItem(e,"true")}))),"true"==localStorage.getItem("fzoom")&&document.getElementsByName("viewport")[0].setAttribute("content",""),["2.0 Flash","2.0 Flash Thinking","2.5 Flash","2.5 Pro"].includes(localStorage.getItem("geminiModel"))&&localStorage.setItem("geminiModel","3.0 Flash"),ytoldV=window.location.pathname.indexOf("shorts")>-1?window.location.pathname:new URLSearchParams(window.location.search).get("v");
    var c="#000",d="#f2f2f2",dc="#fff",isD=!1,dislikes="...";
    document.cookie.indexOf("f6=40000")>-1?(dc="#000",c="#fff",d="rgba(255,255,255,0.1)",isD=!0):(dc="#fff",c="#000",d="rgba(0,0,0,0.05)",isD=!1);
    var downBtn=`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="none">\n<path\nd="M16.59 9H15V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H7.41a1 1 0 0 0-.7 1.7l4.59 4.59a1 1 0 0 0 1.42 0l4.59-4.59a1 1 0 0 0-.72-1.7Z"\nstroke="${c}"\nstroke-width="1.8"\nstroke-linecap="round"\nstroke-linejoin="round"\n/>\n<rect x="5" y="17.2" width="14" height="1.8" rx="0.9" fill="${c}" />\n</svg>\n`;
    function override(){var e=document.createElement("video"),t=e.canPlayType.bind(e);e.__proto__.canPlayType=makeModifiedTypeChecker(t);var n=window.MediaSource;if(void 0!==n){var a=n.isTypeSupported.bind(n);n.isTypeSupported=makeModifiedTypeChecker(a)}}
    function makeModifiedTypeChecker(e){return function(t){if(void 0===t)return"";var n=[];"false"===localStorage.H264&&n.push("avc"),"false"===localStorage.VP8&&n.push("vp8"),"false"===localStorage.VP9&&n.push("vp9","vp09"),"true"===localStorage.AV1&&n.push("av01","av99"),"false"===localStorage.Opus&&n.push("opus"),"false"===localStorage.Mp4a&&n.push("mp4a");for(var a=0;a<n.length;a++)if(-1!==t.indexOf(n[a]))return"";if("true"===localStorage.block_60fps){var o=/framerate=(\d+)/.exec(t);if(o&&o[1]>30)return""}return e(t)}}
    function insertAfter(e,t){try{e.parentNode.insertBefore(t,e.nextSibling)}catch{}}
    async function waitForElement(e,t){return new Promise((n=>{const a=document.querySelector(e);if(a){if(t&&""!=a.src)return n(a);if(!t)return n(a)}const o=new MutationObserver((()=>{const a=document.querySelector(e);a&&(t&&a.src&&(n(a),o.disconnect()),t||(n(a),o.disconnect()))}));o.observe(document.body,{childList:!0,subtree:!0})}))}
    override();

    // Media Controls Fixed
    function setupMediaSession() {
        if ('mediaSession' in navigator) {
            const getVid = () => document.getElementsByClassName("video-stream")[0];
            const v = getVid();
            if (v) {
                navigator.mediaSession.playbackState = v.paused ? "paused" : "playing";
                
                navigator.mediaSession.setActionHandler('play', () => {
                    window.pauseAllowed = true;
                    v.play().catch(() => {});
                });
                navigator.mediaSession.setActionHandler('pause', () => {
                    window.PIPause = true;
                    v.pause();
                });
                navigator.mediaSession.setActionHandler('seekbackward', (details) => {
                    v.currentTime = Math.max(v.currentTime - (details.seekOffset || 10), 0);
                });
                navigator.mediaSession.setActionHandler('seekforward', (details) => {
                    v.currentTime = Math.min(v.currentTime + (details.seekOffset || 10), v.duration);
                });
                navigator.mediaSession.setActionHandler('previoustrack', () => {
                    window.history.back();
                });
                navigator.mediaSession.setActionHandler('nexttrack', () => {
                    const nextBtn = document.querySelector('.ytm-autonav-bar-button') || document.querySelector('.next-button') || document.querySelector('.ytp-next-button');
                    if (nextBtn) nextBtn.click();
                });
            }
        }
    }
    setInterval(setupMediaSession, 1000);

    // Download Animation Long Press Removal Helper
    let longPressTimer;
    document.addEventListener('touchstart', (e) => {
        const target = e.target.closest('#download-anim-icon, .download-progress, .ytpro-download-icon');
        if (target) {
            longPressTimer = setTimeout(() => {
                target.remove();
            }, 1000);
        }
    }, { passive: true });
    document.addEventListener('touchend', () => clearTimeout(longPressTimer), { passive: true });
    document.addEventListener('touchmove', () => clearTimeout(longPressTimer), { passive: true });
    document.addEventListener('contextmenu', (e) => {
        const target = e.target.closest('#download-anim-icon, .download-progress, .ytpro-download-icon');
        if (target) {
            e.preventDefault();
            target.remove();
        }
    });

    var addSettingsTab=()=>{if(null==document.getElementById("setDiv")){var e=document.createElement("div");e.setAttribute("style","\nz-index:9999999999;\nfont-size:22px;\ntext-align:center;\nline-height:35px;\npointer-events:auto;\n"),e.setAttribute("id","setDiv");var t=document.createElement("ytm-pivot-bar-item-renderer");t.innerHTML=`<svg fill="${window.location.href.indexOf("watch")<0?c:"#fff"}" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"  id="hSett"><path d="M12.844 1h-1.687a2 2 0 00-1.962 1.616 3 3 0 01-3.92 2.263 2 2 0 00-2.38.891l-.842 1.46a2 2 0 00.417 2.507 3 3 0 010 4.525 2 2 0 00-.417 2.507l.843 1.46a2 2 0 002.38.892 3.001 3.001 0 013.918 2.263A2 2 0 0011.157 23h1.686a2 2 0 001.963-1.615 3.002 3.002 0 013.92-2.263 2 2 0 002.38-.892l.842-1.46a2 2 0 00-.418-2.507 3 3 0 010-4.526 2 2 0 00.418-2.508l-.843-1.46a2 2 0 00-2.38-.891 3 3 0 01-3.919-2.263A2 2 0 0012.844 1Zm-1.767 2.347a6 6 0 00.08-.347h1.687a4.98 4.98 0 002.407 3.37 4.98 4.98 0 004.122.4l.843 1.46A4.98 4.98 0 0018.5 12a4.98 4.98 0 001.716 3.77l-.843 1.46a4.98 4.98 0 00-4.123.4A4.979 4.979 0 0012.843 21h-1.686a4.98 4.98 0 00-2.408-3.371 4.999 4.999 0 00-4.12-.399l-.844-1.46A4.979 4.979 0 005.5 12a4.98 4.98 0 00-1.715-3.77l.842-1.459a4.98 4.98 0 004.123-.399 4.981 4.981 0 002.327-3.025ZM16 12a4 4 0 11-7.999 0 4 4 0 018 0Zm-4 2a2 2 0 100-4 2 2 0 000 4Z"></path></svg>\n`,e.appendChild(t),insertAfter(document.getElementsByTagName("ytm-home-logo")[0],e),null!=document.getElementById("hSett")&&document.getElementById("hSett").addEventListener("click",(function(e){window.location.hash="settings"}))}};function getDislikesInLocale(e){var t=e;if(e<1e3)t=e;else{const n=Math.floor(Math.log10(e)-2),a=n+(n%3?1:0);t=Math.floor(e/10**a)*10**a}let n;if(document.documentElement.lang)n=document.documentElement.lang;else if(navigator.language)n=navigator.language;else try{n=new URL(Array.from(document.querySelectorAll("head > link[rel='search']"))?.find((e=>e?.getAttribute("href")?.includes("?locale=")))?.getAttribute("href"))?.searchParams?.get("locale")}catch{n="en"}return Intl.NumberFormat(n,{notation:"compact",compactDisplay:"short"}).format(t)}async function skipSponsor(){var e=document.createElement("div");e.setAttribute("style","height:3px;pointer-events:none;width:100%;position:absolute;z-index:99;"),e.setAttribute("id","sDiv");var t=document.getElementsByClassName("video-stream")[0].duration;if(!isNaN(t)){for(var n in sTime){var a=document.createElement("div"),o=sTime[n];a.setAttribute("style",`height:3px;width:${100/t*(o[1]-o[0])}%;background:#0f8;position:absolute;z-index:9;left:${100/t*o[0]}%;`),e.appendChild(a)}await waitForElement("yt-progress-bar",!1);if(null==document.getElementById("sDiv"))if(null!=document.getElementsByClassName("ytPlayerProgressBarHost")[0])document.getElementsByClassName("ytPlayerProgressBarHost")[0].appendChild(e);else try{document.getElementsByClassName("ytProgressBarLineProgressBarLine")[0].appendChild(e)}catch{}}}async function fDislikes(e){var t=new URL(e),n="";t.pathname.indexOf("shorts")>-1?n=t.pathname.substr(8,t.pathname.length):t.pathname.indexOf("watch")>-1&&(n=t.searchParams.get("v")),fetch("https://returnyoutubedislikeapi.com/votes?videoId="+n).then((e=>e.json())).then((e=>{"dislikes"in e&&(dislikes=getDislikesInLocale(parseInt(e.dislikes)))})).catch((e=>{}))}async function checkSponsors(e){if(e.indexOf("watch")>-1){sTime=[],await fetch("https://sponsor.ajay.app/api/skipSegments?videoID="+new URL(e).searchParams.get("v")).then((e=>e.json())).then((e=>{for(var t in e){var n=e[t].segment;sTime.push(n)}})).catch((e=>{}));var t=await waitForElement(".video-stream",!0);t.ontimeupdate=()=>{skipSponsor();var e=t.currentTime;for(var n in sTime){var a=sTime[n];Math.floor(e)==Math.floor(a[0])&&"true"==localStorage.getItem("autoSpn")&&(t.currentTime=a[1],addSkipper(a[0]))}}}}function addSkipper(e){var t=document.createElement("div");t.setAttribute("style",`\nheight:50px;${screen.width>screen.height?"width:50%;":"width:80%;"}overflow:auto;background:rgba(130,130,130,.3);\nbackdrop-filter:blur(6px);\nposition:absolute;bottom:40px;\nline-height:50px;\nleft:calc(15% / 2 );padding-left:10px;padding-right:10px;\nz-index:99999999999999;text-align:center;border-radius:25px;\ncolor:white;text-align:center;\n`),t.innerHTML='<span style="height:30px;line-height:30px;margin-top:10px;display:block;font-family:monospace;font-size:16px;float:left;">Skipped Sponsor</span>\n<span style="height:30px;line-height:44px;float:right;padding-right:30px;margin-top:10px;display:block;padding-left:30px;border-left:1px solid white;">\n<svg data-action="rewind" xmlns="http://www.w3.org/2000/svg" width="23" height="23" style="margin-top:0px;" fill="currentColor" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>\n<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>\n</svg>\n<svg data-action="close" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:30px;" fill="#f24" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>',document.getElementById("player-control-container").appendChild(t),t.addEventListener("click",(t=>{var n=t.target.closest("[data-action]");if(n){var a=n.dataset.action;"close"==a?n.parentElement.parentElement.remove():"rewind"==a&&(n.parentElement.parentElement.remove(),document.getElementsByClassName("video-stream")[0].currentTime=e+1)}})),setTimeout((()=>{t.remove()}),5e3)}if(fDislikes(window.location.href),checkSponsors(window.location.href),window.location.pathname.indexOf("watch")>-1||window.location.pathname.indexOf("shorts")>-1)var unV=setInterval((()=>{document.getElementsByClassName("video-stream")[0].muted=!1,document.getElementsByClassName("video-stream")[0].muted||clearInterval(unV)}),5);function sty(e,t){var n={display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"550",height:"65%",minWidth:"80px",width:"auto",borderRadius:"20px",background:d,fontSize:"12px",marginRight:"5px",textAlign:"center"};for(x in n)e.style[x]=n[x]}function getGeminiModels(){var e="";for(var t in GeminiModels)e+=`<br>\n<button data-action="saveModel" data-value="${t}" ${t==localStorage.getItem("geminiModel")?`style="background:#3ea6ff;color:#fff;"`:""} >${t}\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${c}"  viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg>\n</button>`;return e}function getYTPROCodecs(){var e='<p style="text-align:center;font-size:14px;">This feature is experimental , this may break YTPro if not configured correctly. By default all the codecs are enabled , tap on the buttons below to switch them.</p><br> <vc  style="font-size:14px;">Video Codecs</vc><br>';for(var t in YTPROCodecs.video){e+=`<button data-action="setRemoveCodec" data-value="${n=YTPROCodecs.video[t]}" ${"true"==localStorage.getItem(n)?`style="background:${c};color:${dc};"`:""} >${n}\n<svg  ${"true"!=localStorage.getItem(n)?'style="display:none"':""} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${dc}"  viewBox="0 0 16 16">\n<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>\n</svg>\n</button>`}for(var t in e+='<br><br><vc  style="font-size:14px">Audio Codecs</vc><br>',YTPROCodecs.audio){var n;e+=`<button data-action="setRemoveCodec" data-value="${n=YTPROCodecs.audio[t]}" ${"true"==localStorage.getItem(n)?`style="background:${c};color:${dc};"`:""} >${n}\n<svg ${"true"!=localStorage.getItem(n)?'style="display:none"':""} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${dc}"  viewBox="0 0 16 16">\n<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>\n</svg>\n</button>`}return e+=`<br><br>\n<div>Block 60FPS <span data-action="block_60fps" style="${sttCnf(0,0,"block_60fps")}" ><b style="${sttCnf(0,1,"block_60fps")}" ></b></span></div> `,e+=`<br><br><button data-action="done" style="margin-top:10px;width:25%;float:right;text-align:center;background:${c};color:${dc};" >Done</button>`}function setRemoveCodec(e,t){"true"==localStorage[e]?(localStorage.setItem(e,"false"),t.style.background=isD?"rgba(255,255,255,.1)":"rgba(0,0,0,.1)",t.style.color=c,t.children[0].style.display="none"):(localStorage.setItem(e,"true"),t.style.background=c,t.style.color=dc,t.children[0].style.display="block")}

async function ytproSettings(){
    var e=document.createElement("div"),t=document.createElement("div");
    
    e.setAttribute("id","settingsprodiv");
    t.setAttribute("id","ssprodivI");
    
    e.setAttribute("style",`
        height:100%; width:100%; position:fixed; top:0; left:0;
        display:flex; justify-content:center; align-items:center;
        background:rgba(0,0,0,0.85); z-index:99999;
    `);
    
    e.addEventListener("click",(function(e){
        e.target==t||t.contains(e.target)||history.back()
    }));
    
    var bgMain = isD ? "#212121" : "#f1f1f1";
    var txtColor = isD ? "#ccc" : "#444";
    var headingColor = isD ? "#ffffff" : "#111111";
    var borderCol = isD ? "#333333" : "#e0e0e0";
    var headerBg = isD ? "#1a1a1a" : "#e9e9e9";
    
    t.setAttribute("style", `
        height:100%; width:100%; overflow-y:auto; overflow-x:hidden;
        background:${bgMain}; position:fixed; top:0; left:0;
        z-index:9999999999; box-sizing:border-box; color:${txtColor};
        display: flex; flex-direction: column;
    `);
    
    t.innerHTML=`<style>
        #settingsprodiv a { text-decoration: underline; color: #3ea6ff; }
        .settings-wrapper { display: flex; flex-direction: column; width: 100%; height: 100%; box-sizing: border-box; }
        .settings-header { display: flex; align-items: center; padding: 16px; background: ${headerBg}; font-size: 20px; font-weight: bold; border-bottom: 1px solid ${borderCol}; color: ${headingColor}; position: sticky; top: 0; z-index: 1000; }
        .back-btn { width: 24px; height: 24px; margin-right: 16px; cursor: pointer; color: ${headingColor}; fill: none; stroke: currentColor; stroke-width: 2.5; }
        .settings-content { padding: 16px 16px 120px 16px; display: flex; flex-direction: column; gap: 24px; box-sizing: border-box; }
        .settings-group { background: ${isD ? "#181818" : "#ffffff"}; border-radius: 12px; overflow: hidden; border: 1px solid ${borderCol}; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .group-title { display: flex; align-items: center; gap: 12px; padding: 14px 16px; font-size: 15px; font-weight: bold; color: ${headingColor}; background: ${isD ? "#2c2c2c" : "#e4e4e4"}; border-bottom: 1px solid ${borderCol}; }
        .group-icon { width: 20px; height: 20px; color: ${headingColor}; fill: none; stroke: currentColor; stroke-width: 2; }
        .group-items { display: flex; flex-direction: column; }
        .item-row { display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid ${borderCol}; text-align: left; background: transparent; }
        .item-row:last-child { border-bottom: none; }
        .item-info { display: flex; flex-direction: column; gap: 4px; flex: 1; padding-right: 16px; }
        .item-title { font-size: 15px; font-weight: bold; color: ${headingColor}; }
        .item-desc { font-size: 12px; color: ${txtColor}; line-height: 1.4; }
        .item-subtext { font-size: 13px; color: #888888; font-weight: 500; margin-top: 2px; }
        .clickable-item { cursor: pointer; transition: background-color 0.2s; }
        .clickable-item:active { background: ${isD ? "#333333" : "#e0e0e0"}; }
        
        /* Inputs Fixed */
        .input-field { 
            width: 100%; height: 42px; 
            background: ${isD ? "#121212" : "#fafafa"} !important; 
            border: 1px solid ${borderCol} !important; 
            border-radius: 8px; padding: 0 12px; 
            color: ${headingColor} !important; 
            font-size: 14px; box-sizing: border-box; margin-top: 8px; 
            pointer-events: auto !important;
            -webkit-user-select: text !important;
            user-select: text !important;
        }
        .input-field:focus { outline: none; border-color: #3ea6ff; }
        .chevron-right { width: 18px; height: 18px; color: #888888; fill: none; stroke: currentColor; stroke-width: 2.5; }
        
        /* Popups Fixed */
        #ssprodivI .geminiModels, #ssprodivI .disableCodecs, #ssprodivI .geminiPrompt {
            position: fixed;
            bottom: 24px;
            left: 5%;
            width: 90%;
            max-height: 80%;
            overflow-y: auto;
            z-index: 99999999;
            background: ${isD ? "#2c2c2c" : "#ffffff"};
            color: ${headingColor};
            box-shadow: 0px 10px 30px rgba(0,0,0,0.5);
            border-radius: 20px;
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid ${borderCol};
            display: none;
        }
        #ssprodivI .geminiPrompt textarea {
            height: 180px;
            width: 100%;
            border-radius: 12px;
            padding: 12px;
            background: ${isD ? "#181818" : "#f5f5f5"};
            color: ${headingColor};
            border: 1px solid ${borderCol};
            box-sizing: border-box;
            font-size: 14px;
        }
        #ssprodivI .disableCodecs button, #ssprodivI .geminiModels button {
            width: 100%;
            margin-bottom: 8px;
            padding: 12px;
            background: ${isD ? "#1e1e1e" : "#eaeaea"};
            color: ${headingColor};
            border: 1px solid ${borderCol};
            border-radius: 10px;
            font-size: 14px;
            text-align: left;
            cursor: pointer;
        }
        #ssprodivI .disableCodecs button:active, #ssprodivI .geminiModels button:active {
            background: #3ea6ff;
            color: #ffffff;
        }
    </style>
    
    <div class="settings-wrapper">
      <div class="settings-header">
         <svg class="back-btn" onclick="history.back()" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
         <span>Settings / සැකසීම්</span>
      </div>
      
      <div class="settings-content">
         
         <!-- General Section -->
         <div class="settings-group">
            <div class="group-title">
               <div class="group-title-left">
                  <svg class="group-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  <span>General</span>
               </div>
            </div>
            
            <div class="group-items">
               <div class="item-row">
                  <div class="item-info">
                     <div class="item-title">Autoskip Sponsors</div>
                     <div class="item-desc">Automatically skip sponsor segments in video playback.</div>
                  </div>
                  <span data-action="sttCnf" data-value="autoSpn" style="${sttCnf(0,0,"autoSpn")}" ><b style="${sttCnf(0,1,"autoSpn")}"></b></span>
               </div>

               <div class="item-row">
                  <div class="item-info">
                     <div class="item-title">Gesture Controls</div>
                     <div class="item-desc">Enable swipe-gestures to adjust volume and screen brightness.</div>
                  </div>
                  <span data-action="sttCnf" data-value="gesC" style="${sttCnf(0,0,"gesC")}" ><b style="${sttCnf(0,1,"gesC")}"></b></span>
               </div>

               <div class="item-row">
                  <div class="item-info">
                     <div class="item-title">Miniplayer Gesture</div>
                     <div class="item-desc">Allow swiping action to trigger or dismiss the miniplayer.</div>
                  </div>
                  <span data-action="sttCnf" data-value="gesM" style="${sttCnf(0,0,"gesM")}" ><b style="${sttCnf(0,1,"gesM")}"></b></span>
               </div>

               <div class="item-row">
                  <div class="item-info">
                     <div class="item-title">Force Zoom</div>
                     <div class="item-desc">Force all standard videos to scale up and fill the entire screen.</div>
                  </div>
                  <span data-action="sttCnf" data-value="fzoom" style="${sttCnf(0,0,"fzoom")}" ><b style="${sttCnf(0,1,"fzoom")}"></b></span>
               </div>

               <div class="item-row">
                  <div class="item-info">
                     <div class="item-title">Background Play</div>
                     <div class="item-desc">Continue video audio playback even while using other applications or when the screen is turned off.</div>
                  </div>
                  <span data-action="sttCnf" data-value="bgplay" style="${sttCnf(0,0,"bgplay")}" ><b style="${sttCnf(0,1,"bgplay")}"></b></span>
               </div>

               <div class="item-row">
                  <div class="item-info">
                     <div class="item-title">Hide Shorts</div>
                     <div class="item-desc">Remove and hide YouTube Shorts videos from your recommendation feed.</div>
                  </div>
                  <span data-action="sttCnf" data-value="shorts" style="${sttCnf(0,0,"shorts")}" ><b style="${sttCnf(0,1,"shorts")}"></b></span>
               </div>
            </div>
         </div>

         <!-- AI & Gemini Section -->
         <div class="settings-group">
            <div class="group-title">
               <div class="group-title-left">
                  <svg class="group-icon" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                  <span>AI & Gemini</span>
               </div>
            </div>
            
            <div class="group-items">
               <div class="item-row">
                  <div class="item-info">
                     <div class="item-title">Use single Gemini chat</div>
                     <div class="item-desc">Maintain chat thread persistence instead of opening a brand new chat for each video.</div>
                  </div>
                  <span data-action="sttCnf" data-value="saveCInfo" style="${sttCnf(0,0,"saveCInfo")}" ><b style="${sttCnf(0,1,"saveCInfo")}"></b></span>
               </div>

               <div class="item-row clickable-item" data-action="geminiModels">
                  <div class="item-info">
                     <div class="item-title">Select Gemini Model</div>
                     <div class="item-subtext">Active Model: ${localStorage.getItem("geminiModel") || "None Selected"}</div>
                  </div>
                  <svg class="chevron-right" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
               </div>

               <div class="item-row clickable-item" data-action="geminiPrompt">
                  <div class="item-info">
                     <div class="item-title">Edit Gemini Prompt</div>
                     <div class="item-desc">Customize default instructions for AI summarization.</div>
                  </div>
                  <svg class="chevron-right" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
               </div>
            </div>
         </div>

         <!-- Codecs & Performance -->
         <div class="settings-group">
            <div class="group-title">
               <div class="group-title-left">
                  <svg class="group-icon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>
                  <span>Codecs & Playback</span>
               </div>
            </div>
            
            <div class="group-items">
               <div class="item-row clickable-item" data-action="disableCodecs">
                  <div class="item-info">
                     <div class="item-title">Disable Codecs</div>
                     <div class="item-desc">Opt-out of specific audio or video codecs to optimize playback compatibility.</div>
                  </div>
                  <svg class="chevron-right" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
               </div>
            </div>
         </div>

         <!-- System & Development -->
         <div class="settings-group">
            <div class="group-title">
               <div class="group-title-left">
                  <svg class="group-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>Developer & Debug</span>
               </div>
            </div>
            
            <div class="group-items">
               <div class="item-row">
                  <div class="item-info">
                     <div class="item-title">Developer Mode</div>
                     <div class="item-desc">Enable built-in Eruda logging console for debugging tools.</div>
                  </div>
                  <span data-action="sttCnf" data-value="devMode" style="${sttCnf(0,0,"devMode")}" ><b style="${sttCnf(0,1,"devMode")}"></b></span>
               </div>
            </div>
         </div>

         <!-- Actions & Utilities -->
         <div class="settings-group">
            <div class="group-title">
               <div class="group-title-left">
                  <svg class="group-icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14H11v-2h2zm0-4H11V7h2z"/></svg>
                  <span>Actions & Utilities</span>
               </div>
            </div>
            
            <div class="group-items">
               <div class="item-row">
                  <div class="item-info" style="width:100%;">
                     <div class="item-title">Navigate YouTube URL</div>
                     <input type="url" placeholder="Paste YouTube link here..." id="ytproUrlInput" class="input-field">
                  </div>
               </div>

               <div class="item-row clickable-item" data-action="hearts">
                  <div class="item-info">
                     <div class="item-title">Liked Videos</div>
                     <div class="item-desc">View your compiled collection of liked/hearted videos.</div>
                  </div>
                  <svg class="chevron-right" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
               </div>

               <div class="item-row clickable-item" data-action="checkUpdate">
                  <div class="item-info">
                     <div class="item-title">Check for Updates</div>
                     <div class="item-desc">Check for newer official YTPro mod releases online.</div>
                  </div>
                  <svg class="chevron-right" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
               </div>

               <div class="item-row clickable-item" data-action="issues">
                  <div class="item-info">
                     <div class="item-title">Report Bugs</div>
                     <div class="item-desc">Log found defects or share feature feedback directly with developers.</div>
                  </div>
                  <svg class="chevron-right" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
               </div>

               <div class="item-row clickable-item" data-action="sponsor">
                  <div class="item-info">
                     <div class="item-title" style="color: #ffbc00; font-weight: bold;">Become a Sponsor</div>
                     <div class="item-desc">Sponsor development efforts on GitHub to support ongoing work.</div>
                  </div>
                  <svg class="chevron-right" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
               </div>
            </div>
         </div>

      </div>
   </div>
   
   <div class="geminiModels"></div>
   <div class="geminiPrompt" style="text-align:center;">
       <textarea>${localStorage.getItem("prompt")}</textarea>
       <button data-action="savePrompt" style="margin-top:12px; width:100%; height:42px; border-radius:8px; border:none; text-align:center; font-weight:bold; background:#3ea6ff; color:#ffffff;" >Save Prompt</button>
       <br><br>
   </div>
   <div class="disableCodecs"></div>
`;
    
    document.body.appendChild(e);
    e.appendChild(t);
    
    // Stop event propagation inside URL Input to allow focus & pasting
    var urlInput = document.getElementById("ytproUrlInput");
    if(urlInput){
        urlInput.addEventListener("touchstart", (ev) => ev.stopPropagation(), {passive: true});
        urlInput.addEventListener("touchend", (ev) => ev.stopPropagation(), {passive: true});
        urlInput.addEventListener("keyup", searchUrl);
    }
    
    var n={
        follow:()=>{Android.oplink("https://www.instagram.com/habitius.daily")},
        hearts:()=>{window.location.hash="#hearts"},
        checkUpdate:()=>{checkUpdates()},
        sttCnf:(e,t)=>{sttCnf(e,t)},
        geminiModels:()=>{
            var el = document.getElementsByClassName("geminiModels")[0];
            el.style.display="block";
            el.innerHTML=getGeminiModels();
        },
        geminiPrompt:()=>{
            document.getElementsByClassName("geminiPrompt")[0].style.display="block";
        },
        issues:()=>{Android.oplink("https://github.com/prateek-chaubey/YTPRO/issues")},
        disableCodecs:()=>{
            var el = document.getElementsByClassName("disableCodecs")[0];
            el.style.display="block";
            el.innerHTML=getYTPROCodecs();
        },
        sponsor:()=>{Android.oplink("https://github.com/sponsors/prateek-chaubey")},
        savePrompt:e=>{
            localStorage.setItem("prompt",e.previousElementSibling.value);
            e.parentElement.style.display="none";
        },
        done:e=>{e.parentElement.style.display="none"},
        setRemoveCodec:(e,t)=>{setRemoveCodec(t,e)},
        block_60fps:e=>{sttCnf(e,"block_60fps")},
        saveModel:(e,t)=>{
            localStorage.removeItem("geminiChatInfo");
            localStorage.setItem("geminiModel",t);
            e.parentElement.style.display="none";
            // Update active model subtitle dynamically
            const subtext = document.querySelector('[data-action="geminiModels"] .item-subtext');
            if(subtext) subtext.textContent = "Active Model: " + t;
        }
    };
    
    t.querySelectorAll("[data-action]").forEach((e=>{
        e.addEventListener("click",(()=>{"sttCnf"==e.dataset.action?n[e.dataset.action](e,e.dataset.value):n[e.dataset.action](e)}))
    }));
    
    t.querySelector(".disableCodecs").addEventListener("click",(e=>{
        var t=e.target.closest("[data-action]");
        t&&n[t.dataset.action](t,t.dataset.value)
    }));
    
    t.querySelector(".geminiModels").addEventListener("click",(e=>{
        var t=e.target.closest("[data-action]");
        t&&n[t.dataset.action](t,t.dataset.value)
    }));
}

function searchUrl(e){if(13===e.keyCode||"Enter"===e){var t=e.target.value;const o=/(?:https?:\/\/)?(?:www\.|m\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|shorts|live)\/))([a-zA-Z0-9_-]{11})/,i=t.match(o);var n=i?i[1]:null;if(n)return navigateInternalYtMweb(n);var a=document.createElement("a");a.href=t,document.body.appendChild(a);try{document.getElementById("settingsprodiv").remove()}catch{}a.click()}}function checkUpdates(){parseFloat(Android.getInfo())<parseFloat(YTProVer)?updateModel():Android.showToast("Your app is up to date"),fetch("https://youtube.com/ytpro_cdn/npm/ytpro",{cache:"reload"}),fetch("https://youtube.com/ytpro_cdn/npm/ytpro/bgplay.js",{cache:"reload"}),fetch("https://youtube.com/ytpro_cdn/npm/ytpro/innertube.js",{cache:"reload"})}

function sttCnf(e,t,n){
    var colors = {
        bgOff: "#3e3e3e",
        bgOn: "#ffffff",
        knobOff: "#9e9e9e",
        knobOn: "#1f1f1f"
    };
    if("string"==typeof n){
        const isTrue = localStorage.getItem(n) === "true";
        if(t === 1){
            return isTrue 
                ? `background:${colors.knobOn}; left: 23px; top: 3px; width: 18px; height: 18px; position: absolute; border-radius: 50%; transition: all 0.25s ease;` 
                : `background:${colors.knobOff}; left: 3px; top: 3px; width: 18px; height: 18px; position: absolute; border-radius: 50%; transition: all 0.25s ease;`;
        } else {
            return isTrue 
                ? `background:${colors.bgOn}; width: 44px; height: 24px; border-radius: 12px; position: relative; display: inline-block; transition: all 0.25s ease; cursor: pointer;` 
                : `background:${colors.bgOff}; width: 44px; height: 24px; border-radius: 12px; position: relative; display: inline-block; transition: all 0.25s ease; cursor: pointer;`;
        }
    }
    const isTrue = localStorage.getItem(t) === "true";
    if(isTrue){
        localStorage.setItem(t,"false");
        e.style.background=colors.bgOff;
        e.children[0].style.left="3px";
        e.children[0].style.background=colors.knobOff;
    } else {
        localStorage.setItem(t,"true");
        e.style.background=colors.bgOn;
        e.children[0].style.left="23px";
        e.children[0].style.background=colors.knobOn;
    }
    "false"==localStorage.getItem("fzoom")?document.getElementsByName("viewport")[0].setAttribute("content","width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,"):document.getElementsByName("viewport")[0].setAttribute("content",""),"true"==localStorage.getItem("bgplay")?Android.setBgPlay(!0):Android.setBgPlay(!1),"true"!=localStorage.getItem("gesC")&&(document.getElementById("brtS")?.remove(),document.getElementById("volS")?.remove());
    if("false"==localStorage.getItem("devMode")){try{eruda.destroy()}catch(e){}}else if(!window.eruda&&"true"==localStorage.getItem("devMode")){
        var o=document.createElement("script");
        o.src="//youtube.com/ytpro_cdn/npm/eruda";
        document.body.appendChild(o);
        o.onload=()=>{
            try { if(window.eruda) eruda.init(); } catch(err){}
        }
    }
}

function formatFileSize(e){var t=parseInt(e);for(var n=0;t>1024;n++)t/=1024;return`${t.toFixed(1)} ${["B","KB","MB","GB","TB","PB"][n]}`}async function ytproDownVid(){window.ytproSabrDownload()}function showHideAdaptives(){document.querySelectorAll(".adpFormats").forEach((e=>{"none"==e.style.display?e.style.display="flex":e.style.display="none"}))}function downCap(e,t){Android.downvid(t,e,"plain/text")}function YTDownVid(e,t){var n="";".png"==t?n="image/png":".mp4"==t?n="video/mp4":".mp3"==t&&(n="audio/mp3"),Android.downvid(e.getAttribute("data-ytprotit")+t,e.getAttribute("data-ytprourl"),n)}var stopProp=!1,zoomIn=!1,scale=1;function checkDirection(e){n>t&&n-t>20?minimize(!0):n<t&&t-n>20&&minimize(!1)}function getDistance(e){const[t,n]=e;return Math.hypot(n.pageX-t.pageX,n.pageY-t.pageY)}function minimize(e){var t=document.getElementById("miniIframe")||(()=>{var e=document.createElement("iframe");e.setAttribute("id","miniIframe"),e.setAttribute("style",`\nheight:99.999%;width:100%;\nbackground:${c};\ntop:0px;\nline-height:50px;\nposition:fixed;\nleft:0;\nz-index:999;\nborder:0;\n`),e.src="https://m.youtube.com/",document.body.appendChild(e);var t=e.contentWindow||e.contentDocument.defaultView,n=t.document;"complete"==n.readyState&&t.trustedTypes&&t.trustedTypes.createPolicy&&!t.trustedTypes.defaultPolicy&&t.trustedTypes.createPolicy("default",{createHTML:e=>e,createScriptURL:e=>e,createScript:e=>e}),t.navigation.addEventListener("navigate",(e=>{if(e.destination.url.indexOf("youtube.com")>-1){(e.destination.url.indexOf("/watch")>-1||e.destination.url.indexOf("/shorts")>-1)&&(window.location.href=e.destination.url);n.createElement("script")}else window.location.href=e.destination.url}));var a=n.createElement("script"),o=n.createTextNode("window.addEventListener('DOMContentLoaded', function() {\nvar script2 = document.createElement('script');\nscript2.src=\"//youtube.com/ytpro_cdn/npm/ytpro\";\ndocument.body.appendChild(script2);\n});\n");return a.appendChild(o),n.body.appendChild(a),e})(),n=document.getElementById("player-container-id");e?(t.style.display="block",n.setAttribute("ogTop",getComputedStyle(n).top),n.style.transform="scale(0.65)",n.style.top=window.screen.height-2.5*n.getBoundingClientRect().height+"px",n.style.zIndex="9999"):(t.style.display="none",n.style.transform="scale(1)",n.style.top=n.getAttribute("ogTop"),n.style.zIndex="normal",n.removeAttribute("ogTop"))}function callbackSNlM0e(){return new Promise((e=>{callbackSNlM0e.resolve=e}))}function callbackGeminiClient(){return new Promise((e=>{callbackGeminiClient.resolve=e}))}

function handleGeminiResponse(e){
    var t=e.stream;
    if(null==t)return document.getElementById("GeminiResponse").innerHTML='<center style="margin-top:15px" > An error Occurred while connecting to Gemini';
    var n=t.split("\n"),a=(e=>{for(var t in e)try{var n=JSON.parse(e[t][2]);if(n[4]?.[0]?.[0].indexOf("rc_")>-1)return n}catch(e){console.log("JSON parse error: "+e)}})(JSON.parse(n[2]))||[],o=[];
    o.push(a?.[1]?.[0]),o.push(a?.[1]?.[1]),o.push(a?.[4]?.[0]?.[0]),localStorage.setItem("geminiChatInfo",o.toString()),a=a?.[4]?.[0];
    var i=a?.[1]?.[0]||"";
    i=i.replace(/http:\/\/googleusercontent\.com\/\S+/g,"");
    var l=a?.[37]?.[0]?.[0]||null,r=[];
    for(var s in a?.[12]?.[1]){var d=a?.[12]?.[1]?.[s];r.push({url:d[0][0][0],alt:d[0][4],title:d[7][0]}),i+=`<center><img alt="${d[0][4]}" src="${d[0][0][0]}"></center>`}
    let c=new showdown.Converter;
    c.setFlavor("github");
    let p=(e=>{
        var t=e;
        // Link conversions
        var n=t.match(/href="([^"]*)"/g)||[],a=[...n].map((e=>e.replace(/href="|"/g,"")));
        n.forEach(((e,n)=>{
            var o=new URL(a[n]).searchParams.get("t");
            null!=o?t=t.replace(e,`href="javascript:void(0);" onclick="document.getElementsByClassName('video-stream')[0].currentTime='${o}'"`):a[n].indexOf("youtube.com")<0&&a[n].indexOf("youtu.be")<0&&(t=t.replace(e,`href="javascript:void(0);" onclick="try{document.getElementsByClassName('video-stream')[0].pause();}catch{}Android.oplink('${a[n]}')"`))
        }));
        
        // Plain text timestamp conversion (e.g. 1:23, 12:34, 1:23:45) to clickable links
        t = t.replace(/(?:\b|\s)(\d{1,2}:\d{2}(?::\d{2})?)(?:\b|\s)/g, (match, timeStr) => {
            const parts = timeStr.split(':').map(Number);
            let seconds = 0;
            if (parts.length === 2) {
                seconds = parts[0] * 60 + parts[1];
            } else if (parts.length === 3) {
                seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
            }
            return ` <a href="javascript:void(0);" onclick="document.getElementsByClassName('video-stream')[0].currentTime=${seconds};">${timeStr}</a> `;
        });
        return t;
    });
    
    var u=null!=l?`<button onclick="(this.nextElementSibling.style.height=='auto') ? (this.children[0].style.transform='rotate(-90deg)',this.nextElementSibling.style.height='0') : (this.children[0].style.transform='rotate(90deg)',this.nextElementSibling.style.height='auto');" class="think" >Show Thinking \n<svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg);margin-left:10px" width="16" height="16" fill="${isD?"#ccc":"#444"}" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg></button>\n<div class="geminiThoughts">\n<br>\n${c.makeHtml(l)}\n\n\n</div><br>`:"";
    document.getElementById("GeminiResponse").innerHTML=`<a href="https://gemini.google.com/chat/${o[0].replace("c_","")}" >Go to the chat</a><br><br>\n\n${u}\n\n\n\n<div class="geminiAnswer">\n${p(c.makeHtml(i))}\n</div>\n`;
}

async function geminiInfo(){
    if(null==document.getElementById("GeminiResponse"))(e=document.createElement("div")).setAttribute("style",`min-height:80px;max-height:400px;display:block;height:auto;overflow:scroll;font-weight:400;width:calc(92% - 20px);font-size:14px;padding:10px;position:relative;margin:auto;background:${d};border-radius:15px;margin-bottom:8px;`),e.setAttribute("id","GeminiResponse"),insertAfter(document.getElementById("ytproMainDivE"),e);else var e=document.getElementById("GeminiResponse");
    document.getElementById("GeminiResponse").innerHTML='\n<div class="geminiLoader"></div>';
    var t=Android.getAllCookies(window.location.href);
    if(t.indexOf("__Secure-1PSID=")<0)return void(e.innerHTML=`\n<center style="margin-top:15px">\n<span >Sign in to use Gemini<span>\n<br><br>\n<a href="https://accounts.google.com/ServiceLogin?service=youtube" >\n<button style="background:${c};color:${isD?"#000":"#fff"};font-weight:500;height:35px;width:90px;border-radius:25px;text-align:center;line-height:35px;">Sign In</button>\n</a>\n<br><br>\n\n</center>`);
    t=t.split(";");
    var n="";
    t.forEach((e=>{(e.indexOf("__Secure-1PSID=")>-1||e.indexOf("__Secure-1PSIDTS=")>-1)&&(n+=e+";")}));
    var a=JSON.stringify({accept:"*/*","accept-language":"en","content-type":"application/x-www-form-urlencoded;charset=UTF-8","x-goog-ext-525001261-jspb":GeminiModels[localStorage.getItem("geminiModel")],"x-same-domain":"1",cookie:n,Referer:"https://gemini.google.com/","Referrer-Policy":"origin"});
    if(""==GeminiAT){
        Android.getSNlM0e(n),GeminiAT=await callbackSNlM0e();
        var o=document.createElement("script");
        o.src="//youtube.com/ytpro_cdn/npm/showdown/dist/showdown.min.js";
        document.body.appendChild(o);
    }
    
    // Robust URL & Title extraction to prevent extraction crash
    var videoId = "";
    try {
        var urlObj = new URL(window.location.href);
        videoId = urlObj.searchParams.get("v");
        if (!videoId && urlObj.pathname.includes("/shorts/")) {
            videoId = urlObj.pathname.split("/shorts/")[1]?.split("?")[0];
        }
    } catch(err){}
    
    var videoTitle = "Video";
    try {
        videoTitle = document.getElementsByClassName("slim-video-metadata-header")[0]?.textContent || document.querySelector("h1.media-item-metadata-title")?.textContent || document.title || "Video";
        videoTitle = videoTitle.replaceAll("|","").replaceAll("\\","").replaceAll("?","").replaceAll("*","").replaceAll("<","").replaceAll("/","").replaceAll(":","").replaceAll('"',"").replaceAll(">","");
    } catch(err){}

    var i=localStorage.getItem("prompt").replaceAll("{url}",window.location.href).replaceAll("{videoId}",videoId).replaceAll("{title}",videoTitle);
    
    var l=null;
    "true"==localStorage.getItem("saveCInfo")&&null!=localStorage.getItem("geminiChatInfo")&&(l=localStorage.getItem("geminiChatInfo").split(","));
    const r=new URLSearchParams;
    r.append("f.req",JSON.stringify([null,JSON.stringify([[i],null,l])])),r.append("at",GeminiAT),Android.GeminiClient("https://gemini.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate",a,r.toString()),handleGeminiResponse(await callbackGeminiClient())
}

document.body.addEventListener("touchstart",(e=>{t=e.changedTouches[0].screenY,2===e.touches.length&&(a=getDistance(e.touches))}),{capture:!0}),document.body.addEventListener("touchmove",(e=>{if(stopProp&&e.stopPropagation(),2===e.touches.length&&null!==a){const n=getDistance(e.touches)/a;if(stopProp=!0,(e.target.className.toString().includes("video-stream")||e.target.className.toString().includes("player-controls-background"))&&document.fullscreenElement)if(n>1.05){var t=document.getElementsByClassName("video-stream")[0];zoomIn=!0,scale=Math.max(screen.height/t.offsetHeight,screen.width/t.offsetWidth),addMaxButton()}else n<.95&&(zoomIn=!1,scale=1,addMaxButton())}}),{capture:!0}),document.body.addEventListener("touchend",(e=>{n=e.changedTouches[0].screenY,!e.target.className.toString().includes("video-stream")&&!e.target.className.toString().includes("player-controls-background")||document.fullscreenElement||"true"!=localStorage.getItem("gesM")||checkDirection(),e.touches.length<2&&(a=null,setTimeout((()=>{stopProp=!1}),500))}),{capture:!0}),navigation.addEventListener("navigate",(e=>{(e.destination.url.indexOf("watch")>-1||e.destination.url.indexOf("shorts")>-1)&&(dislikes="...",fDislikes(e.destination.url),checkSponsors(e.destination.url))}));var volSvg='<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" focusable="false" aria-hidden="true" style="pointer-events: none;filter:drop-shadow(0px 0px 1px black);position:absolute;top:10%"><path fill="#fff" d="M11.485 2.143 3.913 6.687A6 6 0 001 11.832v.338a6 6 0 002.913 5.144l7.572 4.543A1 1 0 0013 21V3a1.001 1.001 0 00-1.515-.857Zm6.88 2.079a1 1 0 00-.001 1.414 9 9 0 010 12.728 1 1 0 001.414 1.414 11 11 0 000-15.556 1 1 0 00-1.413 0Zm-2.83 2.828a1 1 0 000 1.415 5 5 0 010 7.07 1 1 0 001.415 1.415 6.999 6.999 0 000-9.9 1 1 0 00-1.415 0Z"></path></svg>',brtSvg='<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="16" viewBox="0 0 24 24" width="16" style="filter:drop-shadow(0px 0px 1px black);position:absolute;top:10%;"><rect fill="none" height="24" width="24"/><path fill="#fff" d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>';

async function pkc(){
    if(window.location.href.indexOf("youtube.com/watch")>-1){
        try{
            var e=document.getElementsByTagName("dislike-button-view-model")[0].children[0];
            if(e.children[0].children[0].style.width="auto",e.children[0].children[0].style.paddingRight="15px",document.getElementById("diskl"))
                document.getElementById("diskl").innerHTML=dislikes;
            else{
                var n=document.createElement("span");
                n.setAttribute("id","diskl"),n.innerHTML=dislikes,n.style.marginLeft="5px",insertAfter(e.getElementsByClassName("yt-spec-button-shape-next__icon")[0],n)
            }
        }catch(e){}
        try{
            if("true"==localStorage.getItem("gesC")){
                // Fixed Overlay width, position, height to avoid overlapping with top-right player buttons
                var a={
                    height:"50%",
                    width:"50px", 
                    display:"flex",
                    "flex-direction":"column",
                    "align-items":"center",
                    "justify-content":"center",
                    position:"absolute",
                    top:"25%", 
                    right:"0px",
                    opacity:"0",
                    "z-index":"1000"
                },o=document.createElement("div"),i=document.createElement("div");
                i.setAttribute("id","brtS"),o.setAttribute("id","volS"),Object.assign(o.style,a),Object.assign(i.style,a),i.style.left="0";
                
                // Seeker Bar Width set to 25px (Even wider) and center-aligned properly (calc(50% - 12.5px))
                o.innerHTML=`${volSvg}<div style="position:absolute;bottom:5%;left:calc(50% - 12.5px);background:rgba(255,255,255,0.3); height:70%;width:25px;border-radius:12px;color:red;box-shadow:0px 0px 2px black;pointer-events:none" ><div style="background:white;width:100%;height:${100*vol}%;border-radius:12px;position:absolute;bottom:0;box-shadow:0px 0px 2px black;" id="volIS"></div></div>`;
                i.innerHTML=`${brtSvg}<div style="position:absolute;bottom:5%;left:calc(50% - 12.5px);background:rgba(255,255,255,0.3); height:70%;width:25px;border-radius:12px;color:red;box-shadow:0px 0px 2px black;pointer-events:none" ><div style="background:white;width:100%;height:${100*brt}%;border-radius:12px;position:absolute;bottom:0;box-shadow:0px 0px 1px black;" id="brtIS"></div></div>`;
                
                document.getElementById("brtS")||(document.getElementById("player-container-id").appendChild(i),i.addEventListener("touchmove",(e=>{e.preventDefault(),i.style.opacity="1",t-e.touches[0].pageY>0?brt+=sens:brt-=sens,brt>1&&(brt=1),brt<0&&(brt=0),t=e.touches[0].pageY,Android.setBrightness(brt),document.getElementById("brtIS").style.height=100*brt+"%"}),{passive:!1}),i.addEventListener("touchend",(e=>{i.style.opacity="0"}),{passive:!1})),document.getElementById("volS")||(document.getElementById("player-container-id").appendChild(o),o.addEventListener("touchmove",(e=>{e.preventDefault(),o.style.opacity="1",t-e.touches[0].pageY>0?vol+=sens:vol-=sens,vol>1&&(vol=1),vol<0&&(vol=0),t=e.touches[0].pageY,Android.setVolume(vol),document.getElementById("volIS").style.height=100*vol+"%"}),{passive:!1}),o.addEventListener("touchend",(e=>{o.style.opacity="0"}),{passive:!1}))
            }
        }catch(e){console.log(e)}
        if(null==document.getElementById("ytproMainDivE")){var l=document.createElement("div");l.setAttribute("id","ytproMainDivE"),l.setAttribute("style","\nheight:50px;width:100%;display:block;overflow:auto;\n"),insertAfter(document.getElementsByClassName("slim-video-action-bar-actions")[0],l);var r=document.createElement("div");r.setAttribute("style","\nheight:50px;width:100%;display:flex;overflow:auto;\nalign-items:center;justify-content:center;padding-left:20px;padding-right:10px;\n"),l.appendChild(r);var s=document.createElement("div");sty(s),s.style.width="115px",s.style.height="calc(65% - 4.5px)",s.style.position="relative",s.style.background=`linear-gradient(${isD?"#272727,#272727":"#f2f2f2,#f2f2f2"}) padding-box , linear-gradient(16deg ,#4285f4 ,#9b72cb ,#d96570) border-box`,s.style.border="2px solid transparent",s.innerHTML=`\n<svg style="height:16px;width:16px" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/><defs><radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"><stop offset=".067" stop-color="#9168C0"/><stop offset=".343" stop-color="#5684D1"/><stop offset=".672" stop-color="#1BA1E3"/></radialGradient></defs></svg>\n<span style="margin-left:4px">Gemini</span>\n<style type="text/css">\n#GeminiResponse img{\nmax-width:90%;\nheight:auto;\nborder-radius:10px;\nmargin-top:5px;\n}\n#GeminiResponse a{\ncolor:rgb(62,166,255);\n}\n.geminiLoader,.geminiLoader:before,.geminiLoader:after{\ncontent:'';\nheight:10px;\nwidth:70%;\nposition:absolute;\ntop:15px;\nborder-radius:5px;\nleft:10px;\nbackground:${d};\nanimation: geminiLoad 1s linear infinite alternate;\n}\n.geminiLoader:before{\ntop:27px;\nleft:0;\n}\n.geminiLoader:after{\ntop:54px;\nleft:0;\nwidth:90%;\n}\n@keyframes geminiLoad{\n0% {\nopacity:1;\n}\n100% {\nopacity:.4;\n}\n}\n.geminiThoughts{\nheight:0;\nwidth:calc(100% - 30px);\ntransition:5s;\nfloat:left;\noverflow:hidden;\npadding-left:5px;\nfont-style:italic;\nborder-left:3px solid ${d};\ndisplay:block;\nfloat:none;\nclear:both;\n}\n.geminiAnswer{\nheight:auto;\nwidth:100%;\ndisplay:block;\nfloat:none;\nclear:both;\n}\n#GeminiResponse .think{\nbackground:transparent;\nfont-size:1.45rem;\nwidth:calc(100% - 20px);\nheight:20px;\ncolor:${isD?"#ccc":"#444"};\nmargin-top:3px;\ntext-align:left;\ndisplay:flex;\npadding-left:5px;\nborder-left:3px solid ${d};\n}\n</style>\n`,r.appendChild(s),s.addEventListener("click",(async function(){parseFloat(Android.getInfo())<parseFloat(YTProVer)?updateModel():geminiInfo()}));var p=document.createElement("div");sty(p),isHeart()?p.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="#ff0000" d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/></svg><span style="margin-left:8px">Heart<span>`:p.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="${c}" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg><span style="margin-left:8px">Heart<span>`,r.appendChild(p),p.addEventListener("click",(()=>{ytProHeart(p)}));var u=document.createElement("div");sty(u),u.style.width="140px",u.innerHTML=`${downBtn.replace('width="18"','width="24"').replace('height="18"','height="24"')}<span style="margin-left:2px">Download<span>`,r.appendChild(u),u.addEventListener("click",(function(){window.location.hash="download"}));var h=document.createElement("div");sty(h),h.style.width="140px",h.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path fill="${c}" d="M18 7h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm3-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm-1 16.01H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1z"/></svg><span style="margin-left:8px">PIP Mode<span>`,r.appendChild(h),h.addEventListener("click",(function(){PIPlayer(!0)}))}}else if(window.location.href.indexOf("youtube.com/shorts")>-1){let e=document.getElementById("brtS"),t=document.getElementById("volS");if(e&&e.remove(),t&&t.remove(),null==document.getElementById("ytproMainSDivE")){var m=document.createElement("div");m.setAttribute("id","ytproMainSDivE"),m.setAttribute("style","width:50px;height:auto;position:relative;display:block;"),ysDown=document.createElement("div"),ysDown.setAttribute("style","\nheight:48px;width:48px;display:flex;align-items:center;justify-content:center;\nfilter:drop-shadow(0 0 1px #0009);\nborder-radius:50%;\n"),ysDown.innerHTML=downBtn.replaceAll(`${c}`,"#fff").replace('width="24"','width="30"').replace('height="24"','height="30"'),ysDown.addEventListener("click",(function(){window.location.hash="download"})),ysHeart=document.createElement("div"),ysHeart.setAttribute("style","\nheight:48px;width:48px;\ndisplay:flex;align-items:center;justify-content:center;\nfilter:drop-shadow(0 0 1px #0009);\nborder-radius:50%;margin-bottom:0px;\n"),isHeart()?ysHeart.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="#ff0000" d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/></svg>':ysHeart.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="#fff" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>',ysHeart.addEventListener("click",(function(){ytProHeart(ysHeart)}));try{document.getElementsByClassName("reel-player-overlay-actions")[0].children[0]&&(document.getElementsByClassName("reel-player-overlay-actions")[0].insertBefore(m,document.getElementsByClassName("reel-player-overlay-actions")[0].children[1]),m.appendChild(ysDown),m.appendChild(ysHeart))}catch{}}try{document.querySelectorAll("dislike-button-view-model")[0].children[0].children[0].children[0].children[1].children[0].innerHTML=dislikes}catch{}}}async function showHearts(){var e=document.createElement("div"),t=document.createElement("div");if(t.setAttribute("id","heartytprodiv"),e.setAttribute("id","outerheartsdiv"),e.setAttribute("style","\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.4);\nz-index:99;\n"),t.setAttribute("style",`\nheight:50%;width:85%;overflow:auto;background:${isD?"#212121":"#f1f1f1"};\nposition:absolute;bottom:20px;\nz-index:9;padding:20px;text-align:center;border-radius:25px;text-align:center;\n`),t.innerHTML=`<style>#heartytprodiv a{text-decoration:none;} #heartytprodiv li{list-style:none; display:flex;align-items:center;border-radius:15px;padding:0px;background:${d};margin:5px;}</style>`,t.innerHTML+="Liked Videos<ul id='listurl'>",t.innerHTML+="<style>.thum{height:70px;border-radius:5px;}.thum img{float:left;height:70px;width:125px;border-radius:15px 0 0 15px;flex-shrink: 0;}</style>",document.body.appendChild(e),e.appendChild(t),e.addEventListener("click",(function(e){event.composedPath().includes(t)||history.back()})),null==localStorage.getItem("hearts"))t.innerHTML+="No Videos Found";else{var n=JSON.parse(localStorage.getItem("hearts"));if(0===Object.keys(n).length)return t.innerHTML+="No Videos Found";for(var a=Object.keys(n).length-1;a>-1;a--){var o=Object.keys(n)[a];t.innerHTML+=`<li class="thum" >\n<img data-action="navigateInternalYtMweb" data-id="${o}" src="${n[o].thumb}" ><br>\n<div style="width:calc(100% - 170px);margin-left:5px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical; -webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;" data-action="navigateInternalYtMweb" data-id="${o}" >${n[o].title}</div>\n<div style="width:calc(100% - (100% - 35px))">\n<svg data-action="remHeart" data-id="${o}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:0px;" fill="#f24" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>\n</div>\n</li>`,await new Promise((e=>setTimeout(e,1)))}t.addEventListener("click",(e=>{var t=e.target.closest("[data-action]");t&&("navigateInternalYtMweb"==t.dataset.action?navigateInternalYtMweb(t.dataset.id):"remHeart"==t.dataset.action&&remHeart(t,t.dataset.id))}))}}function navigateInternalYtMweb(e){window.location.hash="";const t=document.createElement("a");t.href=`/watch?v=${e}`,t.style.display="none",document.body.appendChild(t),t.click(),t.remove()}function remHeart(e,t){if(localStorage.getItem("hearts")?.indexOf(t)>-1){e.parentElement.parentElement.remove();var n=JSON.parse(localStorage.getItem("hearts")||"{}");delete n[t],localStorage.setItem("hearts",JSON.stringify(n))}}function ytProHeart(e){var t=new URLSearchParams(window.location.search).get("v")||window.location.pathname.replace("/shorts/",""),n=document.getElementsByClassName("video-stream")[0],a=document.createElement("canvas");a.style.width="1600px",a.style.height="900px",a.style.background="black";var o=a.getContext("2d");window.location.pathname.indexOf("shorts")>-1?o.drawImage(n,105,0,90,160):o.drawImage(n,0,0,320,180);var i=a.toDataURL("image/jpeg");if(window.location.pathname.indexOf("shorts")>-1)var l={thumb:i,title:document.getElementsByClassName("ytShortsVideoTitleViewModelShortsVideoTitle")[0].textContent.replaceAll("|","").replaceAll("\\","").replaceAll("?","").replaceAll("*","").replaceAll("<","").replaceAll("/","").replaceAll(":","").replaceAll('"',"").replaceAll(">","")};else l={thumb:i,title:document.getElementsByClassName("slim-video-metadata-header")[0].textContent.replaceAll("|","").replaceAll("\\","").replaceAll("?","").replaceAll("*","").replaceAll("<","").replaceAll("/","").replaceAll(":","").replaceAll('"',"").replaceAll(">","")};var r,s="16",d='<span style="margin-left:8px">Heart<span>';(d=window.location.href.indexOf("youtube.com/shorts")>-1?"":'<span style="margin-left:8px">Heart<span>',s=(window.location.href.indexOf("youtube.com/shorts"),"24"),localStorage.getItem("hearts")?.indexOf(t)>-1)?(delete(r=JSON.parse(localStorage.getItem("hearts")||"{}"))[t],localStorage.setItem("hearts",JSON.stringify(r)),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" fill="${window.location.href.indexOf("youtube.com/shorts")>-1?"#fff":c}" viewBox="0 0 24 24">\n<path d="M0 0h24v24H0V0z" fill="none"/><path fill="${window.location.href.indexOf("youtube.com/shorts")>-1?"#fff":"#ff0000"}" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>${d}`):((r=JSON.parse(localStorage.getItem("hearts")||"{}"))[t]=l,localStorage.setItem("hearts",JSON.stringify(r)),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path fill="#ff0000" d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/></svg>${d}`)}function isHeart(){return localStorage.getItem("hearts")?.indexOf(new URLSearchParams(window.location.search).get("v"))>-1||localStorage.getItem("hearts")?.indexOf(window.location.pathname.replace("/shorts/",""))>-1}function removePIP(){isPIP=!1,pauseAllowed=!0,document.exitFullscreen(),document.getElementsByClassName("video-stream")[0].pause(),setTimeout((()=>{document.getElementsByClassName("video-stream")[0].play()}),5)}function PIPlayer(e=!1){var t=document.getElementsByClassName("video-stream")[0];e?t.getBoundingClientRect().height>t.getBoundingClientRect().width?Android.pipvid("portrait"):Android.pipvid("landscape"):(t.requestFullscreen(),t.play(),pauseAllowed=!1,isPIP=!0)}setInterval(pkc,0),HTMLMediaElement.prototype.pause=function(){if(pauseAllowed||PIPause)return e.apply(this,arguments);this.paused&&this.play().catch((()=>{}))};const o=document.exitFullscreen,i=Element.prototype.requestFullscreen;document.exitFullscreen=function(...e){if(!isPIP)return o.apply(this,e)},Element.prototype.requestFullscreen=function(...e){var t=document.getElementsByClassName("video-stream")[0];return t.getBoundingClientRect().height>t.getBoundingClientRect().width?Android.fullScreen(!0):Android.fullScreen(!1),i.apply(this,e)},window.onhashchange=()=>{try{document.getElementById("outerdownytprodiv").remove()}catch{}try{document.getElementById("outerheartsdiv").remove()}catch{}try{document.getElementById("settingsprodiv").remove()}catch{}"#download"==window.location.hash?ytproDownVid():"#settings"==window.location.hash?ytproSettings():"#hearts"==window.location.hash&&showHearts()},(()=>{"use strict";const e=window.fetch;window.fetch=async function(t,n){try{const n="string"==typeof t?t:t.url;if(n.includes("googleads.g.doubleclick.net")||n.includes("youtube.com/youtubei/v1/player/ad_break")||n.includes("youtube.com/pagead/adview")||n.includes("youtube.com/api/stats/ads"))return"";if(n.includes("youtube.com/youtubei/")){const t=await e.apply(this,arguments);try{const e=t.clone();let n=await e.json();"adSlotRenderer"!=n?.responseContext?.webResponseContextExtensionData?.webResponseContextPreloadData?.preloadMessageNames?.[0]&&"shortsAdsRenderer"!=n?.responseContext?.webResponseContextExtensionData?.webResponseContextPreloadData?.preloadMessageNames?.[0]||(n={}),delete n?.adSlots,delete n?.playerAds,delete n?.adPlacements,delete n?.adBreakHeartbeatParams,delete n?.[0]?.playerResponse?.adSlots,delete n?.[0]?.playerResponse?.playerAds,delete n?.[0]?.playerResponse?.adPlacements,delete n?.[0]?.playerResponse?.adBreakHeartbeatParams;const a=JSON.stringify(n),o=new Headers(t.headers);return o.set("content-length",String(a.length)),o.set("content-type","application/json"),new Response(a,{status:t.status,statusText:t.statusText,headers:o})}catch(e){return t}}return e.apply(this,arguments)}catch(e){}return e.apply(this,arguments)}})();const l=window.XMLHttpRequest,r=l.prototype.open,s=l.prototype.send;function adsBlock(){try{document.getElementsByClassName("video-stream")[0].removeAttribute("disablepictureinpicture")}catch{}var e=document.getElementsByTagName("ad-slot-renderer");for(var t in e)try{e[t].remove()}catch{}try{document.getElementsByClassName("ad-interrupting")[0].getElementsByTagName("video")[0].currentTime=document.getElementsByClassName("ad-interrupting")[0].getElementsByTagName("video")[0].duration,document.getElementsByClassName("ytp-ad-skip-button-modern")[0].click()}catch{}try{document.getElementsByTagName("ytm-promoted-sparkles-web-renderer")[0].remove()}catch{}try{document.getElementsByTagName("ytm-companion-ad-renderer")[0].remove()}catch{}try{document.querySelectorAll("a").forEach((e=>{e.href.indexOf("intent://")>-1&&(e.style.display="none")}))}catch{}try{document.getElementsByTagName("ytm-paid-content-overlay-renderer")[0].style.display="none"}catch{}if("true"==localStorage.getItem("shorts")){for(t in document.getElementsByClassName("big-shorts-singleton"))try{document.getElementsByClassName("big-shorts-singleton")[t].remove()}catch{}for(t in document.getElementsByTagName("ytm-reel-shelf-renderer")){try{document.getElementsByTagName("ytm-reel-shelf-renderer")[t].remove()}catch{}for(t in document.getElementsByTagName("ytm-shorts-lockup-view-model"))try{document.getElementsByTagName("ytm-shorts-lockup-view-model")[t].remove()}catch{}}}}function addMaxButton(){var e=document.getElementById("player-container-id"),t=document.getElementById("player");document.getElementsByClassName("video-stream")[0];if(e===document.fullscreenElement)try{t.style.transform=zoomIn?`scale(${scale})`:"scale(1)"}catch{}else try{t.style.transform="scale(1)"}catch{}}async function extraSpeed(){var e=document.querySelector(".ytwVariableSpeedControllerViewModelButtonContainer");if(!e)return;const t=document.getElementById("slider");if(10!=t.max&&(t.max=10,t.ariaValueMax="10",t.addEventListener("input",(()=>{const e=document.querySelector(".video-stream");e&&(e.playbackRate=parseFloat(t.value))})),e.children.length>=6&&e.children[0].remove(),!document.getElementById("10xSpeed"))){var n=document.createElement("ytw-variable-speed-controller-speed-button-view-model");n.id="10xSpeed",n.className="ytwVariableSpeedControllerSpeedButtonViewModelHost ytwVariableSpeedControllerViewModelPlaybackSpeedButton",n.insertAdjacentHTML("beforeend",'<button-view-model class="ytSpecButtonViewModelHost"><button class="ytSpecButtonShapeNextHost ytSpecButtonShapeNextTonal ytSpecButtonShapeNextMono ytSpecButtonShapeNextSizeS ytSpecButtonShapeNextEnableBackdropFilterExperiment" title="" aria-disabled="false" style=""><div class="ytSpecButtonShapeNextButtonTextContent ytSpecButtonShapeNextElevatedContent">10x</div><yt-touch-feedback-shape aria-hidden="true" class="ytSpecTouchFeedbackShapeHost ytSpecTouchFeedbackShapeTouchResponse"><div class="ytSpecTouchFeedbackShapeStroke"></div><div class="ytSpecTouchFeedbackShapeFill"></div></yt-touch-feedback-shape><yt-light-shape aria-hidden="true" class="contribYtLightShapeHost contribYtLightShapeStaticRimLight contribYtLightShapeStaticRimLightTonal" style="--yt-light-wash-opacity: 0; --yt-light-wash-x: 0px; --yt-light-wash-y: 0px; --yt-light-wash-size: 0px;"><div class="contribYtLightShapeStaticWashLight contribYtLightShapeStaticWashLightTonal" style=""></div></yt-light-shape></button></button-view-model>'),n.addEventListener("click",(()=>{t.value=10,t.dispatchEvent(new Event("input",{bubbles:!0}))})),e.appendChild(n)}}l.prototype.open=function(e,t,...n){return this._interceptedMethod=e,this._interceptedUrl=t,r.apply(this,[e,t,...n])},l.prototype.send=function(e){if(!(this._interceptedUrl.includes("googleads.g.doubleclick.net")||this._interceptedUrl.includes("youtube.com/youtubei/v1/player/ad_break")||this._interceptedUrl.includes("youtube.com/pagead/adview")||this._interceptedUrl.includes("youtube.com/api/stats/ads")))return s.apply(this,arguments)};const p=document.body,u={childList:!0,subtree:!0};function updateModel(){var e=document.createElement("div");e.setAttribute("style","height:100%;width:100%;position:fixed;display:grid;align-items:center;top:0;left:0;background:rgba(0,0,0,.6);z-index:99999;"),e.innerHTML=`\n<div style="height:auto;width:70%;padding:20px;background:rgba(0,0,0,.6);border:1px solid #888;box-shadow:0px 0px 5px black;color:white;backdrop-filter:blur(10px);border-radius:15px;margin:auto">\n<h2> Mandatory Update </h2><br>\nLatest Version ${YTProVer} of YTPRO is available , update the YTPRO to get latest features.\n<br>- This update is mandatory as it fixes a ton of bugs and improves functionality <br>\n- Fixed Downloads, switched to SABR downloader<br>\n- Added muxing to the youtube videos<br>\n- Fixed gestures for brightness and volume control<br>\n- Optimized the UI of both Download and Settings menu<br>\n- Added speed increase upto 10x<br>\n- Fixed bugs and improved functionality<br>\n- for the full list <u data-action="url" >click here</u>\n<br>\n<br>\n<div style="display:flex;">\n\x3c!--<button style="border:0;border-radius:10px;height:30px;width:150px;background:;" data-action="cancel">Cancel</button>--\x3e\n<button style="border:0;border-radius:10px;height:30px;width:150px;background:rgba(255,50,50,.7);float:right;" data-action="download" >Download</button>\n</div>\n\n</div>\n`,e.addEventListener("click",(e=>{var t=e.target.closest("[data-action]");if(t){var n=t.dataset.action;"url"==n?Android.oplink("https://github.com/prateek-chaubey/YTPRO/releases"):"download"==n?Android.downvid("YTPRO.zip","https://nightly.link/prateek-chaubey/YTPro/workflows/gradle/main/YTPRO.zip","application/zip"):"cancel"==n&&t.parentElement.parentElement.parentElement.remove()}})),document.body.appendChild(e)}new MutationObserver((()=>{extraSpeed(),adsBlock(),addMaxButton(),addSettingsTab();try{var e=document.getElementsByClassName("video-stream")[0];e.getBoundingClientRect().height>e.getBoundingClientRect().width?Android.fullScreen(!0):Android.fullScreen(!1)}catch{}})).observe(p,u),window.onload=function(){parseFloat(Android.getInfo())<parseFloat(YTProVer)&&("https://m.youtube.com/"==window.location.href||"https://m.youtube.com"==window.location.href)&&updateModel()},document.addEventListener("click",(e=>{let t=e.target.closest("a");if(t&&t.href.includes("www.youtube.com/redirect")){try{document.getElementsByClassName("video-stream")[0].pause()}catch{}const n=new URL(t.href).searchParams.get("q");setTimeout((()=>{Android.oplink(n)}),50),e.preventDefault(),e.stopPropagation()}}),!0)}