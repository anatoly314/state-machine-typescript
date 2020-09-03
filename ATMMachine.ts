import { ATMState } from "./ATMState.ts";
import { HasCard } from "./HasCard.ts";
import { NoCard } from "./NoCard.ts";
import { HasPin } from "./HasPin.ts";
import { NoCash } from "./NoCash.ts";

export class ATMMachine {
    hasCard: ATMState;
    noCard: ATMState;
    hasCorrectPin: ATMState;
    atmOutOfMoney: ATMState;

    atmState: ATMState;

    cashInMachine: number = 2000;
    correctPinEntered: boolean = false;

    constructor() {
       this.hasCard = new HasCard(this);
       this.noCard = new NoCard(this);
       this.hasCorrectPin = new HasPin(this);
       this.atmOutOfMoney = new NoCash(this);

       this.atmState = this.noCard;

       if (this.cashInMachine < 0) {
           this.atmState = this.atmOutOfMoney;
       }
    }

    setATMState (newATMState: ATMState) {
        this.atmState = newATMState;
    }

    public setCashInMachine(newCashInMachine: number) {
        this.cashInMachine = newCashInMachine;
    }

    public insertCard() {
        this.atmState.insertCard();
    }

    public ejectCard() {
        this.atmState.ejectCard();
    }

    public requestCash(cashToWithdraw: number) {
        this.atmState.requestCash(cashToWithdraw);
    }

    public insertPin(pinEntered: number) {
        this.atmState.insertPin(pinEntered);
    }

    public getYesCardState ():ATMState {
        return this.hasCard;
    }

    public getNoCardState ():ATMState {
        return this.noCard;
    }

    public getHasPin ():ATMState {
        return this.hasCorrectPin;
    }

    public getNoCashState ():ATMState {
        return this.atmOutOfMoney;
    }

}
