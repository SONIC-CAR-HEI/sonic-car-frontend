import { apiClient } from '@/src/provider/client';

type UsableId = string | number;

export class BaseApi<
  Id extends UsableId,
  Data,
  Create = unknown,
  Update = Partial<Create>,
> {
  constructor(protected readonly resource_name: string) {
    this.resource_name = '/' + resource_name;
  }

  async create(data: Create): Promise<Data> {
    return (await apiClient.post(this.resource_name, data)).data;
  }

  async all(): Promise<Data[]> {
    return (await apiClient.get(this.resource_name)).data;
  }

  async get(id: Id): Promise<Data> {
    return (await apiClient.get(this.resource_name + '/' + id)).data;
  }

  async patch(id: Id, data: Update) {
    return (await apiClient.patch(this.resource_name + '/' + id, data)).data;
  }

  async update(id: Id, data: Update): Promise<Data> {
    return (await apiClient.put(this.resource_name + '/' + id, data)).data;
  }

  async delete(id: Id): Promise<Data> {
    return (await apiClient.delete(this.resource_name + '/' + id)).data;
  }
}
