## ![#00B098](https://placehold.it/15/00B098/000000?text=+) Desafio TotalPass

#### Validando a aplicação no ambiente de produção

* Acesse a [url](http://totalpass-challenge.s3-website-sa-east-1.amazonaws.com/#/) da aplicação em qualquer dispositivo mobile Android/iOS
* Para usar o app no formato de PWA no iOS(Safari), siga os seguintes passos:
    * Com o site aberto, clique no botão de compartilhar
    <img width="300px" src="https://i.imgur.com/WxZBc2T.png">

    * Em seguida, clique no botão `Adicionar à Tela de Início`
    <img width="300px" src="https://i.imgur.com/U7krT5H.png">
    
    * Agora, deve ter aparecido um atalho na sua tela inicial para acessar o site como um App.
    <img width="300px" src="https://imgur.com/2rJL5BP.png">
* Para usar o app no formato de PWA no Android(Chrome), siga os seguintes passos:
    * Com o site aberto, clique no menu hamburguer
    <img width="300px" src="https://i.imgur.com/6Jv4cMW.png">
    
    * Em seguida, clique no botão `Adicionar à tela inicial`
    <img width="300px" src="https://i.imgur.com/S7T4TWC.png">
    
    * Agora, deve ter aparecido um atalho na sua tela inicial para acessar o site como um App.
    <img width="300px" src="https://i.imgur.com/FadxY0Q.png">

#### Validando a aplicação no ambiente de desenvolvimento

* Clone este repositório
* Instale o `npm` no seu computador
* Rode no seu terminal o seguinte comando: `npm install`
* Após, rode `npm run dev`
* Acesse a url http://localhost:8080/#/

* Os comandos disponíveis do `npm` para este repositório são:
    * `npm run dev:` Responsável por rodar um servidor de desenvolvimento com a aplicação rodando.
    * `npm run start:` Responsável por rodar um servidor de desenvolvimento com a aplicação rodando.
    * `npm run fast-test:` Roda os testes da aplicação sem fazer a análise de cobertura de código.
    * `npm run unit:` Roda os testes da aplicação fazendo a análise de cobertura de código.
    * `npm run test:` Roda os testes da aplicação fazendo a análise de cobertura de código.
    * `npm run lint:` Aponta lugares no código que não estão seguindo os padrões de estilo.
    * `npm run build:` Gera o pacote usado no ambiente de produção.

#### Acessando os builds do Jenkins

* Acesse a [url do Jenkins](http://52.37.52.181:8080/blue/organizations/jenkins/totalpass-challenge/activity)
* Utilize as credenciais que você recebeu por e-mail
* Navegue pelos builds dos commits
![](https://imgur.com/JsJkSkh.png)
