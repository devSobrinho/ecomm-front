import { FormProduct } from 'src/layout/Form/FormProduct';
import { Main } from 'src/layout/Main';
import { DataTable } from 'primereact/datatable';

import * as Styled from './styles';
import { useState } from 'react';
import { Column } from 'primereact/column';
// import { CustomerService } from "./CustomerService";

const AdminTemplate = () => {
  const [customers2, setCustomers2] = useState(null);

  // useEffect(() => {

  //   customerService.getCustomersLarge().then((data) => {
  //     setCustomers2(getCustomers(data));
  //     setLoading2(false);
  //   });

  // }, []);

  return (
    <>
      <Main>
        <FormProduct />
        {/* <DataTable
          value={customers2}
          paginator
          className="p-datatable-customers"
          rows={10}
          dataKey="id"
          filters={filters2}
          filterDisplay="row"
          loading={loading2}
          responsiveLayout="scroll"
          globalFilterFields={[
            'name',
            'country.name',
            'representative.name',
            'status',
          ]}
          header={header2}
          emptyMessage="No customers found."
        >
          <Column
            field="name"
            header="Name"
            filter
            filterPlaceholder="Search by name"
            style={{ minWidth: '12rem' }}
          />
        </DataTable> */}
      </Main>
    </>
  );
};

export default AdminTemplate;
