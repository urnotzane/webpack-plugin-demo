const iText = () => {
  const root = document.createElement('div');
  const h1 = document.createElement('h1');
  const button = document.createElement('button');
  const name = document.createElement('div');
  const h1Text = document.createTextNode('My webpack plugin!');
  const buttonText = document.createTextNode('Get my name!');
  h1.appendChild(h1Text);
  button.appendChild(buttonText);
  button.onclick = () => {
    import('./name')
      .then((res) => name.appendChild(res.nameNode))
  }

  root.appendChild(h1)
  root.appendChild(button)
  root.appendChild(name)
  return root;
}

document.body.appendChild(iText());