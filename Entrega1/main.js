function convertir() {
    
alert('Bienvenido a WOLF-CAPITAL!')

const convertirMoneda = () => {
    let producto  = ''
    let cantidad = 0 
    let precio = 0
    let subtotal = 0
    let seguirComprando = true

    do{
        producto = prompt ('Queres comprar euro, dolar o real?')
        cantidad = parseInt(prompt ('Cuantos queres comprar?'))

        let cantidadValidada = validadCantidad(cantidad)

        switch (producto.toLowerCase()) {
            case 'euro':
                precio = 536
                break;
            case 'dolar':
                precio = 495
                break;
            case 'real':
                precio = 94
                break;    
            default:
                alert('Alguno de los datos ingresados no son correctos')
                precio = 0
                cantidadValidada = 0
    
        }

        subtotal += precio * cantidadValidada


       seguirComprando = confirm('Desea seguir comprando?')
    } while (seguirComprando);

    return subtotal 
}

const validadCantidad = (cantidad) => {
       
       while (Number.isNaN(cantidad) || cantidad <= 0){
        alert('Debe agregar una cantidad valida!')
        cantidad = parseInt(prompt('Cuantos queres comprar?'))
    }
    return cantidad
}
let resultado = convertirMoneda()

alert ('El total de tu compra es: $ ' + resultado)
}