import { levelUp } from "@workadventure/quests";


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const quest = await getQuest("TIME_SPENT_IN_THE_GAME");
console.log("Prima del while true")

console.log("Quest in sleep")
await levelUp("TIME_SPENT_IN_THE_GAME", 10);


