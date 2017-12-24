import * as React from 'react';
import AssetsPage from './AssetsPage';
import BillsPage from './BillsPage';
import ConfigPage from './ConfigPage';
import MinePage from './MinePage';

interface IPageProps {
    name: string;

}

class Page extends React.Component<IPageProps, object> {
    public constructor (props: IPageProps) {
        super(props);
    }

    public render() {
        let currentPage = null;
        switch (this.props.name) {
            case 'Assets':
                currentPage = <AssetsPage name={this.props.name} />;
                break;
            case 'Bills':
                currentPage = <BillsPage name={this.props.name} />;
                break;
            case 'Config':
                currentPage = <ConfigPage name={this.props.name} />;
                break;
            case 'Mine':
                currentPage = <MinePage name={this.props.name} />;
                break;
            default:
                currentPage = <AssetsPage name={this.props.name} />;
                break;
        }
        return currentPage;
    }
}

export default Page;