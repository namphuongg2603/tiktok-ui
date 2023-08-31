<<<<<<< HEAD
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
=======
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
>>>>>>> b4a62aa0045395c325490b6ea2d67850cef9221c

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
<<<<<<< HEAD
=======
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
>>>>>>> b4a62aa0045395c325490b6ea2d67850cef9221c
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
