import { ButtonComponent } from "@repo/ui";

const App: React.FC = () => {
  console.log(import.meta);
  const isDev = import.meta.env.MODE;
  return (
    <>
      {isDev}
      <ButtonComponent></ButtonComponent>
    </>
  );
};

export default App;
