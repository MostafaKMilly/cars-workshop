import { Typography, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "./theme/theme";
import { I18nextProvider, useTranslation } from "react-i18next";
import { LocalizationProvider } from "./components";
import "./i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const { i18n } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <LocalizationProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme(i18n.dir())}></ThemeProvider>
        </QueryClientProvider>
      </LocalizationProvider>
    </I18nextProvider>
  );
}

export default App;
