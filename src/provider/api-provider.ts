import { Admin } from './api/admin';
import { Appointment } from './api/appointment';
import { authenticate, LoginPayload } from './api/auth';
import { Brand } from './api/brand';
import { Car, CarImage, CarType } from './api/car';

class ApiProvider {
  public readonly admin: Admin = new Admin();
  public readonly appointment: Appointment = new Appointment();
  public readonly brand: Brand = new Brand();
  public readonly car: Car = new Car();
  public readonly carImage: CarImage = new CarImage();
  public readonly carType: CarType = new CarType();

  async authenticate(data: LoginPayload) {
    const value = await authenticate(data);
    this.admin.authenticate(value);
  }
}

export const apiProvider = new ApiProvider();
