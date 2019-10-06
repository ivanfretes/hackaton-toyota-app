import { ISegmento } from '../models/segmento-model';
import { IStyleCSS } from '../models/style-css';

let test : ISegmento = {
  segmento_nombre : 'Auto',
  segmento_id : 1,
  segmento_icon :'assets/segmento-icons/autos.png'
}

export let segmento_list_mock : ISegmento[] = [
    {
      segmento_nombre : 'Autos',
      segmento_id : 2,
      segmento_icon :'assets/segmento-icons/autos.png',
    },
    {
      segmento_nombre : 'SUV / PickUps',
      segmento_id : 2,
      segmento_icon :'assets/segmento-icons/4x4.png'
    },
    {
      segmento_nombre : 'Utilitarios',
      segmento_id : 3,
      segmento_icon :'assets/segmento-icons/camiones.png'
    },
    {
      segmento_nombre : 'Motos / UTVs',
      segmento_id : 1,
      segmento_icon :'assets/segmento-icons/motos.png'
    },
    /*{
      segmento_nombre : 'Furgonetas',
      segmento_id : 1,
      segmento_icon :'assets/segmento-icons/minivan.png'
    },*/
    {
      segmento_nombre : 'Maquinarias',
      segmento_id : 5,
      segmento_icon :'assets/segmento-icons/tractores.png'
    }
];
