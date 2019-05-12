import React, { ChangeEvent, Component } from 'react';
import './style.css';

export interface IProps {
    search(term: string): void;
}

interface ISearchEvents {
    onSearch(term: string): void;
}

export class Header extends Component<IProps> implements ISearchEvents {
    public onSearch(term: string): void {
        this.props.search(term);
    }

    public render(): JSX.Element {
        return <div className='row header'>
            Search: <input type='text'
                           onChange={(e: ChangeEvent<HTMLInputElement>) => this.onSearch.call(this, e.target.value)}/>
        </div>;
    }
}
