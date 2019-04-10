import React from 'react'


/*
Em arrow function o return e implicito colocando
() estamos deixando esse return explicito.
*/
//Exemplo de componente com arrow function
//export default (props) => ( <h1>{props.value}</h1> )

/*
Exportando o primeiro componente com default.
perceba que não foi necessario dar um nome ao componente como exemplo acima
porque semper que realizar o import desse aquivos quem vai ser exportado
é o componente abaixo.
*/
export default  props => (
    <h1>Primeiro Componente!</h1>
    )

//Exportando o segundo componente de não default
//vai ser necessario realizar o import explicito desse componente da seguinte forma:
//import Primeiro, { Segundo } from './component'
export const Segundo = props => <h1>Segundo Componente!</h1>

// aqui estamos exportando os dois componente como default
//export { Primeiro, Segundo }