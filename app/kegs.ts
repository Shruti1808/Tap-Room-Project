export class Keg {
    empty: boolean = false;

    constructor(public kegName: string, public kegBrand: string, public price: number, public alcoholContent: number,  public quantity: number){}

    markEmpty(){
        this.empty = true;
    }
}

var kegs: Keg[]  = [];
kegs.push(new Keg('Bud Light', 'Anheuser-Busch', 111, 3.88, 124));
kegs.push(new Keg('Rolling Rock', 'Anheuser-Busch', 167, 4.4, 124));
kegs.push(new Keg('Blue Moon', 'Anheuser-Busch', 150, 5.4, 124));
kegs.push(new Keg('LandShark Lager', 'Anheuser-Busch', 147, 4.7, 124));

 console.log(kegs);
for(var keg in kegs){
    console.log(keg);
}
