![Logo Typescript](https://www.notion.so/image/https%3A%2F%2Fbognarjunior.files.wordpress.com%2F2018%2F09%2Ftypescript.png?table=block&id=53e8e73e-f54d-4902-8b4f-d2e8e4d43677&width=250&userId=688bf7c1-c8d7-4aae-a8bb-b47f021f1d4a&cache=v2)

# TypeScript

# O que é?

É uma linguagem **open-source** que "expande" o JavaScript, adicionando definição de tipos estáticos.

Escrever tipos é opcional no TypeScript, não compulsório.

Traz mais poder às IDEs.

---

## Configurando um projeto com TypeScript

A primeira dependência de qualquer projeto que utiliza TS, é o próprio TypeScript:

```jsx
// Neste caso, está sendo adicionado como uma dependência de desenvolvimento
// pois vamos converter o código para JavaScript antes de colocá-lo na prod
yarn add typescript -D 
```

Após isto, para criar o arquivo de configuração do TS usamos:

```jsx
yarn tsc --init
```

E para compilar o arquivo em específico:

```jsx
yarn tsc ${ PATH_TO_TSFILE }
// Ou para compilar todos os arquivos TypeScript do projeto:
yarn tsc
```

É interessante termos uma pasta diferente para os arquivos JavaScript convertidos, para isto, editamos o arquivo **tsconfig.json**:

```jsx
// A configuração outdir já está presente no arquivo, é necessário apenas
// tirar o comment e colocar o diretório no qual ficará os arquivos de output
"outDir": "./dist" /* Redirect output structure to the directory. */
```

---

## Quando definir tipos? E como?

A definição de tipos se faz necessária quando o código se torna mais claro através dela. Com tipos definidos, a documentação do código também pode ser de maior qualidade, e também as sugestões do editor se tornam melhores.

Para definir tipos, nós o atribuímos ao criar a variável:

```jsx
var foo: string;
```

Também podemos criar uma **interface** para isso:

```jsx
interface Bar{
	foo: string;
}
```

E podemos atribuir a interface da seguinte maneira:

```jsx
var foo: Bar;
```

Interfaces são úteis para definir o **formato de um objeto.**

Para definir o tipo de uma lista, usamos:

```jsx
strings[];
// ou
Array<String>
```
