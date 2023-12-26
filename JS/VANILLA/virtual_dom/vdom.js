const createVNode = (tagName, props = {}, children = []) => {
    return {
        tagName,
        props,
        children,
    };
};

const createDOMNode = vNode => {
    if (typeof vNode === "string") {
        return document.createTextNode(vNode);
    }

    const { tagName, props, children } = vNode;
  
    // создаем DOM-узел
    const node = document.createElement(tagName);
  
    // Добавляем атрибуты к DOM-узлу
    // Object.entries(props).forEach(([key, value]) => {
    //   node.setAttribute(key, value);
    // });
    // 2 ДАЛЕЕ - вверху - первая версия
    debugger

    patchProps(node, {}, props);
  
    // Рекурсивно обрабатываем дочерные узлы
    children.forEach(child => {
      node.appendChild(createDOMNode(child));
    });
  
    return node;
};

const mount = (node, target) => {
    target.replaceWith(node);
    return node;
};

const createVApp = state => {
    const { count } = state;
    return createVNode("div", { class: "container", "data-count": count }, [
      createVNode("h1", {}, ["Hello, Virtual DOM"]),
      createVNode("div", {}, [`Count: ${count}`]),
      "Text node without tags",
      createVNode("img", { src: "https://i.ibb.co/M6LdN5m/2.png", width: 200 })
    ]);
  };

// 2 ДАЛЕЕ
// 2 ДАЛЕЕ
// 2 ДАЛЕЕ

function patchNode(node, vNode, nextVNode){
    // Удаляем ноду, если значение nextVNode не задано
    if (nextVNode === undefined) {
      node.remove();
      return;
    }
  
    if (typeof vNode === "string" || typeof nextVNode === "string") {
      // Заменяем ноду на новую, если как минимум одно из значений равно строке
      // и эти значения не равны друг другу
      if (vNode !== nextVNode) {
        const nextNode = createDOMNode(nextVNode);
        node.replaceWith(nextNode);
        return nextNode;
      }
  
      // Если два значения - это строки и они равны,
      // просто возвращаем текущую ноду
      return node;
    }
  
    // Заменяем ноду на новую, если теги не равны
    if (vNode.tagName !== nextVNode.tagName) {
      const nextNode = createDOMNode(nextVNode);
      node.replaceWith(nextNode);
      return nextNode;
    }
  
    // Патчим свойства (реализация будет далее)
    patchProps(node, vNode.props, nextVNode.props);
  
    // Патчим детей (реализация будет далее)
    patchChildren(node, vNode.children, nextVNode.children);
  
    // Возвращаем обновленный DOM-элемент
    return node;
  };



  function patchProp(node, key, value, nextValue){
    // Если новое значение не задано, то удаляем атрибут
    if (nextValue == null || nextValue === false) {
      node.removeAttribute(key);
      return;
    }
  
    // Устанавливаем новое значение атрибута
    node.setAttribute(key, nextValue);
  };
  
  function patchProps(node, props, nextProps){
    // Объект с общими свойствами
    const mergedProps = { ...props, ...nextProps };
  
    Object.keys(mergedProps).forEach(key => {
      // Если значение не изменилось, то ничего не обновляем
      if (props[key] !== nextProps[key]) {
        patchProp(node, key, props[key], nextProps[key]);
      }
    });
  };


  const patchChildren = (parent, vChildren, nextVChildren) => {
    parent.childNodes.forEach((childNode, i) => {
      patchNode(childNode, vChildren[i], nextVChildren[i]);
    });
  
    nextVChildren.slice(vChildren.length).forEach(vChild => {
      parent.appendChild(createDOMNode(vChild));
    });
  };