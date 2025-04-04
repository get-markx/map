/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('restricted_area').subscribe(() => {
        console.log("L'utente ha provato ad entrare nella restricted_area!");
        currentPopup = WA.ui.openPopup("restrictedPopup", "Accesso vietato!", []);
        WA.player.moveTo(846, 306); // Sposta il player fuori dall'area (esempio)
    });

    WA.room.area.onLeave('restricted_area').subscribe(() => {
        console.log("✅ L'utente ha lasciato la restricted_area.");
        closePopup();
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
