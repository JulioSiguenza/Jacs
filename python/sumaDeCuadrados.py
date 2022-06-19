#La suma de los cuadrados de los primeros diez números naturales es:1v2+2v2+..+10v2=385. El cuadrado de la suma de los primeros diez números naturales es:(1+2+...+10)v2=55v2=3025. Por lo tanto, la diferencia entre la suma de los cuadrados de los primeros diez números naturales y el cuadrado de la suma es 3025 − 385 = 2640.Encuentra la diferencia entre la suma de los cuadrados de los primeros cien números naturales y el cuadrado de la suma

def cuadradoDeSuma(numero):
    #primero hare una funcion para que al momento de ingresar un numero, me devuelva el cuadrado de la suma de los numeros de el 1 hasta el numero ingresado. (1+2+...n)v2
    suma=0
    for i in range(1,numero+1):
        print(i)#Aca la funcion range solo toma valores del 1, hasta 1 menos que el numero, por eso se suma 1
        suma=suma+i
    cuadrado = suma*suma
    return(cuadrado)


def sumaDeCuadrados(numero):
    suma=0
    for i in range(numero+1)  :
        i=i*i
        print(i)
        suma=i+suma
    return(suma)

#por ultimo una funcion donde arroje la resta del resultado de las dos funciones pasadas.
def diferenciaDeCuadrados(numero):
    diferencia = cuadradoDeSuma(numero)-sumaDeCuadrados(numero)
    return(f"La diferencia entre los cuadrados de la suma y la suma de los cuadrados es {diferencia}")


print(diferenciaDeCuadrados(100))
# print(cuadradoDeSuma(10))
# print(sumaDeCuadrados(10))





