const readline = require("readline");
const QRCode = require("qrcode");

// Configuração para entrada do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função principal do gerador de QR Code
function gerarQRCode() {
  console.log("=== Gerador de QR Code para E-commerce ===");
  rl.question("Digite o link do produto para gerar o QR Code: ", (link) => {
    if (!link.startsWith("http")) {
      console.log("Por favor, insira um link válido começando com http ou https.");
      return gerarQRCode(); // Solicita novamente
    }

    // Gera o QR Code no terminal
    QRCode.toString(link, { type: "terminal" }, (err, qr) => {
      if (err) {
        console.error("Erro ao gerar QR Code:", err);
      } else {
        console.log("\n=== QR Code Gerado ===");
        console.log(qr); // Exibe o QR Code no terminal

        // Pergunta se o usuário deseja salvar como imagem
        rl.question(
          "Deseja salvar o QR Code como imagem (sim/não)? ",
          (resposta) => {
            if (resposta.toLowerCase() === "sim") {
              salvarComoImagem(link);
            } else {
              console.log("QR Code gerado com sucesso!");
              rl.close();
            }
          }
        );
      }
    });
  });
}

// Função para salvar o QR Code como imagem
function salvarComoImagem(link) {
  rl.question("Digite o nome do arquivo (sem extensão): ", (nomeArquivo) => {
    const caminho = `${nomeArquivo}.png`;
    QRCode.toFile(caminho, link, (err) => {
      if (err) {
        console.error("Erro ao salvar QR Code como imagem:", err);
      } else {
        console.log(`QR Code salvo como imagem em: ${caminho}`);
      }
      rl.close();
    });
  });
}

// Inicia o programa
gerarQRCode();
