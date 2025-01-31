import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthenticationResponseDto } from "./dto/login-response.dto";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthenticationService } from "./authentication.service";

@Controller()
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
  ) {}

  @Post("login")
  public async login(
    @Body() loginData: LoginDto
  ): Promise<AuthenticationResponseDto> {
    const response: AuthenticationResponseDto =
      await this.authenticationService.login(loginData);
    return response;
  }

  @Post("signup")
  public async signup(
    @Body() data: RegisterDto
  ): Promise<AuthenticationResponseDto> {
    const response = await this.authenticationService.register(data);
    return response;
  }


}
