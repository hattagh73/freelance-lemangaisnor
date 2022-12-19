//* IMPORT: react-ts
import { ReactNode } from 'react';

//* IMPORT: components
import { Header, Footer } from '../components';

//* DECLARE: type
type ChildrenProps = {
    children?: ReactNode
}

//* START: layout
const LayoutHome = ({ children }: ChildrenProps) => {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}
export default LayoutHome;
//* END: layout