# Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
#Para la solucion de este problema hare una funcion donde pueda ingresar un numero, y me calcule todos los numeros de fibonacci hasta ese numero, luego sumare todos esos numeros.

def numerosFibonacci(numero):
    resultado=1
    numeroAnterior=0
    numeroSiguiente=1
    sumaDePares=0
    
    if numero == 1 or numero == 2 :
        print("Ingresaste un numero invalido, por favor ingresa un numero mayor que 2")
    else:
        while resultado<numero:
            print(resultado)
            resultado = numeroAnterior+numeroSiguiente
            numeroAnterior=numeroSiguiente
            numeroSiguiente=resultado
            if resultado%2==0:
                sumaDePares=sumaDePares+resultado

    return(f"La suma de los numeros fibonacci menores que {numero} es {sumaDePares}")

print(numerosFibonacci(4000000))
            



    

