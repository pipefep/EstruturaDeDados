# Versão: Python 3.6.7

from os import system # Importa da biblioteca OS a função System, para atividades usando o sistema operacional.

vetA = [] # Declarar que existe um vetor/lista em "vetA".

# Função para imprimir uma linha.
def linha():
    print("----------------")

# Função para adicionar o número da pessoa.
def adicionar():

    linha()

    # Pegar o número da pessoa.
    novoNum = input("Digite o Número: ")

    # Adiciona o número no vetor/lista "vetA".
    vetA.append(novoNum)

    linha()

# Função para buscar se existe um número inserido.
def buscar():

    linha()

    # Pegar o número para a busca.
    proc = input("Digite o Número para a Busca: ")

    # Se o que foi digitado em "proc" estiver dentro do "vetA", irá retornar "True" e executará o if.
    # Se o que foi digitado em "proc" NÃO estiver dentro do "vetA", o número não existe e executará o else.
    if(proc in vetA):
        print("\nO número {} EXISTE na lista telefonica!".format(proc))
    else:
        print("\nO número {} NÃO EXISTE na lista telefonica!".format(proc))
    
    linha()

# Função para excluir um número que foi inserido.
def excluir():

    linha()

    # Pegar o número para a exclusão.
    exc = input("Digite o Número para remover da Lista: ")

    if(exc in vetA): # Irá excluir o número se ele existir na lista "vetA".
        vetA.remove(exc)
    else: # Caso o número não exista, irá retornar a mensagem abaixo.
        print("\nO número {} NÃO EXISTE na lista telefonica!".format(exc))

    linha()

# Função para listar todos os números existentes.
def listar():

    linha()

    j = len(vetA) # Define um valor para "j" de acordo com o tamanho da lista "vetA"

    for i in range(0, j): # Imprime uma vez na tela a lista com todos os elementos enumerados
        print("{}. {}".format(i+1,vetA[i]))

    linha()


# Loop para voltar ao menu.
while True:

    # Menu para usuário
    print("\n--- Lista telefonica ---\n")
    print("- Digite uma operação -\n")
    print("[1] Inserir um novo telefone.")
    print("[2] Buscar um determinado telefone.")
    print("[3] Remover um determinado telefone.")
    print("[4] Listar todos os telefones.\n")

    # Escolha para cada função.
    esc = int(input("Digite a Escolha: "))

    # Limpar o console, se o OS for linux = system('clear') ; se for windows = system('cls').
    system('clear') 

    # Dependendo de qual foi a escolha, de acordo com o menu acima, ele irá executar a função escolhida.
    if(esc == 1):
        adicionar()
    elif(esc == 2):
        buscar()
    elif(esc == 3):
        excluir()
    elif(esc == 4):
        listar()
    else:
        print("\nOPÇÃO INVÁLIDA!\n")
