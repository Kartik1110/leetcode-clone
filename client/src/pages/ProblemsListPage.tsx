import { useQuery } from '@tanstack/react-query';
// import { FaRegFile } from 'react-icons/fa';
import { problemsListService } from '../services';
import CustomLoader from '../components/common/CustomLoader';
import CustomDataGrid from '../components/common/CustomDataGrid';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { ProblemsTableDataInterface } from '../interfaces';
import { Link } from 'react-router-dom';

function ProblemsListPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['problemList'],
    queryFn: problemsListService,
  });

  const formattedData = useMemo(() => {
    const finalData: ProblemsTableDataInterface = { columns: [], rows: [] };

    if (data?.data && data.data.length > 0) {
      const formattedColumns = Object.keys(data.data[0])
        .filter((field) => field !== 'id')
        .map((item) => ({
          field: item,
          headerName: item.toUpperCase(),
          width: item !== 'difficulty' ? 400 : 150,
          editable: true,
          renderCell: (params: GridRenderCellParams) => {
            if (params.colDef.field !== 'difficulty') {
              return <Link className='hover:text-blue-500' to={`/problem/${params.row.id}`}>{params.value}</Link>;
            }
            if (params.value === 'EASY') {
              return <span className="text-green-500">{params.value}</span>;
            }
            if (params.value === 'MEDIUM') {
              return <span className="text-yellow-500">{params.value}</span>;
            }
            if (params.value === 'HARD') {
              return <span className="text-red-500">{params.value}</span>;
            }
          },
        }));

      finalData.columns.push(...formattedColumns);
      finalData.rows.push(...data.data);
    }

    return finalData;
  }, [data?.data]);

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <div className="h-[92vh] w-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 text-white p-8">
          <h2 className="text-2xl text-center text-blue-500 font-semibold mb-4">Top 150</h2>
          <CustomDataGrid
            rows={formattedData.rows}
            columns={formattedData.columns}
            // rowCount={totalRowCount}
            // loading={isFetching}
            // pageSizeOptions={[5]}
            // paginationModel={paginationModel}
            // paginationMode="server"
            // onPaginationModelChange={(newModel: PageInfoInterface) => {
            //   handlePageChange(newModel.page);
            //   getTicketsService(newModel);
            // }}
          />
        </div>
      )}
    </>
  );
}

export default ProblemsListPage;
