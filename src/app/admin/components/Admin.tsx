"use client"; // remove this line if you choose Pages Router
import { authProvider } from "@/src/provider/admin-auth-provider";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";

const AdminApp = () => (
  <Admin authProvider={authProvider}>
  </Admin>
);

export default AdminApp;
