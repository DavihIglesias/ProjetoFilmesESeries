import { View } from "./view/View.js";

export class Ui extends View
{
    constructor(){
        super();
    };

    static template(nome, genero, nota){
        return  View.template(nome, genero, nota);
    };
};