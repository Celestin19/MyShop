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

3_ accessible : admin, client
Pour utiliser /items READ rendez-vous dans la catégorie ITEM Admin cliquer sur le premier liens si vous n’êtes pas connecté connectez vous en tant qu’admin avec les informations fourni juste en haut. Il vous suffit uniquement de mettre ça dans URL : http://localhost:3000/items/1  (le 1 correspond à l’id de la liste que vous voulez afficher) et de rester dans la catégorie GET. Maintenant vous pouvez cliquer sur SEND et ça vous affichera la liste qui à l’id que vous avez demandé.

5_ accessible : admin
Pour utiliser /items UPDATE rendez-vous dans la catégorie ITEM Admin cliquer sur le premier liens si vous n’êtes pas connecté connectez vous en tant qu’admin avec les informations fourni juste en haut. Il vous suffit uniquement de mettre ça dans URL : http://localhost:3000/items/1 (le 1 correspond à l’id de la liste que vous voulez modifier) et passer dans la catégorie PUT. Maintenant cliquez sur l’onglet body, sélectionnez raw, et mettez vous en JSON dans le menu déroulant à droite. 
Maintenant écrivez une liste en remplacer par ce que vous voulez mettre dans votre liste : 
{
    "description": "des lasagne aux épinards,
    "name": "LASAGNE",
    "price": 4.00
}

Si vous appuyez sur SEND vous pourrez voir que votre listes a été  créé.

6_ accessible : admin
Pour utiliser /items DELETE rendez-vous dans la catégorie ITEM Admin cliquer sur le premier liens si vous n’êtes pas connecté connectez vous en tant qu’admin avec les informations fourni juste en haut. Il vous suffit uniquement de mettre ça dans URL : http://localhost:3000/items/1 (le 1 correspond à l’id de la liste que vous voulez supprimer) et de passer dans la catégorie DELETE. Maintenant vous pouvez cliquer sur SEND et ça supprimera la liste que vous avez choisi grâce à l’id.

(Vous pouvez faire pareil en vous connectant en tant que client mais vous n’aurais accès que au : 1_, 2_, 4_).


