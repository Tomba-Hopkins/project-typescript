import { Controller, Get } from "@nestjs/common";

@Controller()


class AppController{

    @Get('/')
    GetHome(){
        return 'Home Page'
    }

    @Get('/register')
    GetRegister(){
        return 'Register Page'
    }

    @Get('/login')
    GetLogin(){
        return 'Login Page'
    }
}


export default AppController