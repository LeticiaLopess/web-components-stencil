import { Component, h, Prop } from '@stencil/core';

@Component({ 
  tag: 'wj-side-drawer', 
  styleUrl: './side-drawer.css',
  shadow: true 
}) 

export class SideDrawer { 
  @Prop({ reflect: true }) title: string; // agora o Stencil vai observar atributos com o nome de title no nosso componente e se setarmos ou mudarmos como um atributo, ou se setarmos diretamente e programaticamente o título de fora do javascript, então o Stencil vai detectar essa mudaça e isso vai automaticamente reexecutar o método render de uma maneira muito eficiente, então não recarregará toda a DOM
  @Prop({ reflect: true, mutable: true }) open: boolean; // @Props definidas aqui são imutáveis, não podemos mudar dentro do componente. No html ou manualmente podemos, a não ser que coloquemos 'mutable: true'

  onCloseDrawer() {
    this.open = false;
  }

  render () { 
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>         
        </header>
        <section id='tabs'>
          <button class='active'>Navigation</button>
          <button>Contact</button>
        </section>
        <main>
          <slot></slot>
        </main>
      </aside>
    )
  }
}
