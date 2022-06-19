#crear un programa que cuando ingrese un numero me diga si es primo o no
#luego crear un programa que me arroje la cantidad de los primeros primos que yo le ingrese por consola.

def numeroprimo(numero):
    divisores = 0
    if numero>1:
        for i in range(2,int(numero)):
            if numero%i==0 :
                print(f"Este numero no es primo, pues tiene como divisor a :{i} ")
                divisores+=1
        if divisores == 0:
            print(f"Este numero si es primo : {numero} ")
    else :
        print('El numero ingresado no es valido, prueba con otro.')

    return numero

a = int(input('Ingresa un numero mayor que 1 para ver si es primo: '))
print(numeroprimo(a))




            
