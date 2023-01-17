# Desafio ShareEnergy

Desafio ShareEnergy foi um desafio proposto pela empresa ShareEnergy de desenvolver uma aplicação full stack.
Ele foi feito com as principais Stacks que o time ShareEnergy usa, em especial TypeScript, Nest, React e MUI.
Foi desenvolvido seguindo as regras do Clean Code e Clean Architecture, Conventinal Commits e outras boas práticas.Todas as camadas desenvolvidas com TDD, exceto da camada infra, a qual seriam desenvolvidos teste e2e.
Espero que gostem e agradeço qualquer feedback

## Documentation

Após iniciar a aplicação, [acesse](http://localhost:3001/api#/)

## Rodando a aplicação

Instale e rode o back-end:

```bash
$ cd back-end
```

```bash
$ npm install --force
```

```bash
$ npm start
```

Volte a pasta principal e faça o mesmo com o front:

```bash
$ cd ..
```

```bash
$ cd front-end
```

```bash
$ npm install --force
```

```bash
$ npm start
```

## Rodando os Testes

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Stacks

**Back-end:** Typescript, Node, Clean Architecture, Nest, Unit Tests, In Memory Tests,
Conventional Commits, Husky, Lint-Staged. O projeto foi desenvolvido para ser totalmente desacoplado de qualquer ferramenta e foi implementado nele as ferramentas usadas pelo time ShareEnergy

**Front-end:** Typescript, React e MUI.

## Melhorias

Eu dei realmente muita atenção ao back-end, acho que o projeto ficou realmente muito bom nesse ponto, apesar de ainda ter melhorias.
Eu acabei gerindo mal o tempo e não completei todas as funcionalidades do front-end.
Além de implementar todas as funcionalidades, aqui vão algumas melhorias que eu já sei fazer e farei:

- Dockerizar o projeto
- Fazer o deploy
- Melhorar responsividade do front-end e aparência geral
