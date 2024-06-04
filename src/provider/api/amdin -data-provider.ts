import { DataProvider } from 'react-admin';
import { BaseApi } from './baseApi';

const dataProvider: DataProvider = {
  // get a list of records based on sort, filter, and pagination
  getList: async (resource, params) => {
    const baseApi = new BaseApi(resource);
    const allResource = await baseApi.all();
    return {
      data: allResource.map((data: any) => data.id),
      total: allResource.length,
    };
  },
  // get a single record by id
  getOne: async (resource, params) => {
    const baseApi = new BaseApi(resource);
    const oneResource: any = await baseApi.get(params.id);
    return {
        data: oneResource
    }
  },
  // get a list of records based on an array of ids
  getMany: (resource, params) => Promise.resolve({ data: [] }),
  // get the records referenced to another record, e.g. comments for a post
  getManyReference: (resource, params) => Promise.resolve({ data: [] }),
  // create a record
  create: async (resource, params) => {
    const baseApi = new BaseApi(resource);
    const createResource: any = await baseApi.create(params.data);
    return {
      data: createResource,
    };
  },
  // update a record based on a patch
  update: (resource, params) => Promise,
  // update a list of records based on an array of ids and a common patch
  updateMany: (resource, params) => Promise,
  // delete a record by id
  delete: (resource, params) => Promise,
  // delete a list of records based on an array of ids
  deleteMany: (resource, params) => Promise,
};

