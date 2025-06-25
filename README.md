Configuração do Projeto:

Crie um diretório para o projeto e inicialize um projeto Node.js usando npm init -y.
Instale a biblioteca qrcode para gerar QR Codes diretamente no terminal:

npm install qrcode

Implementação do Gerador de QR Codes

O código permitirá que o usuário insira um link (URL) no terminal, e a saída será o QR Code correspondente, exibido diretamente no terminal.

Recursos adicionais:
Você pode permitir a exportação do QR Code como uma imagem (ex.: PNG ou SVG) para uso posterior.

Explicação do Código
Bibliotecas utilizadas:

readline: Para interagir com o usuário no terminal.
qrcode: Para gerar o QR Code e manipulá-lo (exibição no terminal ou exportação como imagem).
Função gerarQRCode:

Solicita o link do produto ao usuário.
Valida se o link começa com "http" ou "https".
Gera o QR Code diretamente no terminal usando QRCode.toString (com a opção { type: "terminal" }).
Salvando o QR Code como imagem:

Após gerar o QR Code, o sistema pergunta se o usuário deseja salvar a imagem.
Caso afirmativo, o QR Code é salvo como um arquivo PNG usando QRCode.toFile.
Reutilização de funções:

O programa reutiliza as funções de entrada, validação e geração para garantir modularidade e evitar duplicação de código.

Execução do Programa
Executar o código:

Salve o código em um arquivo chamado geradorQR.js.
Execute o programa no terminal:

node geradorQR.js
Interação no terminal:

O programa solicitará um link:

=== Gerador de QR Code para E-commerce ===
Digite o link do produto para gerar o QR Code: https://www.meuecommerce.com/produto123
Exibirá o QR Code no terminal:

=== QR Code Gerado ===
██████████████████████████████
█ ▄▄▄▄▄ █▀▀█▀▀█ ▄▄▄▄▄ █ ▀▀ █
█ █   █ █▀▀█▀▀█ █   █ █ ▀▀ █
█ █▄▄▄█ █ ▄▄▄ █ █▄▄▄█ █ ▀▀ █
█▄▄▄▄▄▄▄█ █ █ █▄▄▄▄▄▄▄█▄▄▄▄█

Perguntará se deseja salvar o QR Code como imagem:

Deseja salvar o QR Code como imagem (sim/não)? sim
Digite o nome do arquivo (sem extensão): produto123
QR Code salvo como imagem em: produto123.png
Exemplo de saída
QR Code no terminal:
O QR Code será exibido diretamente no terminal, com caracteres ASCII. Isso permite que seja visualizado sem a necessidade de uma interface gráfica.

Imagem gerada:
Se o usuário optar por salvar, o QR Code será salvo em um arquivo PNG no mesmo diretório do projeto.
