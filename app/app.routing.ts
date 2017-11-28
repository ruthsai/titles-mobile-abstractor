//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlc0NvbnRlbnQiOlsiIl19

import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
// import { FooterComponent } from "./pages/footer/footer.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  // { path: "footer", component: ListComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  // FooterComponent
];