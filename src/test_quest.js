import { levelUp } from "@workadventure/quests";


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const quest = await getQuest("TIME_SPENT_IN_THE_GAME");
console.log("Prima del while true")
while(true){
    console.log("Quest in sleep")
    await sleep(5000)
    await levelUp("TIME_SPENT_IN_THE_GAME", 10);
}

