import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ListProps,
  ImageField,
  CardContentInner,
  CardContentInnerClasses,
} from 'react-admin';
import { Box } from '@mui/material';

export const Appointment: React.FC<Omit<ListProps, 'children'>> = (props) => (
  <List {...props} sx={{ width: '65%', marginLeft: '15%' }}>
    <Box sx={{ boxShadow: '1px 1px 1px gray' }}>
      <CardContentInner>
        <CardContentInner classes={CardContentInnerClasses}>
          <Datagrid rowClick="show">
            <ImageField source="url" title="title" />
            <TextField source="albumId" />
            <TextField source="id" />
            <TextField source="title" />
          </Datagrid>
        </CardContentInner>
      </CardContentInner>
    </Box>
  </List>
);
