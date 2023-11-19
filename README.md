# MY SHOP

## Présentation

**Bonjour, 
Ceci elle est guide d’utilisation du Site Web My Shop ainsi que de son API.
My Shop est un projet qui nécessite de créer une boutique en ligne avec une gestion des stock, gestion d'utilisateur et pouvoir automatiser l'ajout de produit à la boutique en ligne.**

Pour faire ce projet j'ai commencé par créer une site web qui fait office de boutique en ligne. Par la suite j'ai convertis cette boutique en utilisant VueJs. Puis je me suis occupé de toute la partie Back-End qui va me servir à créer de nouveaux produits, des nouveaux utilisateurs,...

## Démarrage
1. Il faut commencer tout d'abord par ouvrir le dossier dans Vs Code.
2. Ensuite il faut suivre le readme.md qui ce trouve dans le dossier my-shop-api.
3. Dans Docker il faut lancé le Containers. Afin de s'assurer que tout est start.
4. Une fois toute ces choses faites il faut ouvrir le terminale Vs Code.
5. Dans le terminale Vs Code il faut taper la commande "npm install" en faisant attention qu'on ce trouve bien dans le dossier.
6. Une fois cette commande faite il faut ce rendre dans le fichier package.json et cliquer sur le bouton Débuger, puis cliquer sur dev. Ceci va lancé vue js. Dans votre terminal vous pouvez voir qu'un url Local s'affiche, il faut le copier coller dans votre navigateur.
Ex : Local:   http://localhost:5173
7. Ensuite il faut lancer Postman.
8. Parfait vous êtes prêt à l'utilisation.

## Découverte du site web
Maintenant que vus avez suivi le guide démarrage vous pouvez voir que ce que vous avez ouvert dans votre navigateur vous redirige sur notre boutique en ligne. Sur cette boutique en ligne vous y trouverez des articles streetwear à la pointe de la mode. Que ce soit t-shirt, pull, chaussures,... Vous trouverez votre bonheur. Pour faciliter vos recherche vous pouvez utilisé des filtre mis à vos disposition. Ainsi que la possibilité de choisir votre fouchettes de prix en fonction de votre budget. Vous pouvez également voir que vous avez la possibilité de vous connecter à votre compte en cliquant sur le bouton "Login" en haut à droite de la page Web. Je voulaisse cliquer sur ce bouton. Comme vous pouvez l'observez vous êtes redirigé sur la page de login. Vous pouvez également observer que l'url dans votre barre de recherche à changé un "/login" c'est rajouté à la fin de l'url. Ceci signifie que vous pouvez directement rajouté le "/login" à la fin de l'url pour tombé sur cette page. Si vous n'avez pas de compte un bouton vous permet de cliquer dessus afin d'être redirigé sur la page de Signup. Comme vous pouvez le voir la aussi l'url à changé "/signup" c'est rajouté à la fin de l'url, vous pouvez donc également utilisé cette commande comme raccourci. Parfait maintenant vous pouvez si vous le souhaitez vous créer un compte en renseignant les information requise.

## Comment utiliser l'API

### Routes Category

#### *Avant toute chose il faut lancer ce lien : http://localhost/api/docs dans votre navigateur. Il faut vous rendre en bas de la page dans la partie Token. Cliquer sur Try it out. Renseignez email : celui que vous avez créer dans docker et password : celui que vous avez crée dans docker. Ensuite copier le token qui vous à été crée*

1_ Pour utiliser /api/categories, pour visualiser toutes les catégories.
Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/categories et de rester dans la catégorie GET. Si vous appuyez sur SEND vous pourrez voir toutes catégorie qui ont étés créés. 

2_ Pour utiliser /api/categories, pour créer une nouvelle catégorie. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/categories et de vous mettre dans la catégorie POST. Maintenant cliquez sur l’onglet body, sélectionnez raw, et mettez vous en JSON dans le menu déroulant à droite. Maintenant écrivez une liste en remplacer par ce que vous voulez mettre dans votre liste : 
{
  "name": "string",
  "products": [
    "string"
  ]
}
Si vous appuyez sur SEND vous pourrez voir que ça ne fonctionne pas on vous met un message d'erreur. Ceci est normal c'est une erreur interne que nous ne pouvons pas régler. Pour contourner cette erreur il faut retirer la ligne "products" de cette manière :
{
  "name": "string"
}
c'est seulement une fois qu'un produit aura été crée que vous pourré alors faire comme ce ci : 
{
  "name": "string",
  "products": [
    "/api/products/1"
  ]
}

