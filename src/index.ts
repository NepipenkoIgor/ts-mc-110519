import { generateMenu } from './menu';
import { menuList } from './mock';
import './styles.css';

const el: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
el.innerHTML = generateMenu(menuList);

el.onclick = (event: MouseEvent) => {
    const element: HTMLAnchorElement = event.target as HTMLAnchorElement;
    const {classList: cl}: { classList: DOMTokenList } = element;
    if (!cl.contains('title')) {
        return;
    }
    const parenLI: HTMLLIElement = element.parentNode as HTMLLIElement;
    parenLI.classList.toggle('menu-open');
}
