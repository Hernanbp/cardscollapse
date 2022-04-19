```css
nav {
display: flex;
align-items: center;
justify-content: center;
background: #000;
height: 50px;
color: white;

.container {
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1320px;
width: 100%;
padding: 0 1em;

    ul {
      display: flex;
      gap: 1em;
      list-style: none;
    }

}
}

/_
$container-max-widths: (
sm: 540px,
md: 720px,
lg: 960px,
xl: 1140px,
xxl: 1320px
);
_/

@media (min-width: 1025px) and (max-width: 1200px) {
nav {
.container {
max-width: 1140px;
}
}
}

@media (min-width: 769px) and (max-width: 1024px) {
nav {
.container {
justify-content: space-between;
max-width: 960px;
}
}
}

@media (min-width: 481px) and (max-width: 768px) {
nav {
.container {
justify-content: space-between;
max-width: 720px;
}
}
}

@media (min-width: 320px) and (max-width: 480px) {
nav {
.container {
justify-content: space-between;
max-width: 540px;
}
}
}
```
