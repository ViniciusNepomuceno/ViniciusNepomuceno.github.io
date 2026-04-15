from class import ContaPoupanca, ContaCorrente

contas = []

opc = 0

while opc != 4:
    print("Menu")
    print("1 - Criar Conta Poupança")
    print("2 - Criar Conta Corrente")
    print("3 - Listar Contas e Saldo")
    print("4 - Sair")
    opc = int(input("Digite a opção desejada: "))

    if opc == 1:
        titular = input("Digite o nome do titular da conta: ")
        saldo = float(input("Digite o saldo inicial da conta: "))
        juros = float(input("Digite a taxa de juros da conta (em decimal): "))
        conta_poupanca = ContaPoupanca(titular, saldo, juros)
        contas.append(conta_poupanca)
        print("Conta Poupança criada com sucesso!")

    elif opc == 2:
        titular = input("Digite o nome do titular da conta: ")
        saldo = float(input("Digite o saldo inicial da conta: "))
        limite = float(input("Digite o limite de crédito da conta: "))
        conta_corrente = ContaCorrente(titular, saldo, limite)
        contas.append(conta_corrente)
        print("Conta Corrente criada com sucesso!")

    elif opc == 3:
        for conta in contas:
            print(f"Titular: {conta.titular}, Saldo: {conta.saldo}")

    elif opc == 4:
        print("Saindo do programa...")

    else:        
        print("Opção inválida. Por favor, tente novamente.")