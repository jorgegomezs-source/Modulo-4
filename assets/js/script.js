// Primera parte: mostrar un mensaje de bienvenida al usuario en la consola del navegador
/* 
  - prompt para pedirle al usuario un dato o mensaje
  - alert: para mostrar un mensaje informativo. OJO! detienen la ejecución del programa
*/
// 1. Mensaje en consola
console.log(
  '%c<<<< Bienvenido a la aplicación en  consola :) >>>>',
'color: darkblue; background-color: white; padding: 7px; border-radius: 7px',
);

// 2. Usar prompt() para recibir datos del usuario.
const nombreUsuario = prompt('¿Cuál es tu nombre?');

// 3. Mostrar un mensaje de bienvenida personalizado usando alert()
alert(`¡Hola, ${nombreUsuario}! Bienvenido a nuestra aplicación.`);

// Segunda parte: Variables, expresiones y sentencias condicionales

/* 1. Definir variables utilizando let y const.
Pedir al usuario que ingrese dos números y almacenarlos en
variables, los datos son ingresados mediante prompt. Utiliza else, if, switch para validar que se use número y aplicar operaciones*/

// 1. Funciones individuales para cada operación (Requisito Técnico)
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: No se puede dividir por cero";

// 2. Captura de datos con validación
let n1 = parseFloat(prompt("Ingresa el primer número:"));
let n2 = parseFloat(prompt("Ingresa el segundo número:"));

if (isNaN(n1) || isNaN(n2)) {
    alert("❌ Error: Debes ingresar números válidos para operar.");
} else {
    // 3. Selección de operación con normalización agresiva
    const seleccion = prompt("¿Qué operación deseas? (suma, resta, multi, div)")
                        .toLowerCase().trim();

    let resultado;

    // 4. Switch que llama a las funciones individuales (Modularización)
    switch (seleccion) {
        case 'suma':
        case '+':
            resultado = sumar(n1, n2);
            break;
        case 'resta':
        case '-':
            resultado = restar(n1, n2);
            break;
        case 'multi':
        case 'multiplicar':
        case '*':
            resultado = multiplicar(n1, n2);
            break;
        case 'div':
        case 'dividir':
        case '/':
            resultado = dividir(n1, n2);
            break;
        default:
            resultado = "Operación no reconocida";
    }

    // 5. Mostrar el resultado final
    alert(`El resultado de la operación (${seleccion}) es: ${resultado}`);
    console.log(`Operación realizada: ${seleccion}. Resultado: ${resultado}`);
}
// Fin de código para la segunda parte.//

// 3. Arreglos y ciclos //


//  ARREGLOS Y CICLOS EN JAVASCRIPT 
// 1. CREAR ARREGLOS CON LISTAS DE ELEMENTOS
// Función para recorrer un arreglo y devolver valores filtrados //
// Se utiliza sirectamente en la consola del navegador para probar su funcionamiento mediante la función filtrar() y pasando como argumento el número de años de experiencia que se desea filtrar. Por ejemplo: filtrar(5) para obtener candidatos con 5 años o más de experiencia.

// 1. "Base de Datos" local
// 3. Arreglos y ciclos //

// ARREGLOS Y CICLOS EN JAVASCRIPT 
// 1. CREAR ARREGLOS CON LISTAS DE ELEMENTOS
// Función para recorrer un arreglo y devolver valores filtrados //

// 1. "Base de Datos" local - Arreglo de objetos empleados
const empleados = [
    { nombre: "Ana García", experiencia: 2, salario: 30000, departamento: "Ventas" },
    { nombre: "Luis Pérez", experiencia: 8, salario: 50000, departamento: "IT" },
    { nombre: "Marta Ruiz", experiencia: 12, salario: 70000, departamento: "RRHH" },
    { nombre: "José Torres", experiencia: 5, salario: 40000, departamento: "Marketing" },
    { nombre: "Elena Sanz", experiencia: 1, salario: 25000, departamento: "Ventas" },
    { nombre: "Cristian Mo", experiencia: 15, salario: 80000, departamento: "IT" }
];

// Agregar métodos a los objetos empleados usando prototype o directamente
empleados.forEach(emp => {
    emp.getNivelExperiencia = function() {
        if (this.experiencia < 2) return "Junior";
        if (this.experiencia < 5) return "Mid";
        if (this.experiencia < 10) return "Senior";
        return "Expert";
    };
    emp.calcularBono = function() {
        return this.salario * 0.1; // 10% bono
    };
});

// --- FUNCIONES DE OPERACIÓN (Matemáticas y Lógica) ---

/**
 * Calcula el promedio de experiencia del arreglo actual.
 * @returns {number} Promedio redondeado a 2 decimales.
 */
