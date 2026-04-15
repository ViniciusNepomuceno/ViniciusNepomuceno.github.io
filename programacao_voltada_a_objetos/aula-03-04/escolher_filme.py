class Filme:
    def __init__(self):
        self.titulo = input("Digite o título do filme: ")
        self.genero = input("Digite o gênero do filme: ")
        self.duracao = int(input("Digite a duração do filme (em minutos): "))
        self.ano_lancamento = int(input("Digite o ano de lançamento do filme: "))
        self.avaliacao = float(input("Digite a avaliação do filme (de 0 a 10): "))
filmes = []
while True:
    filme = Filme()
    filmes.append(filme)
    continuar = input("Deseja adicionar outro filme? (s/n): ")
    if continuar.lower() != 's':
        break


print("\nLista de Filmes:")
for i, filme in enumerate(filmes, start=1):
    print(f"{i}. {filme.titulo} - Gênero: {filme.genero}, Duração: {filme.duracao} minutos, Ano: {filme.ano_lancamento}, Avaliação: {filme.avaliacao}/10")

print("\nMenu:")
print("1. Listar filmes")
print("2. Sair")
while True:
    escolha = input("Escolha uma opção: ")
    if escolha == '1':
        print("\nLista de Filmes:")
        for i, filme in enumerate(filmes, start=1):
            print(f"{i}. {filme.titulo} - Gênero: {filme.genero}, Duração: {filme.duracao} minutos, Ano: {filme.ano_lancamento}, Avaliação: {filme.avaliacao}/10")
    elif escolha == '2':
        print("Saindo do programa.")
        break
    else:
        print("Opção inválida. Tente novamente.")