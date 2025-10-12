import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card user='Neha Sharma' age={75} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1059'/>

      <Card user='Aashu' age={89} img='https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'/>

      <Card user='Abhi' age={99} img='https://images.unsplash.com/photo-1751554933476-d029737d58b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'/>

      <Card user={[10,20,30,40,50]} img='https://images.unsplash.com/photo-1751704549146-6cae1f348143?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'/>

    </div>
  );
};

export default App;
