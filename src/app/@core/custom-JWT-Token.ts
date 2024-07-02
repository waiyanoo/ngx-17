import { NbAuthJWTToken } from '@nebular/auth';

export class CustomJWTToken extends NbAuthJWTToken {
  // Override the required methods for custom validation
  isValid(): boolean {
    // Implement custom validation logic here
    const payload = this.getPayload();
    console.log(payload.exp)
    console.log("is valid", payload && payload.exp > (Date.now() / 1000))
    return !!payload && payload.exp > (Date.now() / 1000); // Example: check expiration
  }
}
