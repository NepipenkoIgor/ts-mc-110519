export interface IListItem {
   readonly title: string;
   readonly items?: IListItem[];
}

export const menuList: IListItem[] = [
    {
        title: 'JS',
        items: [
            {
                title: 'frontend',
                items: [
                    {
                        title: 'react'
                    },
                    {
                        title: 'vue'
                    },
                    {
                        title: 'angular',
                        items: [{
                            title: 'ngx-mask'
                        }]
                    },
                ]
            }
        ]
    },
    {
        title: 'JAVA',
        items: [
            {
                title: 'spring',
            }
        ]
    }
];

