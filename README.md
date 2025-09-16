# Mobamovia Theme - Gutenberg Conversion

Ce document résume les changements effectués pour convertir le thème en une expérience d'édition basée sur Gutenberg.

## Objectif

L'objectif principal était de remplacer le contenu HTML statique des pages "Accueil" et "Services" par un système flexible de blocs et de compositions (patterns) WordPress. Cela permet au client de modifier le contenu et l'ordre des sections directement depuis l'éditeur de pages.

## Comment utiliser les nouvelles sections (Patterns)

Toutes les sections des pages d'accueil et de services sont désormais des **Compositions (Patterns)**.

Pour construire ou modifier les pages "Accueil" et "Services" :

1.  Allez dans `Pages > Toutes les pages` et ouvrez la page que vous souhaitez modifier (ex: "Accueil").
2.  Cliquez sur l'icône `+` pour ajouter un nouveau bloc.
3.  Allez dans l'onglet **Compositions**.
4.  Dans le menu déroulant des catégories, sélectionnez **"Mobamovia Patterns"**.
5.  Vous y trouverez toutes les sections disponibles (ex: "Home: Hero", "Home: About", "Services: Main Content", etc.). Cliquez sur une composition pour l'insérer dans la page.
6.  Vous pouvez réorganiser les compositions comme n'importe quel autre bloc.

## Gestion des images

Les blocs `Image` dans les compositions sont vides par défaut. Vous serez invité à choisir une image depuis la **Médiathèque** lors de l'insertion de la composition.

Pour peupler la médiathèque, vous pouvez téléverser les images de référence qui se trouvent dans le dossier `/img` du thème.

## Le Slider de Témoignages

La section des témoignages est gérée de deux manières :

1.  **La composition "Home: Testimonials"** : C'est un conteneur qui place le titre "Témoignages" et le bloc du slider. Insérez cette composition pour ajouter la section complète à votre page.
2.  **Le bloc "Testimonials Slider"** : C'est un bloc ACF personnalisé qui se trouve à l'intérieur de la composition. C'est ici que vous gérez les témoignages.
    -   Cliquez sur le bloc pour ajouter, modifier et réorganiser chaque témoignage dans la barre latérale de l'éditeur.
    -   Utilisez le champ "Card Layout Style" pour choisir entre un affichage normal et un affichage avec un texte plus grand pour un témoignage spécifique.

## Actualités (Query Loop)

La section "Actualités" sur la page d'accueil affiche désormais automatiquement les 3 derniers articles de blog. Il n'y a aucune action manuelle requise, à part la création d'articles dans la section "Articles" de WordPress.

## Fichiers techniques modifiés et créés

-   **/templates/**: `front-page.html`, `page.html`, `page-services.html` ont été mis à jour pour utiliser `wp:post-content`.
-   **/patterns/**: Contient tous les nouveaux fichiers de compositions pour les sections des pages.
-   **/blocks/testimonials-slider/**: Contient le code pour le bloc ACF des témoignages.
-   `functions.php`: Mis à jour pour enregistrer la catégorie de compositions et le bloc ACF.
-   `custom_script.js`: Nettoyé de l'ancien code du slider.
-   `README.md`: Ce fichier.
