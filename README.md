# Kanban

## Como proceder

1. Crie um fork deste projeto
1. Implemente os Casos de uso e os requisitos não funcionais
1. Crie um pull request com a proposta de solução

## Fase 1 (DeadLine 13/12)

### Requisitos funcionais

1. Criar cadastro de desenvolvedores
1. Criar cadastro de kanbans
1. Criar cadastro de postits, sendo cada postit pertencente a um kanban
1. Criar cadastro de raias, sendo que cada raia deve percenter a um kanban

### Requisitos não funcionais

1. O sistema deve ter uma diretiva capaz de gerar formulários a partir de um JSON. ex de JSON recebido: [{type: 'text', name: 'title', label: 'Title'}, {...}, {...}]
1. O sistema deve ser implementado utilizando ES6 e suas novas funções
1. O sistema deve utilizar AngularJS sem utilização das instruções: ng-...

### Casos de uso

#### Requisito 1

1. Como usuário, gostaria de ver na tela inicial o seguinte conjunto de tabs:
- Post its
- Raias
- Kanban
- Desenvolvedores

#### Requisito 2

Pré-condições: Requisito 1

1. Como usuário, gostaria que ao acessar a tab desenvolvedores
- E que esta tab apresentasse uma grid, com os desenvolvedores previamente cadastrados
2. Como usuário, gostaria que nessa aba tivesse um botão Adicionar
- E ao clicar no botão, abrisse um formulário
- E neste formulário houvesse um campo para informar o nome do desenvolvedor
- E ao final do formulário houvesse um botão Salvar
- E ao clicar neste botão o formulário fosse fechado
- E voltasse para a lista de desenvolvedores
- E que esta lista fosse atualizada apresentando o desenvolvedor cadastrado

#### Requisito 3

Pré-condições: Requisito 1

1. Como usuário, gostaria que ao acessar a tab Kanban
- E que esta tab apresentasse uma grid, com os Kanbans previamente cadastrados
2. Como usuário, gostaria que nessa aba tivesse um botão Adicionar
- E ao clicar no botão, abrisse um formulário
- E neste formulário houvesse um campo para informar um título para o Kanban
- E ao final do formulário houvesse um botão Salvar
- E ao clicar neste botão o formulário fosse fechado
- E voltasse para a lista de Kanbans
- E que esta lista fosse atualizada apresentando o Kanban cadastrado

#### Requisito 4

Pré-condições: Requisito 1

1. Como usuário, gostaria que ao acessar a tab Raias
- E que esta tab apresentasse uma grid, com as Raias previamente cadastrados
2. Como usuário, gostaria que nessa aba tivesse um botão Adicionar
- E ao clicar no botão, abrisse um formulário
- E neste formulário houvessem os seguintes campos:
* um listbox para selecionar o kanban, ao qual esta Raia pertence
* um nome para a Raia
- E ao final do formulário houvesse um botão Salvar
- E ao clicar neste botão o formulário fosse fechado
- E voltasse para a lista de Raias
- E que esta lista fosse atualizada apresentando a Raia cadastrado

#### Requisito 5

Pré-condições: Requisito 1

1. Como usuário, gostaria que ao acessar a tab Post its
- E que esta tab apresentasse uma grid, com os Post its previamente cadastrados
2. Como usuário, gostaria que nessa aba tivesse um botão Adicionar
- E ao clicar no botão, abrisse um formulário
- E neste formulário houvessem os seguintes campos:
* um listbox para selecionar o kanban, ao qual este Post it pertence
* um listbox para selecionar a Raia, ao qual este Post it percente
* um listbox para selecionar o Desenvolvedor, ao qual este post it pertence
* um listbox para selecionar o Tipo de atividade, opções: Feature, Fix, Spike
* a data de início da atividade
* a data de conclusão da atividade
* um título para o Post it
- E ao final do formulário houvesse um botão Salvar
- E ao clicar neste botão o formulário fosse fechado
- E voltasse para a lista de Raias
- E que esta lista fosse atualizada apresentando a Raia cadastrado

## Fase 2 (DeadLine 22/12)

### Requisitos funcionais

1. Criar um Kanban, com as Raias previamente cadastradas

### Requisitos não funcionais

1. O sistema deve utilizar tratamento de promises
1. O sistema deve utilizar o padrão de projeto MVC
1. O sistema deve utilizar o padrão de projeto EventBus
1. O sistema deve utilizar práticas de clean code

### Casos de uso

#### Requisito 1

1. Como usuário, gostaria de ver na tela inicial o seguinte conjunto de tabs:
- Board
- Post its
- Raias
- Kanban
- Desenvolvedores

#### Requisito 2

Pré-condições: Requisito 1

1. Como usuário, gostaria de que ao acessar a tab Board fosse apresentado um listbox no topo da página
- E que este litbox apresente a lista dos Kanbans previamente cadastrados
- E que ao selecionar uma das opções seja gerado um Board
2. Como usuário, gostaria que no Board fossem apresentadas todas as Raias cadastradas para o Kanban selecionado
- E que todas as Raias ocupassem a mesma largura
- E que cada Raia tenha uma linha para cada Desenvolvedor
- E que cada Raia x Desenvolvedor tenhas os post it devidos
3. Como usuário, gostaria de ter uma opção de mouse (botão direito) que me permita alterar a Raia de um post it
- E que ao selecionar a opção de mouse seja apresentado um formulário
- E que neste formulário tenha um listbox
- E que neste listbox apresente todas as Raias cadastradas para este Kanban
- E que ao final do formulário tenha um botão Aplicar
- E que ao clicar no botão, seja fechado o formulário
- E que o Kanban seja atualizado
- E que o Post it seja apresentado na Raia correta
4. Como usuário, gostaria que ao clicar em um post it (botão esquerdo) seja aberta uma dialog
- E nesta dialog apresente todas as informações do post it

Exceções:

1. Caso hajam mais post its do que é suportado pela largura da Raia, escolher como apresentá-los


## O que Estudar?
**Tópicos para estudar**
- CleanCode Boas práticas [link-1](https://pt.slideshare.net/rodrigokono/boas-prticas-tcnica-para-um-cdigo-limpo-clean-code);
- JS com TDD na Prática [Seção 2 - ES6](https://www.udemy.com/course/js-com-tdd-na-pratica/);
- Gerador de formulário com Angular e JSON Schema;
- Criar CRUD utilizando localStorage ou afins; 
- Padrão EventBus e EventBus com Javascript;
- Padrão MVC utilizando AngularJS;
