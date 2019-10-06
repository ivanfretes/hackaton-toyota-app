export let entidadesFinanciacion : IEntidadesFinanciacion[] = [
    {
        name : 'Banco Continental',
        id : 1,
        interes : 18
    },
    {
        name : 'Banco Visión',
        id : 2,
        interes : 19
    },
    {
        name : 'Banco Interfisa',
        id : 3,
        interes : 20
    },
    {
        name : 'Banco BBVA',
        id : 4,
        interes : 30
    },
    {
        name : 'Banco Atlas',
        id : 5,
        interes : 40
    },
    {
        name : 'Banco GNB',
        id : 6,
        interes : 10
    },
    {
        name : 'Banco BASA',
        id : 7,
        interes : 60
    },
    {
        name : 'Banco Itau',
        id : 8,
        interes : 29
    },
    {
        name : 'Banco Continental',
        id : 9,
        interes : 32
    },
    {
        name : 'Cooperativa Medalla',
        id : 9,
        interes : 15
    },
    {
        name : 'Cooperativa Universitiria',
        id : 10,
        interes : 21
    },
    {
        name : 'Cooperativa Primero de Marzo',
        id : 11,
        interes : 27
    },
]  


export interface IEntidadesFinanciacion {
    name : string;
    id : number;
    interes : number;
}