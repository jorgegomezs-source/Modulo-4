# Aplicación de Recursos Humanos en JavaScript

¡Hola! Esta es una aplicación sencilla de gestión de recursos humanos que he creado usando JavaScript puro. Está diseñada para ejecutarse directamente en la consola del navegador, sin necesidad de servidores o frameworks complicados.

## ¿Qué hace esta aplicación?

La aplicación combina dos partes principales: operaciones matemáticas básicas y un sistema de gestión de empleados. Al principio, pide que ingreses dos números y realices operaciones matemáticas simples (suma, resta, multiplicación, división) con validaciones para evitar errores. Luego, entra en el modo de recursos humanos donde puedes gestionar una lista de empleados.

### Funcionalidades principales

- **Operaciones matemáticas**: Ingresa dos números y elige una operación. El programa valida que sean números válidos y maneja divisiones por cero.
- **Gestión de empleados**:
  - Agregar nuevos empleados con nombre, años de experiencia, salario y departamento.
  - Filtrar empleados por años de experiencia mínima.
  - Ver la lista completa de empleados con sus niveles de experiencia y bonos calculados.
  - Calcular promedios de experiencia y salario.
- **Interfaz interactiva**: Un menú en la consola que te guía a través de las opciones usando prompts del navegador.
- **Validaciones**: El código incluye checks para asegurar que los datos ingresados sean correctos (nombres como texto, números donde corresponde, etc.).

## Conceptos de JavaScript que usa

Esta aplicación cubre varios temas fundamentales:

- **Variables y expresiones**: Uso de `let` y `const` para declarar variables.
- **Condicionales**: `if`, `else` y `switch` para tomar decisiones basadas en entradas del usuario.
- **Arreglos y ciclos**: Un arreglo de objetos empleados, recorrido con `for`, `forEach` y `map`.
- **Funciones**: Código modularizado en funciones reutilizables que reciben parámetros y retornan resultados.
- **Objetos**: Cada empleado es un objeto con propiedades (nombre, experiencia, etc.) y métodos (como calcular bono o determinar nivel de experiencia).

## Cómo usarla

1. Abre el archivo `index.html` en tu navegador (solo necesitas un navegador moderno, no se requiere nada más).
2. Abre la consola del navegador (F12 o clic derecho > Inspeccionar > Consola).
3. El código se ejecuta automáticamente y muestra mensajes de bienvenida.
4. Para usar el menú interactivo, escribe `iniciarAplicacion()` en la consola y presiona Enter.
5. Sigue las instrucciones en pantalla: selecciona opciones del 1 al 5 para agregar empleados, filtrar, mostrar listas, etc.

También puedes llamar funciones directamente en la consola, como:

- `agregarEmpleado('Juan Pérez', 3, 35000, 'IT')` para agregar un empleado.
- `filtrarPorExperiencia(5)` para ver empleados con 5+ años de experiencia.
- `mostrarEmpleados()` para listar todos.

## Estructura de archivos

- `index.html`: Página básica que carga el script.
- `assets/js/script.js`: Todo el código JavaScript de la aplicación.
- `README.md`: Este archivo que estás leyendo.
