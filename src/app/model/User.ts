import { Role } from "./Role";


export class User{

    constructor(public userId: number,
                public firstName: string,
                public lastName: string,
                public email: string,
                public password:string,
                public createdBy: string,
                public createdDate:Date,
                public lastUpdatedBy:string,
                public lastUpdatedDate:string,
                public token: string,
                public roles: Role){

    }
    
}