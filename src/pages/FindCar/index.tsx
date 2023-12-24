import { Button, Select } from "antd";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";

import { useCarPrice } from "../../hooks/useCarPrice";
import { Container, Form, Main } from './styles';

interface CarType {
	codigo: string;
	nome: string;
}

export function FindCar() {
	const [carsBrandList, setCarBrandList] = useState<CarType[]>([]);
	const [carsModelList, setCarsModelList] = useState<CarType[]>([]);
	const [carsYearList, setCarsYearsList] = useState<CarType[]>([]);
	const [carBrand, setCarBrand] = useState('');
	const [carModel, setCarModel] = useState<CarType | null>(null);
	const [carYear, setCarYear] = useState<string | null>('');
	const [carYearIsVisible, setCarYearIsVisible] = useState(false);

	const { carSetPrice } = useCarPrice();

	const navigate = useNavigate();


	async function handleChangeBrandCar(value: string) {
		setCarModel(null);
		setCarYear(null);
		setCarsYearsList([]);

		try {
			const { data } = await api.get(`carros/marcas/${value}/modelos`);

			setCarsModelList(data.modelos);
			setCarBrand(value);
		} catch (error) {
			console.log(error)
		}
	}

	async function handleChangeCarModel(value: string, option: { value: string; label: string}) {
		setCarYear(null);

		try {
			const { data } = await api.get(`carros/marcas/${carBrand}/modelos/${value}/anos`);

			setCarsYearsList(data);
			setCarYearIsVisible(true);
			setCarModel({
				codigo: option.value,
				nome: option.label
			});
		} catch (error) {
			console.log(error);
		}
	}

	async function handleChangeCarYear(value: string) {
		setCarYear(value)
	}

	async function handleCheckPrice(event: FormEvent) {
		event.preventDefault();

		if (!carYear) {
			return
		}

		try {
			const { data } = await api.get(`carros/marcas/${carBrand}/modelos/${carModel?.codigo}/anos/${carYear}`);

			carSetPrice(data.Marca, data.Modelo, data.AnoModelo, data.Valor);

			navigate('/car')
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		async function fetchCars() {
			const { data } = await api.get('/carros/marcas')

			setCarBrandList(data);
		}

		setCarYear(null);
		fetchCars();
	}, []);

	const carBrandsOptions = carsBrandList.map(carBrand => ({
		value: carBrand.codigo,
		label: carBrand.nome
	}));

	const carModelsOptions = carsModelList.map(model => ({
		value: model.codigo,
		label: model.nome
	}));

	const carYearsOptions = carsYearList.map(year => ({
		value: year.codigo,
		label: year.nome.split(' ')[0]
	}));

	const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

	return (
		<Container>
			<Main>
				<h1>Tabela Fipe</h1>
				<span>Consulte o valor de um veículo de forma gratuita</span>

				<Form onSubmit={handleCheckPrice}>
					<Select
						showSearch
						placeholder="Marca"
						style={{ width: '100%'}}
						options={carBrandsOptions}
						filterOption={filterOption}
						onChange={handleChangeBrandCar}
					/>

					<Select
						showSearch
						placeholder="Modelo"
						style={{ width: '100%'}}
						options={carModelsOptions}
						filterOption={filterOption}
						onSelect={handleChangeCarModel}
						value={carModel?.nome}
					/>

					{ (carsYearList.length > 0 || carYearIsVisible)  &&
						<Select
							placeholder="ano"
							style={{ width: '100%'}}
							options={carYearsOptions}
							onChange={handleChangeCarYear}
							value={carYear}
						/>
					}

					<Button
						htmlType="submit"
						disabled={carYear === null}
					>
							Consultar preço
					</Button>
				</Form>
			</Main>
		</Container>
	)
}
