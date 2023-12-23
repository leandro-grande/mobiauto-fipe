import { useCarPrice } from "../../hooks/useCarPrice";

import { Back, Container, Info, Price, Section } from "./styles";

export function CarPrice() {
	const { car } = useCarPrice();

	return (
		<Container>
			<Section>
				<Back to='/'>
					nova pesquisa
				</Back>

				<h1>{`Tabela Fipe: Preço ${car.brand} ${car.model.split(" ")[0]} ${car.year}`}</h1>

				<Price>
					<strong>{car.price}</strong>
				</Price>

				<Info>Esse é o preço de compra do veículo</Info>
			</Section>
		</Container>
	)

}
