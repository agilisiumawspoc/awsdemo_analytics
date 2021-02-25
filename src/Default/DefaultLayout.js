import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import Main from '../Views/Main';

const DefaultLayout = () => {
    return(
        <div>
            <DefaultHeader />
            <Main />
            <DefaultFooter />
        </div>
    );
}

export default DefaultLayout;