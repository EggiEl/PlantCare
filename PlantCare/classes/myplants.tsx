


export class myPlant{
    private name : string ; 
    private description : string ; 
    private picture : string 

    constructor (name : string, description: string, picture: string) {
        this.name = name 
        this.description = description
        this.picture = picture 
    }
    public getName() : string {
        return this.name 
    }
    public getDescritpion() : string {
        return this.description
    }
    public getPicture() : string {
        return this.picture
    }
}