import Header from './Header';
import Sidebar from './Sidebar';

function defaultLayout({ chilrent }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{chilrent}</div>
            </div>
        </div>
    );
}
export default defaultLayout;
