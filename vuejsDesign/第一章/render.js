function Render(obj, root) {
  const el = document.createElement(obj.tag)
  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else {
    obj.children.forEach(child => {
      Render(child, el)
    });
  }
  root.appendChild(el)
}

const obj = {
  tag: 'div',
  children: [
    { tag: 'span', children: 'hello world render' }
  ]
}

Render(obj, document.body)