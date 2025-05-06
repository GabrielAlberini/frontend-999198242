## Selectores en CSS

### Selector de etiqueta
Hace referencia al nombre de la etiqueta html. Aplica a todos los iguales

- p en este caso selecciona a todos los elementos llamados así
```css
p {
  color: red;
}
```

### Selector especifico
Hace referencia a un elemento anidado dentro de otro

- en este caso estamos estilando a todos los párrafos dentro del header
```css
header p {
  color: red;
}
```

### Selector múltiple
Hace refencia a estilar varios elementos a la vez

- en este caso el header el main y el footer tienen un padding de 20px
```css
header, main, footer {
  padding: 20px;
}
```

### Selector por id
Hace referencia a seleccionar un elemento por su id

- en esta caso estamos separando por arriba la sección de contacto de otra
```css
#contact-section {
  margin-top: 20px;
}
```