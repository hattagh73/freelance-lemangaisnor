//* IMPORT: data
import data from '../config/data.json';

//* IMPORT: nextjs-features-types
import { NextPage } from 'next';
import Head from 'next/head';

//* IMPORT: types
import { iDataProps } from '../config/data-type';

//* IMPORT: components
import { SHero, SProduct, STestimony, SAbout, SLocation, SPromo } from '../components/components';

//* START: home-page
const Home:NextPage = () => {
    const { head, hero, about, product, testimony, location }:iDataProps = data;
    return (
        <>
            <Head>
                <title>{head.title}</title>
            </Head>
            <SHero hero={hero} />
            <SAbout about={about} />
            <SProduct product={product} />
            <STestimony testimony={testimony} />
            <SLocation location={location} />
            <SPromo />
        </>
    )
}

export default Home;
//* END: home-page