import ICorreioTransport from "../Correios/ICorreioTransport";
import Transportadora from "../Transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreioTransport{
    constructor(private transportadora: Transportadora){
        console.log("alterando entrega para 'Transportadora' ");
    }
    sendCorreios() {
        return this.transportadora.sendPackage();
    }
    receiveCorreios() {
        return this.transportadora.receivePackage();
    }
    
}