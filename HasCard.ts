import { ATMState } from "./ATMState.ts";
import { ATMMachine } from "./ATMMachine.ts";

export class HasCard implements ATMState {
    atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    insertCard(): void {
        console.log("You can only insert one card at a time");
    }

    ejectCard(): void {
        console.log("Your card is ejected");
        this.atmMachine.setATMState(this.atmMachine.getNoCardState())
    }

    requestCash(cashToWithdraw: number): void {
        console.log("You have not entered your PIN");
    }

    insertPin(pinEntered: number): void {
        if(pinEntered === 1234){
            console.log("You entered the correct PIN");
            this.atmMachine.correctPinEntered = true;
            this.atmMachine.setATMState(this.atmMachine.getHasPin());

        } else {
            console.log("You entered the wrong PIN");
            this.atmMachine.correctPinEntered = false;
            console.log("Your card is ejected");
            this.atmMachine.setATMState(this.atmMachine.getNoCardState());
        }
    }
}
