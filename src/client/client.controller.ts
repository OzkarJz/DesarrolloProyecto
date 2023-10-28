import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';

@Controller('client')
export class ClientController {

    constructor (private readonly clientService: ClientService){}

    @Get()
    getClients(){
        return this.clientService.findAll();
    }

    @Get(':id')
    getClientById(@Param('id') id: string){

        console.log(`el id a buscar es ${id}`);

        return this.clientService.findById(id);

    }


    @Put(':id')
    updateClient(@Param('id') id: string, @Body() updateClientDTO: UpdateClientDTO){

        console.log(`el id a actualizar es ${id}`);
        console.log(updateClientDTO);

        return this.clientService.updateClient(updateClientDTO, id);

    }

    @Delete(':id')
    deleteById(@Param('id') id: string){

        console.log(`el id a elimnar es ${id}`);

        return this.clientService.deleteClient(id);

    }

    @Post()
    createClient(@Body() createClientDTO: CreateClientDTO){

        console.log(createClientDTO);

        return this.clientService.createClient(createClientDTO);

    }

}
