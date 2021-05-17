<p align="center">
  <img width="460" height="300" src="https://img.icons8.com/color/452/nodejs.png">
</p>
# BackEnd com Nodejs

---

# 🍺 Setup

Rodar com **yarn dev**

- package.json

    ```jsx
    {
      "name": "backend",
      "version": "1.0.0",
      "main": "src/index.js",
      "license": "MIT",
      "scripts": {
        "dev": "nodemon"
      },
      "dependencies": {
        "express": "^4.17.1"
      },
      "devDependencies": {
        "nodemon": "^2.0.7"
      }
    }
    ```

---

# 🍟 Métodos HTTP

- **GET**: Buscar informações no back-end
- **POST:** Criar informação no back-end
- **PUT/PATCH**: Alterar uma informação no back-end
- **DELETE:** Deletar uma informação no back-end

Alguns métodos necessitam de um **parâmetro**!

---

# 🥓 Tipos de parâmetros

- **Query Params**: Filtros e paginação (**GET**)

    ```jsx
    const { } = request.query;
    ```

- **Route Params**: Identificar recursos (**DELETE** e **PUT)**

    ```jsx
    const { } = request.params;
    ```

- **Request Body**: Conteúdo na hora de criar ou edita rum recurso (**JSON**)

    ```jsx
    const { } = request.body;
    ```

---

# 🥗 Universal Unique ID

```jsx
//No terminal:
yarn add uuidv4
//Antes de todos os parâmetros:
const { uuid } = require('uuidv4');
```

Para settar **reponse status**:

```jsx
return response.status(ResponseStatusAqui).json({ error: "Mensagem de erro aqui."})
```

Para **gerar um id** ao fazer um **POST**:

```jsx
const project = {
        id: uuid(), //É chamada a função uuid()
        title,
        owner
    };
```

Filtrando:

```jsx
// Exemplo com query title
const {title} = request.query;

    const results = title
      ? projects.filter(project => project.title.includes(title))
      : projects;

    return response.json(results);
```
