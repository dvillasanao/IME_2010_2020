[![R-CMD-check](https://github.com/r-lib/usethis/actions/workflows/R-CMD-check.yaml/badge.svg)](https://github.com/r-lib/usethis/actions/workflows/R-CMD-check.yaml)

# Índice de Marginación en México

## Introducción

El Índice de Marginación es una herramienta que evalúa las condiciones de carencia en México, como acceso a educación, vivienda adecuada, ingresos monetarios y tamaño de la localidad. Se utiliza para identificar y focalizar políticas públicas dirigidas a reducir estas carencias.

## Metodología de Estimación

El Índice de Marginación a nivel estatal se basa en datos del Censo de Población y Vivienda 2020, Censo de Población y Vivienda 2010 y la Encuesta Intercensal 2015, utilizando nueve indicadores socioeconómicos. Se emplea el Método de Distancia `DP2` para comparaciones temporales y espaciales, asegurando robustez estadística y comparabilidad a lo largo del tiempo y entre regiones.

## Beneficios del Método DP2

El Método DP2 permite comparaciones precisas entre diferentes niveles geográficos, utilizando un indicador sintético que mide la distancia a una base de referencia teórica. Esto facilita la identificación de áreas más marginadas y el diseño de políticas efectivas.

## Contenido

Este proyecto contiene los siguientes archivos y directorios principales:

-   **\_bookdown.yml**: Archivo de configuración de `bookdown`.\
-   **index.Rmd**: El archivo principal del libro.\
-   **01-Indicadores.Rmd**, **02-Datos.Rmd**, etc.: Archivos de contenido del libro, uno por capítulo.\
-   **\_output.yml**: Archivo de configuración de salida.\
-   **docs/**: Directorio donde se generarán los archivos HTML del libro.\
-   **README.md**: Este archivo.

## Requisitos

Para compilar este libro necesitas tener instalados los siguientes programas y paquetes:

-   R: [Descargar R](https://cran.r-project.org/)
-   RStudio (opcional pero recomendado): [Descargar RStudio](https://www.rstudio.com/products/rstudio/download/)
-   Paquete `bookdown`: Puedes instalarlo desde CRAN ejecutando `install.packages("bookdown")`
-   **Nota**: la paquetería `r paste("p2distance (>= ", packageVersion('p2distance'), ")", sep = "")`, no se encuentra actualizada dentro del `CRAN` pero se encuentra dentro de sus repositorios.

```{{r}}
 install.packages("https://cran.r-project.org/src/contrib/Archive/p2distance/p2distance_1.0.1.tar.gz")
```

### Bookdown

**Enlace**: <https://dvillasanao.github.io/IME_2010_2020/>  

### Documentos Bookdown  

**Índice de marginación a nivel estatal** [Bookdown](https://dvillasanao.github.io/IME_2010_2020/)   
**Índice de marginación a nivel municipal** [Bookdown](https://dvillasanao.github.io/IMM_2010-2020/)   
**Índice de marginación a nivel localidad** [Bookdown](https://dvillasanao.github.io/IML_2010_2020/)   
**Índice de marginación a nivel AGEB** [Bookdown](https://dvillasanao.github.io/IMU_2010-2020/)   
**Índice de marginación a nivel colonia** [Bookdown](https://dvillasanao.github.io/IMC_2020/)   

