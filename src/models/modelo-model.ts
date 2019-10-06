export interface IModelo {
    name : string;
    id : number;
    msg_mkt : string; // Mensaje de Marketing
    description : string;
    category : string; // tipo de vehiculo / modelo
    brand_id : number;
    year : number;
    versions : IModeloVersion[];
}


export interface IModeloVersion {
    name : string;
    id : number;
    icon : string;
    cover_internal : string;
    description_internal : string;
    cover_external : string;
    description_external : string;
    cash_price : string;
    list_price : string; // precio de lista
    fuel: string;
    clasification : string; // SUV, PickUp, Superior, Berlineta
    large : string; // Ancho
    height : string ; // Alto 
    doors : number; // cantidad de puertas
    truck :number; // Maletero en litros
    consumption : number // Consumo por c/ 100 Km
    vehicle_id : number;
    vehicle_name : string;
}



export interface IModeloVersionColor {
    id: number;
    hex_color : string; // color en hexagesimal o en cualquier otra notacion
    version_id : string;
    small_image : string;
}


/**
 * Representa detalle de la version como ( 'interior', 'exterior', 'sub-interior', 
 * 'sub-exterior', 'slide', etc)
 */
export interface IModeloVersionDetalle {
    image : string;
    title : string;
    description : string;
    type : string;
    order : number;
    version_id;
} 



/*
export interface IVehicleDetail {
  'vehicle_id': number;
  'vehicle_name': string;
  'vehicle_message_mkt': string;
  'vehicle_description': string ;
  'vehicle_category': any;
  'vehicle_path': string;
  //'created_at' :Date;
  //'updated_at' : Date;
  'vehicle_year' : any;
  'vehicle_slug': string ;
  'vehicle_view': number;
  'vehicle_brand_name': string;
  'images' : {
      'medium_cover_page ' : string,
      'small_cover_page ' : string,
      'cover_page' : string;
  };
  'brand' => [
                'brand_id' => $brand->brand_id,
                'brand_name' => $brand->brand_name,
                'brand_logo' => $brand->brand_logo
            ],
            'dealer' => [
                'dealer_id' => $dealer->dealer_id,
                'dealer_name' => $dealer->dealer_name
            ]
  

}*/
