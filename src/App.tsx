import Container from "@/components/atoms/Container/Container";
import ClasesCountSection from "@/components/organisms/ClasesCountSection/ClasesCountSection";
import NuestrosSection from "@/components/organisms/NuestrosSection/NuestrosSection";

function App() {
  return (
    <>
      <ClasesCountSection title="Clases realizadas!" subtitle="17,894,732" />
      <Container>
        <NuestrosSection />
      </Container>
    </>
  );
}

export default App;
