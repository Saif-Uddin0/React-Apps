import React from 'react';
import Header from '../component/Header/Header';
import Main from '../component/Main/Main';

const Home = () => {
    return (
        <div>
            {/* this is the header section */}
            <header>
                <Header></Header>
            </header>


            {/* this is the main section */}
            <main>
                <Main></Main>
            </main>

            {/* this is the footer section */}
            <footer>

            </footer>
        </div>
    );
};

export default Home;