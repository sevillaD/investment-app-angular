export class Company{

    constructor(public companyId:number,
                public companyName:string,
                public stockSymbol: string,
                public sector:string,
                public dividend:boolean,
                public dividendAmount:number,
                public createdBy: string,
                public createdDate:Date,
                public lastUpdatedBy: string,
                public lastUpdatedDate:Date){          
    }


}