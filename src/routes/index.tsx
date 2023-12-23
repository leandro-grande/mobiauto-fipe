import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarPrice } from '../pages/CarPrice';
import { FindCar } from '../pages/FindCar';

export function AppRoutes() {
	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={<FindCar />}  />
				<Route path='/car' element={<CarPrice />}  />
			</Routes>
		</BrowserRouter>
	);
}
