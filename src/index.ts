import Correio from "./Correios/Correio";
import TransportadoraAdapter from "./Adapter/TransportadoraAdapter";
import ICorreioTransport from "./Correios/ICorreioTransport";
import Transportadora from "./Transportadora/Transportadora";
import ITransportadoraTransport from "./Transportadora/ITransportadoraTransport";

//const transport : ICorreioTransport = new Correio();
const transport : ICorreioTransport = new TransportadoraAdapter(new Transportadora());
transport.sendCorreios();
transport.receiveCorreios();