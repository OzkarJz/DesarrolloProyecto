import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './entities/client.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClientService {

    constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

    findAll(){
        return this.clientModel.find().exec();
    }

    findById(id: string){

        const client = this.clientModel.findById(id)

        if (!client){
            throw new NotFoundException(`Client with id ${id} does not exist`);
        }

        return client;
    }

    updateClient(clientBody, id){

        return this.clientModel.updateOne({_id:id}, {
            $set: clientBody
        });

    }

    deleteClient(id){

        return this.clientModel.deleteOne({_id:id})

    }

    createClient(clientBody){

        const createdClient = new this.clientModel(clientBody);
        return createdClient.save();

    }
}
