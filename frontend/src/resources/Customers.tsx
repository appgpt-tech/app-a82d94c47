//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const CustomersTitle = () => {
  const record = useRecordContext();
  return <span>Customers {record ? `"${record.name}"` : ''}</span>;
};

export const CustomersList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="name" />
      <TextField source="phoneWhatsappNumber" />
      <TextField source="addressLine1" />
      <TextField source="addressLine2" />
      <TextField source="city" />
      <TextField source="comments" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const CustomersEdit = () => (
  <Edit title={<CustomersTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="phoneWhatsappNumber" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="addressLine1" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="addressLine2" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="city" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="comments" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const CustomersCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="phoneWhatsappNumber" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="addressLine1" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="addressLine2" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="city" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="comments" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
  ,
];
