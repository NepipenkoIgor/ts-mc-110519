import { IListItem } from './mock';

export function generateMenu(list: IListItem[]): string {
    let output: string = `<ul>`;
    for (const item of list) {
        output += `<li><a class=${Array.isArray(item.items) ? 'title' : ''}>${item.title}</a>`;
        if (Array.isArray(item.items)) {
            output += generateMenu(item.items);
        }
        output += '</li>';
    }
    output += '</ul>';
    return output;
}
