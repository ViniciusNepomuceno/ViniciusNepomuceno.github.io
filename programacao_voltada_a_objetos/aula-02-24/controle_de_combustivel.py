class PainelVeiculo:
    def __init__(self, capacidade_maxima=60):
        self.capacidade_maxima = capacidade_maxima
        self.combustivel_atual = capacidade_maxima
        self.velocidade = 0
        self.distancia_percorrida = 0
    
    def abastecer(self, quantidade):
        """Abastece o veículo"""
        self.combustivel_atual = min(self.combustivel_atual + quantidade, self.capacidade_maxima)
        print(f"Combustível atual: {self.combustivel_atual:.2f}L")
    
    def viajar(self, distancia, velocidade=100):
        """Simula uma viagem consumindo combustível"""
        consumo_por_km = 0.08  # Litros por km
        combustivel_necessario = distancia * consumo_por_km
        
        if combustivel_necessario > self.combustivel_atual:
            distancia_possivel = self.combustivel_atual / consumo_por_km
            print(f"Combustível insuficiente! Você pode viajar apenas {distancia_possivel:.2f}km")
            self.combustivel_atual = 0
            self.distancia_percorrida += distancia_possivel
        else:
            self.combustivel_atual -= combustivel_necessario
            self.distancia_percorrida += distancia
            print(f"Viagem de {distancia}km concluída!")
        
        self._exibir_painel()
    
    def _exibir_painel(self):
        """Exibe o status do painel"""
        percentual = (self.combustivel_atual / self.capacidade_maxima) * 100
        print(f"━━━ PAINEL DO VEÍCULO ━━━")
        print(f"Combustível: {self.combustivel_atual:.2f}L / {self.capacidade_maxima}L ({percentual:.1f}%)")
        print(f"Distância percorrida: {self.distancia_percorrida:.2f}km")
        print()
    
    def status(self):
        """Exibe o status completo"""
        self._exibir_painel()


# Exemplo de uso:
#if __name__ == "__main__":
#    veiculo = PainelVeiculo(capacidade_maxima=50)
#    veiculo.status()
#    veiculo.viajar(200)
#    veiculo.abastecer(30)
#    veiculo.viajar(150)