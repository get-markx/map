(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let a="https://admin.workadventu.re";function c(){const o=WA.player.userRoomToken;if(o===void 0)throw new Error("No userRoomToken found. The quests plugin can only work with WorkAdventure SAAS edition (at https://play.workadventu.re).");return o}async function l(o,r){if(!WA.player.isLogged)throw new Error("You must be logged to gain XP.");const i=new URL(`/api/quests/${o}/level-up`,a),n=await fetch(i,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:c()},body:JSON.stringify({xp:r})});if(!n.ok)throw new Error(`An error occurred. HTTP Code: ${n.status} ${n.statusText}.`);const e=await n.json();return e.awardedBadges.length>0&&(async()=>{for(const t of e.awardedBadges)await u(o,t)})().catch(t=>{console.error(t)}),e}async function u(o,r){const i=new URL(`/quests/${o}/badge/${r}/congratulations`,a);i.search=new URLSearchParams({token:c()}).toString(),await WA.ui.website.open({url:i.toString(),position:{vertical:"middle",horizontal:"middle"},allowApi:!0,visible:!0,size:{width:"100%",height:"100%"}})}(async()=>(await WA.onInit(),console.log("Current player name: ",WA.player.name),console.log("Assign 10 xp once"),l("TIME_SPENT_IN_THE_GAME",10).catch(o=>console.error(o))))();
//# sourceMappingURL=testpage-cd1900b2.js.map
