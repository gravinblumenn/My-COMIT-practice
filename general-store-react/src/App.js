import React from 'react';

import Pages from './pages';
import UserProvider from './components/UserProvider';

export default function App() {
    return (
        <div>
            <UserProvider>
                <Pages />
            </UserProvider>
        </div>
    );
}
