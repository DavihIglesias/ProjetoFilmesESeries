export class View
{
    constructor(){
        throw new Error('essa classe nao pode ser instânciada');
    };

    static template(nome, genero, nota){
        const grid = document.getElementById('grid');
        const serie = document.createElement('div');

        serie.innerHTML = `
            <h2>${nome}</h2>
            <p>${genero}</p>
            <p>${nota}: ⭐⭐⭐⭐⭐</p>
            <div class="actions">
              <button class="edit">Editar</button>
              <button class="delete">Deletar</button>
            </div>
        `;

        return grid.appendChild(serie);
    };
};
