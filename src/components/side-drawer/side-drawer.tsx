// pra dizer ao stencil que essa classe deve se transformar em um web component, devemos adicionar algo chamado de "decorador"
// decorators começam com @ e é um recurso do typescript, e precisam ser importados pois o typescript é uma linguagem super tipada

import { Component, h } from '@stencil/core';

@Component({ // executamos decorators como se fosse uma função // precisamos passar uma configuração de objeto nesse decorator // configuramos como esse componente pode ser usado e como vai funcionar
  tag: 'wj-side-drawer' // nome da tag nosso componente
}) 

export class SideDrawer { // typescript exige o export, se não, não funciona
  render () { // método que o stencil vai executar pra analisar a DOM, é necessário ter
    return ( // não vai funcionar se tivermos uma tag sibling a essa div, detemos ter apenas um elemento raiz
      <div>
        <h1>The Side Drawer Ho Ho</h1>
      </div>
    );
  }
}