#! /usr/bin/env/ python3 
"""def compter_nombres_distincts():
    # Demander à l'utilisateur de saisir le nombre d'éléments
    n = int(input("Entrez le nombre d'éléments à traiter : "))
    
    # Vérification sur la validité de n
    if n <= 0:
        print("Le nombre d'éléments doit être supérieur à zéro.")
        return

    # Saisie des nombres dans le tableau
    print(f"Entrez les {n} nombres entiers :")
    tableau = [int(input(f"Nombre {i+1}: ")) for i in range(n)]
    
    # Calcul des fréquences avec un dictionnaire
    frequences = {}
    for nombre in tableau:
        if nombre in frequences:
            frequences[nombre] += 1
        else:
            frequences[nombre] = 1

    # Affichage des nombres distincts et leurs fréquences
    print("\nNombres distincts et leurs fréquences :")
    for nombre, freq in frequences.items():
        print(f"{nombre}: {freq}")

# Appel de la fonction principale
compter_nombres_distincts()
"""
print ("hello world")
