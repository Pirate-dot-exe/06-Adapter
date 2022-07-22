import ICorreioTransport from "./ICorreioTransport";

export default class Correio implements ICorreioTransport{
    sendCorreios() {
        console.log("enviando encomenda...");
    }
    receiveCorreios() {
        console.log("encomenda recebida...");
    }
    
}