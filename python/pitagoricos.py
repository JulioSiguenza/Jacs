#A Pythagorean triplet ies una serie de 3 numeros naturales, a < b < c, la cual ,av2 + bv2 = cv2 Por ejemplo, 3v2 + 4v2 = 9 + 16 = 25 = 5v2.There exists exactly one Pythagorean triplet for which a + b + c = 1000.Encuentra el producto abc.


# def pitagoras(a, b, c):
#     duda=False
#     suma=1000
#     if a < b < c:
#         print("paso solo la primera prueba")#definimos las formulas de pitagoras 
#         if c == (a**2+b**2)**0.5:
#             print(f"los 3 numeros, {a}, {b} y {c} forman un pytahagorean triplet")
#             if suma == a+b+c: #verificamos sila suma es igual a la suma que estoy buscand (opcional)
#                 print(f"Paso la tercera prueba, la suma de 'a''b'y 'c' es {suma}")
#                 duda = True
#     else:
#         print("hubo un error, los numeros no son correctos")
    
#     return(duda)



from audioop import mul


def encontrarNumeros(numero):
    resultado=0
    duda=False
    multiplicacion=0
    for a in range(numero):
        for b in range(numero):
            for c in range(numero):
                if a < b < c:
                    if c == (a**2+b**2)**0.5:
                        if a+b+c ==numero:
                            print(f"Este numero es parte de un Pythagoran triplet, de los numeros {a},{b} y {c}")
                            multiplicacion=a*b*c
                            print(multiplicacion)
                            duda=True

    return(duda)


print(encontrarNumeros(1000))


    

