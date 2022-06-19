#Un número palindrómico dice lo mismo en ambos sentidos. El palindrome más grande hecho del producto de dos números de 2 dígitos es 9009 = 91 × 99. Encuentra el palíndromo más grande hecho del producto de dos números de 3 dígitos.


#primero con una funcion veremos cuando un numero es palindromo 
def palindromo(numero):
    duda= False
    if str(numero) == ''.join(reversed(str(numero))):#te entrega el string voltedo,unidos por el''
        duda=True
    return duda


def palindromoMayor(numeroI,numeroF):#se solicitara el rango de donde se buscaran palindromos
    allPalindromos=[]
    palindromoMayor=0 #iremos almacenando todos los palindromos encontrados de esos digitos para luego compararlos y asi obtener el mayor
    for i in range(numeroI,numeroF):
        for j in range(numeroI,numeroF):
            resultado=i*j
            if palindromo(resultado)==True:
                # print(f"{resultado} si es palindromo y fue el resultado del producto de {i} y {j}")
                allPalindromos.append(resultado)

    palindromoMayor=max(allPalindromos)#la funcion max te devuelve el maximo del
    return(palindromoMayor)




print(palindromoMayor(100,1000))
#print(palindromo(9009))