import {levelUp} from "@workadventure/quests";

console.log("test_quest")

console.log("Page Open")
console.log("Assign 10 xp once")

(async () => {
    await WA.onInit();
    console.log('Current player name: ', WA.player.name);
    levelUp("TIME_SPENT_IN_THE_GAME", 10).catch(e => console.error(e));
})();


