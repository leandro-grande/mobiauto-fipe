import { } from "antd";
import { CarPriceContextProvider } from "./hooks/useCarPrice";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/styles";

function App() {
  return (
		<CarPriceContextProvider>
			<AppRoutes />
			<GlobalStyles />
		</CarPriceContextProvider>
  )
}

export default App;
