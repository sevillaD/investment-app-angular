export class Role{

    constructor(public roleId: number,
                public name: string,
                public description:string,
                public createdBy: string,
                public createdDate: Date,
                public lastUpdatedBy: string,
                public lastUpdatedDate:Date){

    }

    
}