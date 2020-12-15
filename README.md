# projeto-final-sistemas-distribuido-2020

GRUPO: Taita Ayane , Bruno Claudino ,Bruno Rodrigues , Philip Akpanyi , William Melo

GUIA DE COMO USAR

ATENÇÃO: modifique o arquivo do bot.py para se conectar com o token do seu bot.
ATENÇÃO: os passos 4, 5, e 6 podem ser bem demorados, vai depender do seu sistema (no linux é mais rápido que no windows, pois o windows roda uma pequena vm do linux para poder então usar o docker) e da potência da sua máquina. Então se demorar, seja paciente e espere, não saia fechando as coisas.

PASSOS

1 - mude o arquivo bot.py dentro da pasta bot, coloque nele o token do seu bot

2 - certifique-se de ter o docker instalado e rodando na sua máquina.

3 - abra o terminal na pasta no projeto

4 - use o comando a seguir para criar as images: docker-compose build

5 - use o comando a seguir para criar e rodar os containers: docker-compose up -d

obs: o -d é para que o terminal não fique travado ao rodar os containers

6 - no seu navegador, acesse: localhost:3000

7 - no endereço acima você verá o site com o mapa e os pontos onde estão os buracos marcados. Se não apareceu nenhum ponto para você, deve ser porque você ainda não enviou sua localização no bot


______________

COMO USAR O BOT

ATENÇÃO: não adianta usar o bot no telegram do computador, pois ele não permite enviar a localização, então use no celular

1 - no seu celular, instale o telegram

2 - deixe seu gps ativado

3 - abra o telegram, depois abra o chat com o seu bot

4 - digite o seguindo comando para iniciar a conversa com o bot: /start

5 - siga as instruções no menu que aparecerem e envie sua localização