3_ Pour utiliser /api/categories/{id}. Pour chercher une catégorie via son id. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/categories/{id} (remplacer id par l'id de la catégorie que vous souhaitez chercher) et de rester dans la catégorie GET. Si vous appuyez sur SEND vous pourrez voir la catégorie comportant l'id que vous avez spécifié.

4_Pour utiliser /api/categories, pour modifier une catéogrie. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/categories/{id} et de vous mettre dans la catégorie POST. Maintenant cliquez sur l’onglet body, sélectionnez raw, et mettez vous en JSON dans le menu déroulant à droite. Maintenant écrivez une liste en remplacer par ce que vous voulez mettre dans votre liste : 
{
  "name": "string",
  "products": [
    "string"
  ]
}
Si vous appuyez sur SEND vous pourrez voir que les modifications auront bien été faites.

5_ Pour utiliser /api/categories/{id} DELETE. Pour supprimer une catégorie grâce à son id. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/categories/{id} (remplacer id par l'id de la catégorie que vous souhaitez supprimer) et ce mettre dans la catégorie DELETE. Si vous appuyez sur SEND vous pourrez voir la catégorie comportant l'id que vous avec spécifié qui à bien été supprimé.

### Routes MediaObject

#### *Avant toute chose il faut lancer ce lien : http://localhost/api/docs dans votre navigateur. Il faut vous rendre en bas de la page dans la partie Token. Cliquer sur Try it out. Renseignez email : celui que vous avez créer dans docker et password : celui que vous avez crée dans docker. Ensuite copier le token qui vous à été crée*


1_ Pour utiliser /api/media_objects, pour visualiser tous les médias.
Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/media_objects et de rester dans la catégorie GET. Si vous appuyez sur SEND vous pourrez voir tous les médias qui ont étés créés. 

2_ Pour utiliser /api/media_objects, pour créer un nouveau média. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/media_objects et de vous mettre dans la catégorie POST. Maintenant cliquez sur l’onglet body, sélectionnez form-data, et mettez dans Key mettez : file et dans value : (l'image que vous souhaitez)
Si vous appuyez sur SEND vous pourrez voir que l'imaga à été publié.

3_ Pour utiliser /api/media_objects/{id}. Pour chercher un média via son id. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : localhost/api/media_objects{id} (remplacer id par l'id du média que vous souhaitez chercher) et de rester dans la catégorie GET. Si vous appuyez sur SEND vous pourrez voir le média comportant l'id que vous avez spécifié.

### Routes Product

#### *Avant toute chose il faut lancer ce lien : http://localhost/api/docs dans votre navigateur. Il faut vous rendre en bas de la page dans la partie Token. Cliquer sur Try it out. Renseignez email : celui que vous avez créer dans docker et password : celui que vous avez crée dans docker. Ensuite copier le token qui vous à été crée*

1_ Pour utiliser /api/products, pour visualiser toutes les produits.
Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/products et de rester dans la catégorie GET. Si vous appuyez sur SEND vous pourrez voir tous les produits qui ont étés créés. 

2_ Pour utiliser /api/products, pour créer un nouveau produits. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/products et de vous mettre dans la catégorie POST. Maintenant cliquez sur l’onglet body, sélectionnez raw, et mettez vous en JSON dans le menu déroulant à droite. Maintenant écrivez une liste en remplacer par ce que vous voulez mettre dans votre liste : 
{
  "name": "string",
  "description": "string",
  "price": 0,
  "categories": [
    "string"
  ],
  "image": "string"
}
Si vous appuyez sur SEND vous pourrez voir que ça ne fonctionne pas on vous met un message d'erreur. Ceci est normal c'est une erreur interne que nous ne pouvons pas régler. Pour contourner cette erreur il faut retirer la ligne "categories" de cette manière :
{
  "name": "string",
  "description": "string",
  "price": 0,
  "image": "string"
}
c'est seulement une fois qu'une catégorie aura été crée que vous pourré alors faire comme ce ci : 
{
  "name": "string",
  "description": "string",
  "price": 0,
  "categories": [
    "/api/categories/1"
  ],
  "image": "string"
}

3_ Pour utiliser /api/products/{id}. Pour chercher un produit via son id. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/products/{id} (remplacer id par l'id du produit que vous souhaitez chercher) et de rester dans la catégorie GET. Si vous appuyez sur SEND vous pourrez voir le produit comportant l'id que vous avez spécifié.

4_Pour utiliser /api/products/{id}, pour modifier un produit. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/products/{id} et de vous mettre dans la catégorie POST. Maintenant cliquez sur l’onglet body, sélectionnez raw, et mettez vous en JSON dans le menu déroulant à droite. Maintenant écrivez une liste en remplacer par ce que vous voulez mettre dans votre liste : 
{
  "name": "string",
  "description": "string",
  "price": 0,
  "categories": [
    "string"
  ],
  "image": "string"
}
Si vous appuyez sur SEND vous pourrez voir que les modifications auront bien été faites.

5_ Pour utiliser /api/products/{id} DELETE. Pour supprimer un produit grâce à son id. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/products/{id} (remplacer id par l'id du produit que vous souhaitez supprimer) et ce mettre dans la catégorie DELETE. Si vous appuyez sur SEND vous pourrez voir le produit comportant l'id que vous avec spécifié qui à bien été supprimé.

### Routes User

#### *Avant toute chose il faut lancer ce lien : http://localhost/api/docs dans votre navigateur. Il faut vous rendre en bas de la page dans la partie Token. Cliquer sur Try it out. Renseignez email : celui que vous avez créer dans docker et password : celui que vous avez crée dans docker. Ensuite copier le token qui vous à été crée*

1_ Pour utiliser /api/users, pour visualiser toutes les user.
Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/users et de rester dans la catégorie GET. Si vous appuyez sur SEND vous pourrez voir tous les user qui ont étés créés. 

2_ Pour utiliser /api/users, pour créer un nouveau user. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/products et de vous mettre dans la catégorie POST. Maintenant cliquez sur l’onglet body, sélectionnez raw, et mettez vous en JSON dans le menu déroulant à droite. Maintenant écrivez une liste en remplacer par ce que vous voulez mettre dans votre liste : 
{
  "email": "user@myshop.com",
  "password": "thisissecret",
  "fullName": "John Doe"
}
Si vous appuyez sur SEND vous pourrez voir que le user à bien été crée.

3_ Pour utiliser /api/users/{id}. Pour chercher un user via son id. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/users/{id} (remplacer id par l'id du user que vous souhaitez chercher) et de rester dans la catégorie GET. Si vous appuyez sur SEND vous pourrez voir le user comportant l'id que vous avez spécifié.

4_Pour utiliser /api/users/{id}, pour modifier un users. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/users/{id} et de vous mettre dans la catégorie POST. Maintenant cliquez sur l’onglet body, sélectionnez raw, et mettez vous en JSON dans le menu déroulant à droite. Maintenant écrivez une liste en remplacer par ce que vous voulez mettre dans votre liste : 
{
  "email": "user@myshop.com",
  "password": "thisissecret",
  "fullName": "John Doe"
}
Si vous appuyez sur SEND vous pourrez voir que les modifications auront bien été faites.

5_ Pour utiliser /api/users/{id} DELETE. Pour supprimer un user grâce à son id. Il faut ce rendre dans authorization séléctionner Bearer Token puis collé la clef Token ensuite. Il vous suffit uniquement de mettre ça dans URL : http://localhost/api/products/{id} (remplacer id par l'id du user que vous souhaitez supprimer) et ce mettre dans la catégorie DELETE. Si vous appuyez sur SEND vous pourrez voir le user comportant l'id que vous avec spécifié qui à bien été supprimé.

# FIN

Merci de nous avoir fait confiance sur ce projet et d’avoir pris le temps de lire le manuel d’utilisation pour une utilisation optimale pour tout type de personne. Si jamais vous rencontrez quelconque problème vous pouvez me contactez je répondrais dans les plus brefs délais.

Merci.