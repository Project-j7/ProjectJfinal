import Sidebar from './ui/components/sidebar/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/sidebar' element={<Sidebar />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}