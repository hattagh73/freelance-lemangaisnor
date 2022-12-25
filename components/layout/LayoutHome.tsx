//* IMPORT: types
import { iFooter } from '../../config/data-type';

//* IMPORT: react-ts
import { ReactNode } from 'react';

//* IMPORT: components
import { Header, Footer } from '../components';

//* DECLARE: type
type ChildrenProps = {
    children?: ReactNode;
    footer: iFooter;
}

//* START: layout
const LayoutHome = ({ children, footer }: ChildrenProps) => {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            <Footer
                footer={footer}
            />
        </>
    )
}
export default LayoutHome;
//* END: layout