# Drogué à l’hexagone, Node JS ne m’a pas vraiment aidé à rester clean... Mais NestJS pourrait-il me sauver ?

## Abstract

On dit parfois que tous les écosystèmes se valent, et qu'à partir du moment où un développeur maîtrise les concepts, il n'aura pas de soucis à les mettre en œuvre…

Assez adepte du modèle hexagonale, de la clean architecture, et des concepts Domain Driven Design (DDD pour les intimes), Nicolas à poussé cette expérience pour proposer une API REST dans un contexte Javascript.

Est-ce que c'est simple ? </br>
Est-ce que c'est fait pour ? </br>
Est-ce que c'est une bonne idée ?

Spoiler normand: Peut-être que oui, peut être que non ... Ça dépend !

Venez découvrir les étapes de cette expérimentation, les points forts et les points faibles, ainsi que ce qui peut poser problème dans l'implémentation d'un modèle hexagonale dans l'écosystème NodeJS. Mais ne vous inquiétez pas, il existe quelques outils qui peuvent nous aider....

## Détails

### L'idée

Raconter l'histoire d'un POC qui est devenu une application, avec quelques errances, des observations, des choix, et des renoncements !

* A quel point l'écosystème JS permet de construire facilement une API hexagonale?
* Est-ce que ce n'est pas aller contre des bases de cet écosystème ?
* Comment faire pour rester au plus proche des patterns d'organisation de code ?
* Quels outils peuvent nous aider et à quoi devons nous renoncer ?

### Plan

* Introduction (5 min)
    * Mais pourquoi s'infliger cela ?
    * Pourquoi présenter cete démarche ?
* Retour sur les concepts (5-10 min)
    * Architecture hexagonale, clean et DDD
    * Quelques contraintes supplémentaires et pour quelles raisons
        * Le Typescript
        * Isoler les éléments
        * S'adresser au plus grand nombre
        * Quelques coups de cutter dans le contrat
    * Les points clés
        * Injection de dépendance
        * Inversion de contrôle
        * Isolation des modules
* A chaque problème, sa solution : histoire d'une construction itérative (30 mins)
    * TypeDI, Inversify pour injecter des dépendances
    * Capacités et limites de TS pour définir les modèles et limiter les mapping
    * Au cœur de la gestion des modules NPM
    * NestJS, un (vrai ?) cadre de travail !
* Synthèses (5 mins)
    * Outils clés et limitations
    * Quelques points de comparaison par rapport à d'autre langages.
    * Et si c'était à refaire ?

    
### Resources

* Les slides (45mins) :
    * [BDX I/O 2022](./medium/index-bdxio.html#/)
    * [NantesJs #68](./medium/index-nantesjs.html#/)
    * [Volacamp]( ./medium/index-volcamp.html#/)
    * [Onepoint]( ./medium/index.html#/)
* Captation vidéo :
    * [Volcamp (A venir...)](https://www.youtube.com/watch...)
    * [BDX I/O](https://youtu.be/NAhi9IsCJP4?t=3057)

### Références

* BDX I/O 2022 (100 pers.)
* Nantes JS #68 (30 pers.)
* Volcamp 2022  (100 pers.)
* eTech Day de septembre 2022 (conférence Interne  - 20 pers.)
