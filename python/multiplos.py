#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

def multiplos3y5(numero) :
    suma = 0
    for i in range(numero):
        
        if i%3==0 or i%5 ==0 :
            print(i)
            suma=suma+i

    return "la suma es: "+ str(suma)

print(multiplos3y5(int(input("Ingresa el numero :"))))