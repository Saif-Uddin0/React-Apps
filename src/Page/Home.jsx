import React from 'react';
import Header from '../component/Header/Header';
import MainPart from '../component/Main/MainPart';
import Footer from '../component/Footer';
 '../component/Main/MainPart';

const Home = () => {
    return (
        <div>
            {/* this is the header section */}
            <header>
                <Header></Header>
            </header>


            {/* this is the main section */}
            <main>
                <MainPart></MainPart>
            </main>

            {/* this is the footer section */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;