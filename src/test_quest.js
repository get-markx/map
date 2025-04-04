import { levelUp } from "@workadventure/quests";


console.log("Quest in sleep")
await levelUp("TIME_SPENT_IN_THE_GAME", 10);

const quest = await getQuest("TIME_SPENT_IN_THE_GAME");
console.log(quest);

