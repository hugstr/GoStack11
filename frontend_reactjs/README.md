![Logo ReactJS](https://conexaopanvel.faccat.br/wp-content/uploads/2020/05/react-js-800x450.png)
# FrontEnd com ReactJS

---

# 🎃 O que é React?

---

- Biblioteca para construção de **interfaces**
- **SPA** (**Single Page Applications**) = mudanças visuais sem refresh do browser
- Tudo dentro do **JavaScript**, graças ao **JSX** (inclusive o HTML e o CSS)
- **Componentização**: Divide a tela em **componentes** de diferentes funcionalidades que não interfiram um com o outro
- Front-end apenas como display
- **Uma API, múltiplos clientes**
- Programação **declarativa**

---

# 🧵 Imperativo vs declarativo

---

- **Imperativo**

    Na programação imperativa, devemos falar ao navegador passo a passo de cada caso possível comparando com o estado anterior

    ```jsx
    const notifs = 0;

    function montaBadge(num){
    	if (notificacoes === 0 && num > 0){
    		// Add badge
    		// container.appendChild(badge)...
    	}
    	if (notificacoes !== 0 && num > 0){
    		// Muda o número
    		// badge.innerHTML = num...
    	}
    	if (notificacoes !== 0 && num === 0){
    		// Remove badge
    		// container.removeChild(badge)...
    	}
    }
    ```

- **Declarativo**

    **Não** comparamos com o estado anterior

    ```jsx
    function Badge ({ num }){
    	return (
    		<div id="container">
    			{ num > 0 && <div id="badge">{num}</div>}
    			<span class="icon"></span>
    		</div>
    	);
    }
    ```

---

# 📦 Babel e Webpack

---

O browser não entende o React nativamente, então precisamos do **Babel** pois:

- Ele **converte** o código JavaScript de uma forma que o **browser** entenda

Já o **Webpack** possui várias outras funções:

- Ele cria o **bundle**, criando um arquivo com **todo** o código da aplicação
- Ele ensina o JavaScript como importar arquivos CSS, imagens e etc (o Babel **não** lida com essa parte)
- Live reload com **Webpack Dev Server**

---

# 🅱 Configurando o Babel

---

Antes de tudo:

```jsx
yarn add react react-dom // react-dom é a integração do react com a DOM
```

E então, adicionamos o Babel e seus presets, também seu cli, junto do Webpack:

```jsx
yarn add @babel/core @babel/preset-env @babel/preset-react @babel/cli webpack webpack-cli
```

- Na root da aplicação, é criado o arquivo **babel.config.js**

    ```jsx
    module.exports = {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react'
        ],
    };
    ```

---

# 🌐 Configurando o Webpack

---

Adicionar o **Babel loader**:

```jsx
yarn add babel-loader
```

- Criar arquivo **webpack.config.js** no root da aplicação:

    ```jsx
    const path = require('path');

    module.exports = {
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                }
            ]
        },
    };
    ```

E para modificar o **bundle.js** com o Webpack, e também detecção automática de mudanças:

```jsx
yarn webpack --mode development
yarn add webpack-dev-server -D
yarn webpack serve --mode development // Atenção ao webpack serve
```

---

# 🧩 Componentização

---

Em React, os elementos são separados em diferentes **componentes**.

É necessário que haja algo em volta dos componentes sendo colocados em caso de empilhamento, para evitar inconveniências é possível usar o **fragment**, ****que consiste em colocar tags vazias em volta dos componentes. 

Por exemplo:

```jsx
function App(){
    return (
        <>
            <Header/>
            <Header/>
        </>
    );
}
```

---

# 🦥 Propriedade

---

- Qualquer informação que pode ser passada de um componente pai para um componente filho.
- A propriedade é passada como um atributo HTML.

    ```jsx
    function App(){
        return (
            <>
                <Header title="Homepage"/>
                <Header title="Projects"/>
            </>
        );
    }
    ```

    Para usar essa propriedade que demos na tag HTML, nós devemos fazer algumas modificações na função:

    ```jsx
    export default function Header(props){ // Indicar que algo está sendo recebido
        return (
            <header>
                <h1>{props.title}</h1> // Colocar chaves em volta da chamada da var
            </header>
        );
    }
    ```

    É também possível desestruturar o recebimento dos props:

    ```jsx
    export default function Header({ title }){ // Colocamos chaves em volta do que estamos pegando
        return (
            <header>
                <h1>{ title }</h1> 
            </header> // Agora posso chamar apenas title
        );var
    }
    ```

- Por último, é necessário destacar a existência da propriedade **children**, que está presente em todo projeto React:

    A propriedade children acessa os conteúdos **de dentro** da tag que estamos usando como referência. Por exemplo:

    ```jsx
    						<Header title="Homepage">
                    <ul>
                        <li>Homepage</li>
                        <li>Projects</li>
                    </ul>
                </Header>
                
                <Header title="Projects">
                <ul>
                        <li>Homepage</li>
                        <li>Projects</li>
                        <li>Login</li>
                    </ul>
                </Header>
    ```

    Para acessar a lista, devemos utilizar o **children** no componente:

    ```jsx
    export default function Header({ title, children }){
        return (
            <header>
                <h1>{ title }</h1>
                {children} // Conteúdo de dentro do nosso componente <Header>
            </header>
        );
    }
    ```

---

# 🏮 Estado e Imutabilidade

---

Para utilizar o estado, que é um dos maiores poderes do React, primeiro devemos:

```jsx
import React, { useState } from 'react';
```

E então usamos o **useState** em volta da varíavel que desejamos que possua estado. Por exemplo:

```jsx
const baz = useState(['foo', 'bar']);
```

O **useState** retorna um **array** de duas posições:

1. O valor da variável com seu valor inicial;
2. Uma função que atualiza este valor.

Deste modo, por boa prática, desestruturamos esta variável, ficando da seguinte maneira:

```jsx
const [baz, setBaz] = useState(['foo', 'bar']);
```

## Imutabilidade

Em React, ao invés de alterar variáveis, nós as recriamos com o novo valor. Por exemplo, ao invés de usar push para adicionar um valor à um array, nós fazemos do seguinte modo:

```jsx
setBaz([...baz, `foo`]);
// Aqui, nós recriamos o array baz (usando o spread operator ...)
// e desta vez, criamos incluindo também o valor foo ao final do array
```

---

# 🖍 CSS

---

- Para utilizar o CSS, devemos adicionar uma nova regra no nosso **webpack.config.js**:

    ```jsx
    rules: [
    			// Regra já presente anteriormente
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          }, 
    			// Nova regra para CSS
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
            ]
          }
        ]
    ```

- Também devemos instalar alguns pacotes:

    ```jsx
    yarn add style-loader css-loader
    ```

Com isto, conseguimos fazer o import de arquivos CSS, e seu código é injetado dentro do HTML da nossa aplicação.

- Para carregar arquivos, todavia, primeiro precisamos do **file-loader**:

    ```jsx
    yarn add file-loader
    ```

    E devemos também adicionar uma nova regra no nosso **webpack.config.js** para tratar arquivos de imagem em suas diversas extensões:

    ```jsx
    			{
            test: /.*\.(gif|png|jpe?g)$/i,
            use: {
              loader: 'file-loader',
            }
          }
    ```

    E para utilizar a imagem:

    ```jsx
    // Fazemos a importação do arquivo e atribuímos uma varíavel:
    import varName from './assets/imageFilePath';

    // Chamamos essa variável ao invés do path do arquivo 
    // ao colocá-lo na tag HTML
    <img src={varName}/>
    ```

# ✨ Integrando com nosso back-end

---

Para integrar o nosso front-end react com o nosso back-end desenvolvido em Node, devemos instalar o **Axios**, ele será o responsável por fazer as chamadas API, devemos adicionar o axios no nosso back-end também:

```jsx
yarn add axios
```

É boa prática criar uma pasta **services** dentro da **src** para mantermos tudo relacionado à comunicação com serviços externos. No caso atual, temos apenas uma API:

- api.js

    ```jsx
    import axios from 'axios';

    const api = axios.create({
    		// O baseURL deve ser o mesmo que colocamos no Insomnia 
    		// para a nossa API 
        baseURL: 'http://localhost:3333'
    });

    export default api;
    ```

Após importar a nossa api no nosso App.js, nós devemos também importar o **useEffect**.

```jsx
import React, { useState, useEffect } from 'react';
import api from './services/api';
```

O useEffect é usado para disparar funções sempre que há alguma alteração ou algo seja exibido.

**useEffect recebe dois parâmetros:**

```jsx
useEffect(() => {}, []);
```

O primeiro parâmetro recebido é a função a ser executada.

O segundo parâmetro recebido é um array, chamado de **array de dependências**, ele dita as mudanças de quê ocasionarão na execução da função.
