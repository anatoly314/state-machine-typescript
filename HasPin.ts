import {ATMState} from "./ATMState.ts";
import {ATMMachine} from "./ATMMachine.ts";

export class HasPin implements ATMState {
    atmMachine: ATMMachine;

    constructor(newATMMachine: ATMMachine) {
        this.atmMachine = newATMMachine;
    }

    insertCard(): void {
        console.log("You already entered a card");
    }

    ejectCard(): void {
        console.log("Your card is ejected");
        this.atmMachine.setATMState(this.atmMachine.getNoCardState());
    }

    requestCash(cashToWithdraw: number): void {
        if(cashToWithdraw > this.atmMachine.cashInMachine){

            console.log("You don't have that much cash available");
            console.log("Your card is ejected");
            this.atmMachine.setATMState(this.atmMachine.getNoCardState());

        } else {

            console.log(cashToWithdraw + " is provided by the machine");
            this.atmMachine.setCashInMachine(this.atmMachine.cashInMachine - cashToWithdraw);

            console.log("Your card is ejected");
            this.atmMachine.setATMState(this.atmMachine.getNoCardState());

            if(this.atmMachine.cashInMachine <= 0){
                this.atmMachine.setATMState(this.atmMachine.getNoCashState());
            }
        }
    }

    insertPin(pinEntered: number): void {
        console.log("You already entered a PIN");
    }
}
