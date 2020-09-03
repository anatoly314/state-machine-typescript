import {ATMState} from "./ATMState.ts";
import {ATMMachine} from "./ATMMachine.ts";

export class NoCard implements ATMState {
    atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    insertCard(): void {
        console.log("Please enter your pin");
        this.atmMachine.setATMState(this.atmMachine.getYesCardState());
    }

    ejectCard(): void {
        console.log("You didn't enter a card");
    }

    requestCash(cashToWithdraw: number): void {
        console.log("You have not entered your card");
    }

    insertPin(pinEntered: number): void {
        console.log("You have not entered your card");
    }
}
