import {levelUp} from "@workadventure/quests";



(async () => {
    await WA.onInit();
    console.log('Current player name: ', WA.player.name);
    console.log("Assign 10 xp once")
    levelUp("TIME_SPENT_IN_THE_GAME", 10).catch(e => console.error(e));
})();
