import React from 'react';
import Header from '../component/Header/Header';
import MainPart from '../component/Main/MainPart';
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

            </footer>
        </div>
    );
};

export default Home;