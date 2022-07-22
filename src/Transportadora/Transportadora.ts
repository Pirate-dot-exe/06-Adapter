import ITransportadoraTransport from "./ITransportadoraTransport";

export default class Transportadora implements ITransportadoraTransport{
    sendPackage() {
        console.log("enviando pacote... (transportadora)");
    }
    receivePackage() {
        console.log("Transportadora: (pacote recebido)")
    }
    
}