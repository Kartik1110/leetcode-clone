import { FaRegFile } from "react-icons/fa";

function ProblemsListPage() {
  const problemsList = [
    { id: 1, title: "Remove Duplicates from Sorted Array", difficulty: "Easy" },
    { id: 2, title: "Two Sum", difficulty: "Easy" },
    { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: 4, title: "Merge k Sorted Lists", difficulty: "Hard" },
    { id: 5, title: "Remove Duplicates from Sorted Array", difficulty: "Easy" },
    { id: 6, title: "Two Sum", difficulty: "Easy" },
    { id: 7, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: 8, title: "Merge k Sorted Lists", difficulty: "Hard" },
  ];

  return (
    <div className="h-[92vh] w-screen bg-gradient-to-r from-black to-gray-800 text-white p-5 overflow-auto">
      <div className="flex justify-between items-center mx-[20vh] rounded-lg bg-gray-600 h-14 px-10">
        <div className="w-[5vh]">
          <h2>ID</h2>
        </div>
        <div className="w-[20vh]">
          <h2>Title</h2>
        </div>
        <div className="w-[20vh]">
          <p>Description</p>
        </div>
        <div className="w-[15vh]">
          <p>Level</p>
        </div>
      </div>

      {problemsList.map((problem) => (
        <div
          key={problem.id}
          className="flex justify-between items-center mx-[20vh] px-10 py-3 my-5 rounded-md hover:shadow-md hover:shadow-slate-500"
        >
          <div className="w-[5vh]">
            <p className="mt-2">{problem.id}.</p>
          </div>
          <div className="w-[20vh] hover:cursor-pointer hover:text-blue-500">
            <p className="mt-2">{problem.title}</p>
          </div>
          <div className=" px-2 w-[20vh] hover:cursor-pointer hover:text-blue-500">
            <p className="mt-2 flex items-center">
              <span className="pr-2">
                <FaRegFile />
              </span>
              Solution
            </p>
          </div>
          <div className="w-[15vh]">
            <p className="mt-2">{problem.difficulty}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProblemsListPage;
