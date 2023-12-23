import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

		<ConfigProvider
      theme={{
        token: {
          fontFamily: "Roboto"
        }
      }}
    >
			<App />
    </ConfigProvider>
  </React.StrictMode>,
)
