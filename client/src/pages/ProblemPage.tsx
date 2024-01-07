import { useParams } from "react-router-dom";

function ProblemPage() {
  const { id } = useParams();
  console.log("🚀 ~ file: ProblemPage.tsx:5 ~ ProblemPage ~ id:", id);

  return (
    <div className="h-[92vh] w-screen bg-gradient-to-r from-black to-gray-800 text-white p-8 overflow-auto">
      <h1>Problem: {id}</h1>
    </div>
  );
}

export default ProblemPage;
