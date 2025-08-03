# 🔐 Reto 1: Control de Acceso  

## 📝 Descripción  

Este reto consiste en desarrollar un sistema de validación de ingreso utilizando JavaScript. El programa debe:  
- **Filtrar por edad**: Solo permitir el acceso a mayores de 18 años.  
- **Validar invitación**: Si el usuario cumple con la edad requerida, verificar si cuenta con una invitación.  
- **Mensajes claros**: Mostrar alertas indicando si el acceso es concedido o denegado.  

## 📊 Diagrama de Flujo  

![Diagrama de flujo del Control de Acceso](./assets\diagrama-de-flujo-reto-1.svg) 
*(Imagen que ilustra la lógica condicional del programa: flujo if/else para edad e invitación.)*  

## 🛠️ Requisitos Técnicos  

- Usar `prompt` para solicitar nombre y edad.  
- Convertir la edad a tipo numérico con `parseInt`.  
- Emplear `confirm` para validar la invitación (solo si la edad ≥ 18).  
- Mostrar resultados con `alert`.  
- Incluir verificaciones de tipos de datos (`typeof`) para depuración.  


## 📌 Ejemplos de Uso  

// Caso 1: Edad < 18  
Entrada: Nombre: "Ana", Edad: "16"  
Salida: "No puedes ingresar."  

// Caso 2: Edad ≥ 18 con invitación  
Entrada: Nombre: "Carlos", Edad: "25", Invitación: true  
Salida: "Puedes ingresar."  

// Caso 3: Edad ≥ 18 sin invitación  
Entrada: Nombre: "Luisa", Edad: "20", Invitación: false  
Salida: "No puedes ingresar."  