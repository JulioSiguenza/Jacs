#Los factores primos de 13195 son 5, 7, 13 y 29.¿Cuál es el factor primo más grande del número 600851475143?
#NOTA: Los factores primos de un número entero son los números primos divisores exactos de ese número entero. El proceso de búsqueda de esos divisores se denomina factorización de enteros, o factorización de primos
def numeroprimo(numero):
    divisores = 0
    primo = False
    if numero > 1:
        for i in range(2, int(numero)):
            if numero % i == 0:
                # print(
                #     f"Este numero no es primo, pues tiene como divisor a :{i} ")
                divisores += 1
        if divisores == 0:
            # print(f"Este numero si es primo : {numero} ")
            primo = True
    else:
        print('El numero ingresado no es valido, prueba con otro.')

    return primo

print(numeroprimo(17))

def factoresPrimos(numero):
    contador=1
    multiplicacion=1
    while multiplicacion<numero:
        contador= contador + 1
        if numeroprimo(contador)==True :#primero se verifica que el numero sea primo
            if numero%contador==0:#aca se verifica que el numero ingresado en funcion tenga como multiplo al numero analizado(contador)
                print(contador)
                multiplicacion=contador*multiplicacion# esta variable va almacenando la multiplicacion de los factores primos encontrados, y el codigo solo se ejecutara hasta que encuentre todos los factores primos de tal numero.
    print(f"El ultimo factor primo de {numero} es {contador}")

    return(multiplicacion)


print(factoresPrimos(600851475143))
