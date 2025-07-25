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
const ReviewsTitle = () => {
  const record = useRecordContext();
  return <span>Reviews {record ? `"${record.id}"` : ''}</span>;
};

export const ReviewsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="product" reference="Products" />
      <ReferenceField source="customer" reference="Customers" />
      <NumberField source="rating" />
      <TextField source="reviewText" />
      <DateField source="date" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const ReviewsEdit = () => (
  <Edit title={<ReviewsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="product" reference="Products" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="customer" reference="Customers" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="rating" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="reviewText" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="date" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const ReviewsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="product" reference="Products" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="customer" reference="Customers" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="rating" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="reviewText" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="date" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="product"
    label="product"
    reference="Products"
    alwaysOn
  />,
  <ReferenceInput
    source="customer"
    label="customer"
    reference="Customers"
    alwaysOn
  />,
  ,
  ,
  ,
];
