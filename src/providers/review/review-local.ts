import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Observable } from 'rxjs';

import { Storage } from '@ionic/storage';

@Injectable()
export class ReviewInLocalProvider {
    cant : number;
    reviews : any[];
    
    constructor(
        public http: HttpClient, 
        private storage : Storage) {
        
    }

    
    /**
     * Elimina el primer elemento del array,
     * Si el elemento ya se inserto retorna false, sino
     * inserta y retorna true
     * @param data
     * @return bool
     */
    unshift(data : any) {
        return this.storage.get('reviews').then((res : any[]) => {
            if (res == null) res = [];
            let dataBefereReview = false;
            
            for (let element of res){
                if (element['vehicle_id'] == data['vehicle_id']){
                  dataBefereReview = true;
                  break;
                }
            }

            if (dataBefereReview){
                return false;
            }
            else {
                res.unshift(data);
                this.storage.set('reviews', res);
                return true;
            }
        });
    }




    /**
     * Retorna todo el array
     */
    getAll() : Promise<any>{
        return this.storage.get('reviews');
    }

   

    removeByIndex(index : number) {
        /*this.storage.get('reviews').then(res => {
            return res.splice(index, 1);
        });*/
    }

    /**
     * Elimina todo el array
     */
    drop(){
        //this.storage.remove('reviews');
    }


}