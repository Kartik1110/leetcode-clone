import { useQuery } from '@tanstack/react-query';
import { FaRegFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { problemsListService } from '../services';
import { getColorClass } from '../utils/helper.utils';
import CustomLoader from '../components/common/CustomLoader';

function ProblemsListPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['problemList'],
    queryFn: problemsListService,
  });

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <div className="h-[92vh] w-screen bg-gradient-to-r from-black to-gray-800 text-white p-8">
          <h2 className="text-2xl text-center text-blue-500 font-semibold mb-4">Top 150</h2>
          <div className="overflow-x-auto  rounded-lg">
            <table className="min-w-full bg-gray-800 border border-gray-700">
              <thead className="sticky top-0 h-20 bg-gray-800">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-700 w-1/3">Title</th>
                  <th className="py-2 px-4 border-b border-gray-700 w-1/3">Solution</th>
                  <th className="py-2 px-4 border-b border-gray-700 w-1/3">Difficulty</th>
                </tr>
              </thead>
              <tbody className="overflow-hidden">
                {data?.data.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
                    <td className="py-2 px-4 border-b border-gray-700 w-1/3  text-center">
                      <Link to={`/problem/${item.id}`} className="hover:text-blue-500">
                        {item.title}
                      </Link>
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700 w-1/3 text-center">
                      <Link to={`/problem/${item.id}`} className="hover:text-blue-500">
                        <div className="mt-2 flex justify-center items-center">
                          <span className="pr-2">
                            <FaRegFile />
                          </span>
                          Solution
                        </div>
                      </Link>
                    </td>
                    <td
                      className={`py-2 px-4 border-b border-gray-700 w-1/3 text-center ${getColorClass(
                        item.difficulty,
                      )}`}
                    >
                      {item.difficulty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ProblemsListPage;
