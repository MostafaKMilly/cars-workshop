import { QueryClient, QueryClientProvider } from "react-query";
import { I18nextProvider } from "react-i18next";
import { LocalizationProvider } from "./Localization";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import i18n from "./i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
