import {levelUp} from "/@workadventure/quests";

console.log("test_quest")

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))


console.log("Page Open")
sleep(5000)
console.log("Assign 10 xp once")
levelUp("TIME_SPENT_IN_THE_GAME", 10).catch(e => console.error(e));


