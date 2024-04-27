# Projet MongoDB Replica Set avec Docker et Node.js

Ce projet illustre la mise en place d'un Replica Set MongoDB en utilisant Docker et l'automatisation des opérations CRUD avec un script Node.js. Il sert de guide pratique pour implémenter une réplication de base de données dans MongoDB et automatiser des tâches de gestion des données.

## Démarrage

Les instructions suivantes vous guideront dans la mise en place de l'environnement et l'exécution du projet.

## Prérequis

Ce dont vous avez besoin pour installer le logiciel et comment l'installer :

- Docker
- Node.js
- NPM 

## Installation

1. **Cloner le dépôt**
   
   Clonez ce dépôt sur votre machine locale en utilisant :

   ```bash
   git clone https://github.com/enzo-chamanier/mongodb-replicaset.git
   ```

2. **Naviguer dans le répertoire du projet**

   ```bash
    avec la commande cd
   ```

3. **Démarrer les services avec Docker Compose**

   ```bash
   docker-compose up -d
   ```

   Cette commande va démarrer trois instances de MongoDB (un primaire et deux secondaires) et un serveur Node.js pour l'automatisation des opérations CRUD.

4. **Installer les dépendances du projet Node.js**

   ```bash
    npm install
    ```

## Utilisation

### Démarrer le réplica set MongoDB avec Docker 
L'initialisation du Replica Set MongoDB se fait automatiquement lors du 
démarrage des services avec Docker Compose.

### Générer et insérer des données dans la base de données 
Exécutez le script generateData.js pour générer et insérer des données aléatoires 
dans la base de données :
    
    ```
    node generateData.js
    ```
### Commandes CLI pour les opérations CRUD 
- Insertion 
    
        ```
        node createData.js
        ```

- Lecture

        ```
        node readData.js
        ```
- Mise à jour

        ```
        node updateData.js 
        ```
- Suppression

        `` 
        node deleteData.js
        ```
## Auteur
Enzo Chamanier

    
