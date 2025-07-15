# 🧪 Ejercicio: Selector de emociones y colores

## 🎯 Consigna

Crear un componente en React que permita al usuario seleccionar una emoción desde un menú desplegable (`<select>`).  
Cada emoción debe estar asociada a un color específico. Al seleccionar una emoción, se debe mostrar:

- El nombre de la emoción.
- El color asociado (tanto como texto como visualmente en un recuadro).
- Un botón para confirmar su elección que muestre un mensaje en consola con la frase:  
  `"Hoy me siento [emoción] y eso se ve como [color]"`.

---

## 🧩 Requisitos técnicos

- Usar `useState` para almacenar la emoción seleccionada.
- Utilizar un objeto o array para mapear emociones a colores.
- Cambiar el estado con `onChange` al seleccionar una emoción.
- Mostrar un `div` con `backgroundColor` del color correspondiente.
- Capturar el evento de `submit` y evitar que recargue la página.

---

## 💡 Emociones sugeridas

| Emoción     | Color     |
|-------------|-----------|
| Feliz       | Amarillo  |
| Triste      | Azul      |
| Enojado     | Rojo      |
| Relajado    | Verde     |
| Sorprendido | Violeta   |