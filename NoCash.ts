import {ATMState} from "./ATMState.ts";
import {ATMMachine} from "./ATMMachine.ts";

export class NoCash implements ATMState {
    atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    insertCard(): void {
        console.log("We don't have any money");
        console.log("Your card is ejected");    }

    ejectCard(): void {
        console.log("We don't have any money");
        console.log("There is no card to eject");
    }

    requestCash(cashToWithdraw: number): void {
        console.log("We don't have any money");
    }

    insertPin(pinEntered: number): void {
        console.log("We don't have any money");
    }
}
