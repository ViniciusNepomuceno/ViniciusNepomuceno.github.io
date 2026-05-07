const numeroDaSorte = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
const maxTentativas = 3;

function verificarPalpite() {
            const campoPalpite = document.getElementById('palpite');
            const mensagem = document.getElementById('mensagem');
            const palpite = Number(campoPalpite.value);
            
            tentativas++;
          
            if (palpite === numeroDaSorte) {
                mensagem.innerHTML = `Parabuans! Você acertou o número ${numeroDaSorte}!`;
                mensagem.style.color = "green";
                encerrarJogo();
            }
            else {
                if (palpite < numeroDaSorte) {
                    mensagem.innerHTML = `O número é maior | Tentativa ${tentativas} de ${maxTentativas}.`;
                } else {
                    mensagem.innerHTML = `O número é menor | Tentativa ${tentativas} de ${maxTentativas}.`;
                }
                mensagem.style.color = "orange";
                if (tentativas >= maxTentativas) {
                    mensagem.innerHTML = `O número era ${numeroDaSorte}.`;
                    mensagem.style.color = "red";
                    encerrarJogo();
                }
            }
            campoPalpite.value = '';
            campoPalpite.focus();
        }

        function encerrarJogo() {
            document.querySelector('button').disabled = true;
            document.getElementById('palpite').disabled = true;
        }
;