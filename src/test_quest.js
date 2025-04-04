import { levelUp } from "@workadventure/quests";


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

while(true){
    await sleep(5000)
    await levelUp("TIME_SPENT_IN_THE_GAME", 10);
}