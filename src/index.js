function component(){
    let element = document.createElement('div');
    //from lodash, imported in html
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());