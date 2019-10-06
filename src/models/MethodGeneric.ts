
export interface IArrayGeneric{
    put(v : any) : any;
    getSize() : any;
    unshift(v : any) : any;
    setByIndex(pos : number, data);
    setByProperty(property : any);
    getAll() : any;
    saerchDataByProperty(o : any,  d: any) : any;
    drop() : any;
    getAll() : any;
    getByIndex(i : number) : any;
    removeByProperty(property : any);
    removeByIndex(i : number);
}



export interface IObjectGeneric{
    put(v : any) : any;
    getSize() : number;
    unshift(v : any) : any;
    setPos(pos : number, data);
    setByProperty(property : any);
    getPos(pos) : any;
    saerchData(d : any) : any;
    getAll() : any;
}