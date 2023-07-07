//Modulo En donde se reali1zaran acciones de guardado eliminacion de datos segun el casoy
 
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CLIENTE':
      return {
        ...state,
        cliente: action.payload,
      };
    case 'SET_VEHICULO':
      return {
        ...state,
        vehiculo: action.payload,
      };
    case 'RESTORE_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_FECHA_ENTREGA':
      return {
        ...state,
        fechaEntrega: action.payload,
      };
    case 'ADD_SERVICIO':
      return {
        ...state,
        servicios: [...state.servicios, action.payload],
      };
    case 'REMOVE_SERVICIO':
      return {
        ...state,
        servicios: state.servicios.filter(service => service !== action.payload),
      };
    case 'RESET_DATOS':
      return {
        cliente: {
          nombre: '',
          email: '',
          contacto: '',
          tipoIdentificacion: '',
        },
        vehiculo: {
          marca: '',
          modelo: '',
          placa: '',
        },
        fechaEntrega: '',
        servicios: [],
      };
    default:
      return state;
  }
};
