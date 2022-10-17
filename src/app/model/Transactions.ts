export class Transactions{


    constructor(public transactionId:number,
                public transactionType:string,
                public quantity:number,
                public price:number,
                public transactionAmount:number,
                public buyingDate:Date,
                public sellingDate:Date,
                public sellingPrice:number,
                public realizedGain: number,
                public status:string,
                public stockSymbol:string
                ){}

}