import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({ 
  tag: 'wj-side-drawer', 
  styleUrl: './side-drawer.css',
  shadow: true 
}) 

export class SideDrawer { 
  @State() showContactInfo = false;
  @Prop({ reflect: true }) title: string; // agora o Stencil vai observar atributos com o nome de title no nosso componente e se setarmos ou mudarmos como um atributo, ou se setarmos diretamente e programaticamente o título de fora do javascript, então o Stencil vai detectar essa mudaça e isso vai automaticamente reexecutar o método render de uma maneira muito eficiente, então não recarregará toda a DOM
  @Prop({ reflect: true, mutable: true }) opened: boolean; // @Props definidas aqui são imutáveis, não podemos mudar dentro do componente. No html ou manualmente podemos, a não ser que coloquemos 'mutable: true'

  onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact' ? true : false; /* quero checar que o content é igual a contato -> se o conteúdo for igual a contato, e o resultado será true [= não é =, = você atribui, === está comparando] */ 
  }

  @Method() // esse method adicionado aqui faz com que o método que vou criar a seguir seja um método disponível publicamente [corrige o erro de: 'open() is not a function'], não esqueça de importar esse Method 
  open() {
    this.opened = true;
  }

  render () { 
    // para sermos capazes de 'ouvir' os cliques nesses botões e mudar o conteúdo que aparece no slot do main através do clique
    let mainContent = <slot />;

    if(this.showContactInfo) {
      mainContent = (
        <div id='contact-information'>
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>Phone: 4898564451</li>
            <li>
              E-mail: {' '}
              <a href="mailto:something@something.com">something@something.com</a>
            </li>
          </ul>
        </div>
      )
    }
    
    return [
      <div class='backdrop' onClick={this.onCloseDrawer.bind(this)}></div>,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>         
        </header>
        <section id='tabs'>
          <button class={!this.showContactInfo ? 'active' : ''} /* se for false -> coloca ativo */ onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
          <button class={this.showContactInfo ? 'active' : ''} /* se for true -> coloca ativo */ onClick={this.onContentChange.bind(this, 'contact')}>Contact</button> 
        </section>
        <main>
          {mainContent}
        </main>
      </aside>

    ]
  }
}
