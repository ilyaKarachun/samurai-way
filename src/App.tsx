import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://skidka02.ru/800/600/https/i.etsystatic.com/10919371/r/il/b56d68/1896464555/il_fullxfull.1896464555_qh40.jpg"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className="content">
                <div><img
                    src="https://img.desktopwallpapers.ru/nature/pics/wide/1920x1200/e862cdd94c26e6601ea2380ef07e44f7.jpg"/>
                </div>
                <div><img
                    src="https://avatars.mds.yandex.net/i?id=36fc156aac73eed5b13a0e4f881212ac-6191070-images-thumbs&n=13"/>
                </div>
                <div>avatar+description</div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
