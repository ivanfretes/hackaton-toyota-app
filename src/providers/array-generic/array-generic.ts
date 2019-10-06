import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { IArrayGeneric } from '../../models/MethodGeneric';

@Injectable()
export class ArrayGenericProvider implements IArrayGeneric {
    branch : string;
    size : number;
    
    constructor(
        public http: HttpClient, 
        private storage : Storage) {
        console.log('Hello ReviewProvider Provider');
    }

    // Permite acceder al 
    init(branch : string){
      this.branch = branch;
    }

    /**
     * Inserta datos al final del array
     * @param data 
     */
    put(data : any)  {
        this.getAll().then((res : any[])=> {
            res.push(data);
            this.storage.set(this.branch, res);    
        });
    }



    /**
     * Retorna el tamaño del array
     */
    getSize() : Promise<any>{
        return this.storage.get(this.branch).then((res) => {
            return res.length;
        });
    }

    /**
     * Elimina el primer elemento del array
     * @param data
     */
    unshift(data : any) {
        return this.storage.get(this.branch).then((res : any[]) => {
            res.unshift(data);
            return true;
        });
    }



    /**
     * Actualiza en una posición en particula 
     * @param pos 
     * @param data 
     */
    setByIndex(pos : number, data) : any{
        /*return this.storage.get(this.branch).then((res : any[]) => {
            
        });*/
    }

    setByProperty(ObjectProperty : any){
        //
    }

    getByIndex(index : number) {

    }

    /**
     * Busca datos que coincidan con una ObjectProperty del Elemento
     * @param ObjectProperty
     * @param data 
     */
    saerchDataByProperty(ObjectProperty : any, data : any) : Promise<any>{
        let list = [];
        return this.storage.get(this.branch).then(res => {

            res.forEach((element, index) => {
               if (element[ObjectProperty].indexOf(data) > -1){
                   list.push(element);
               }
            });
            return list;
        });
    }


    /**
     * Retorna todo el array
     */
    getAll() : Promise<any>{
        return this.storage.get(this.branch);
    }

    /**
     * 
     * @param promise 
     */
    /*private ObservableToPromise(promise : Promise<any>){
        return Observable.fromPromise(promise)
    }*/


    /**
     * Elimina una propiedad
     * @param ObjectProperty 
     * @param d 
     */
    removeByProperty(ObjectProperty : any) {
        let list = [];
        this.storage.get(this.branch).then(res => {

            res.forEach((element) => {
                if (!element.hasOwnProperty(ObjectProperty)){
                    list.push(element);
                }
            });
            return list;
        });
    }

    removeByIndex(index : number) {
        this.storage.get(this.branch).then(res => {
            return res.splice(index, 1);
        });
    }

    /**
     * Elimina todo el array
     */
    drop(){
        this.storage.remove(this.branch);
    }

}
