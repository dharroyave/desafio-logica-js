# 💰 Reto 2: Cajero Automático

## 🧾 Descripción

Este reto consiste en desarrollar una simulación básica de un cajero automático utilizando JavaScript. El programa debe:

- **Validar PIN**: Permitir el acceso solo si el usuario ingresa el PIN correcto (por ejemplo, `1234`).
- **Mostrar saldo disponible**: Iniciar con un saldo de `$100.000` y mostrarlo cuando el usuario lo solicite.
- **Permitir retiros múltiples**: El usuario puede retirar varias veces durante la sesión.
- **Evitar sobregiros**: No permitir retiros por un valor mayor al saldo disponible.
- **Opción de salida**: El usuario puede salir del sistema cuando lo desee.

## 🧩 Diagrama de Flujo

![Diagrama de flujo del Cajero Automático](./assets/diagrama-de-flujo-reto-2.svg)  

## ✅ Requisitos Técnicos

- Usar `prompt` para solicitar el PIN y el monto a retirar.
- Validar el PIN ingresado con comparación `===`.
- Mostrar saldo actual con `alert`.
- Validar que el monto a retirar no exceda el saldo disponible.
- Permitir múltiples operaciones dentro de un `while` hasta que el usuario decida salir.
- Usar `confirm` para continuar o salir del cajero.
- Controlar errores y condiciones con `if`, `else if`, y `else`.

## 💡 Ejemplos de Uso

### 🔐 Caso 1: PIN incorrecto
### 🏦 Caso 2: Retiro exitoso
### ❌ Caso 3: Retiro mayor al saldo
### 🚪 Caso 4: Salida del sistema
