##EJECUCIÓN DEL PROYECTO

Para la ejecucución de la app, es necesario instalar meteor en tu máquina, para ello, desde linux ejecutamos:

--> curl https://install.meteor.com/ | sh

desde Windows, descargar el instalador desde aqui:

[Instalador](https://www.meteor.com/install)

Una vez instalado meteor, para ejecutar la app:

1. Clonar repositorio

--> git clone "github.com/ingeniadevteam/surveyges"

2. En el directorio del repositivo, ejecutar la app:

--> cd surveyges
--> meteor


##EJECUCIÓN DEL PROYECTO CON PARÁMETROS

Al usar login de Google, se precisa el paso de claves mediante parametro, para ejecutar:

--> meteor --settings "parametros.json"

donde parametros.json, es el fichero de credenciales de google:

```
{
  "GOOGLE_CLIENT_ID": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "GOOGLE_SECRET": "xxxxxxxxxxxxxxx"
}
```
