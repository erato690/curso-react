import React from 'react'
import ReactDOM from 'react-dom'
//Exemplo de impotando apenas um componente.
//import Component from './componentFunction'
//Exemplo de impotando 2 componente e um unico arquivo. os dois componente estão como default
//import {Primeiro,Segundo} from './componentFunction'

import Primeiro,{Segundo} from './componentFunction'


//Apresentacao
//Exemplo de renderizando apenas um componente.
//ReactDOM.render(<Component value="Ola Mundo React por value"/>, document.getElementById('app'));

ReactDOM.render(
    /*
    em react sempre temos que retornar
    um compoente que encapsula os outros caso isso não acontece vai dar error.
    */
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , document.getElementById('app'))