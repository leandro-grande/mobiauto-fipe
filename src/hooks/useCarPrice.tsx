/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useCallback, useContext, useState } from 'react';


interface AuthContextProviderProps {
	children: ReactNode;
}

interface Car {
	brand: string;
	model: string;
	year: string;
	price: string;
}

interface AuthContextData {
	carSetPrice: (brand: string, mode: string, year: string, price: string) => void;
	car: Car;
}

const CarPriceContext = createContext({} as AuthContextData);

export const CarPriceContextProvider = ({children}: AuthContextProviderProps) => {
	const [car, setCar] = useState({} as Car)

	const carSetPrice = useCallback((brand: string, model: string, year: string, price: string) => {
		setCar({
			brand,
			model,
			year,
			price
		});
	}, [])

	return (
		<CarPriceContext.Provider value={{
			carSetPrice,
			car
		}}>
			{children}
		</CarPriceContext.Provider>
	);
};


export function useCarPrice() {
	return useContext(CarPriceContext);
}
