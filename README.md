# Мини-апп: демонстрация бага ❌

При переходе назад от третьей панели(Empty) к второй(Persik), не происходит восстановление скролла.  
Если в App.js переместить Empty после Persik. То поведение станет корректным.  

Скорее всего это связано с неправильным определением **isBackTransition** в компоненте [View](https://github.com/VKCOM/VKUI/blob/master/packages/vkui/src/components/View/View.tsx)
``` lang-js
const firstLayerId = (React.Children.toArray(children) as React.ReactElement[])
  .map((panel) => getNavId(panel.props, warn))
  .find((id) => id === prevActivePanel || id === activePanelProp);

const isBackTransition = firstLayerId === activePanelProp;
```

### Посмотреть мини апп можно [тут](https://vk.com/app51662644) или [тут](https://prod-app51662644-5ada9ddf8eb5.pages-ac.vk-apps.com/index.html)
