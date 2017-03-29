export class Keg {
    empty: boolean = false;

    constructor(public kegName: string, public kegBrand: string, public price: number, public alcoholContent: number,  public quantity: number){}

    markEmpty(){
        this.empty = true;
    }

    

}
