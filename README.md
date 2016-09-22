##CREAR REPOSITORIO

ir a: https://github.com/

Registro y login
->New repository, Nombre, public(en el caso), No inicializar con nada y CREAR


##CREAR PROYECTO

-> meteor create surveyges

-> cd surveyges

-> rm * -r

-> git init

-> git config user.email "m.zafra@camposelectricas.es"

-> git config user.name "Manuel Zafra"

-> git add *

-> git commit -m "Commit inicial"

-> git remote add origin https://github.com/ingeniadevteam/surveyges

-> git push -u origin master


##ESTRUCTURA DE DIRECTORIOS

->touch README.md

->mkdir client

->mkdir client/templates

->mkdir client/templates/includes

->mkdir client/templates/application

->mkdir client/stylesheets

->mkdir server

->mkdir public

->mkdir public\Images

->mkdir deployment

->mkdir private

->mkdir packages

->mkdir lib

##IMPORTACIÓN PAQUETES NECESARIOS

Paquete bootstrap

-> meteor add twbs:bootstrap

Paquete Iron Router: [Info from](http://iron-meteor.github.io/iron-router/)

-> meteor add iron:router

Paquete spinner

-> meteor add sacha:spin

##ESTILOS

client/stylesheets

[stylesheet from microscope](https://raw.githubusercontent.com/DiscoverMeteor/Microscope/master/client/stylesheets/style.css)

##A TENER EN CUENTA

AUTOPUBLISH DE METEOR: evitar que el framework publique automaticamente las collecciones. A partir de ahora se usará publish y subscribe, para
decir quién hace qué

-> meteor remove autopublish

INSECURE DE METEOR:

-> meteor remove insecure