function calcularPromedioExperiencia() {
    if (empleados.length === 0) return 0;
    
    let sumaTotal = 0;
    for (let i = 0; i < empleados.length; i++) {
        sumaTotal += empleados[i].experiencia;
    }
    return (sumaTotal / empleados.length).toFixed(2);
}

/**
 * Calcula el salario promedio.
 * @returns {number} Salario promedio.
 */
function calcularSalarioPromedio() {
    if (empleados.length === 0) return 0;
    let suma = empleados.reduce((acc, emp) => acc + emp.salario, 0);
    return (suma / empleados.length).toFixed(2);
}

/**
 * Valida si los datos para un nuevo empleado son correctos.
 */
function validarDatos(nombre, experiencia, salario, departamento) {
    return (typeof nombre === 'string' && nombre.length > 2 && 
            !isNaN(experiencia) && experiencia >= 0 &&
            !isNaN(salario) && salario > 0 &&
            typeof departamento === 'string' && departamento.length > 0);
}

// --- FUNCIONES DE ACCIÓN ---

/**
 * Agrega un nuevo empleado al arreglo.
 */
function agregarEmpleado(nombre, experiencia, salario, departamento) {
    if (validarDatos(nombre, experiencia, salario, departamento)) {
        const nuevo = { nombre, experiencia: Number(experiencia), salario: Number(salario), departamento };
        // Agregar métodos
        nuevo.getNivelExperiencia = function() {
            if (this.experiencia < 2) return "Junior";
            if (this.experiencia < 5) return "Mid";
            if (this.experiencia < 10) return "Senior";
            return "Expert";
        };
        nuevo.calcularBono = function() {
            return this.salario * 0.1;
        };
        empleados.push(nuevo);
        
        console.log(`✅ ${nombre} ha sido registrado con éxito.`);
        console.log(`📊 El promedio de experiencia actual es de: ${calcularPromedioExperiencia()} años.`);
        console.log(`💰 El salario promedio actual es de: $${calcularSalarioPromedio()}.`);
    } else {
        console.error("❌ Error: Datos inválidos.");
    }
}

/**
 * Filtra empleados según experiencia usando forEach y condición.
 */
function filtrarPorExperiencia(minExperiencia) {
    let resultados = [];
    empleados.forEach(emp => {
        if (emp.experiencia >= minExperiencia) {
            resultados.push(emp);
        }
    });

    if (resultados.length > 0) {
        console.log(`--- Empleados con ${minExperiencia} años o más ---`);
        resultados.forEach(emp => {
            console.log(`${emp.nombre} - ${emp.getNivelExperiencia()} - $${emp.salario}`);
        });
    } else {
        console.warn("No se encontraron coincidencias.");
    }
}

/**
 * Muestra todos los empleados usando map.
 */
function mostrarEmpleados() {
    console.log("--- Lista de Empleados ---");
    empleados.map(emp => `${emp.nombre} (${emp.departamento}) - Nivel: ${emp.getNivelExperiencia()} - Bono: $${emp.calcularBono()}`)
             .forEach(line => console.log(line));
}

// --- MENÚ PRINCIPAL CON WHILE LOOP ---
function iniciarAplicacion() {
    let continuar = true;
    while (continuar) {
        const opcion = prompt("Selecciona una opción:\n1. Agregar empleado\n2. Filtrar por experiencia\n3. Mostrar todos los empleados\n4. Calcular promedios\n5. Salir").trim();
        
        switch (opcion) {
            case '1':
                const nombre = prompt("Nombre:");
                const exp = parseInt(prompt("Años de experiencia:"));
                const sal = parseFloat(prompt("Salario:"));
                const dept = prompt("Departamento (IT, RRHH, Marketing, Ventas):");
                agregarEmpleado(nombre, exp, sal, dept);
                break;
            case '2':
                const minExp = parseInt(prompt("Mínima experiencia:"));
                filtrarPorExperiencia(minExp);
                break;
            case '3':
                mostrarEmpleados();
                break;
            case '4':
                console.log(`Promedio experiencia: ${calcularPromedioExperiencia()} años`);
                console.log(`Promedio salario: $${calcularSalarioPromedio()}`);
                break;
            case '5':
                continuar = false;
                console.log("👋 ¡Hasta luego!");
                break;
            default:
                alert("Opción no válida.");
        }
    }
}

// Iniciar la aplicación
console.log("🚀 Sistema de Recursos Humanos Activo");
console.info("Comandos disponibles o usa el menú:");
console.log("- iniciarAplicacion();  <-- Para iniciar el menú interactivo.");
console.log("- agregarEmpleado('Nombre', años, salario, 'Dept');");
console.log("- filtrarPorExperiencia(años);");
console.log("- mostrarEmpleados();");

// Fin de código para las partes 3, 4, 5.//


