/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */
import { COLORS } from '../helpers/colors.ts'

interface Hamburger {
    prepare(): void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('%cPreparando hamburguesa de Pollo', COLORS.yellow)
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('%cPreparando hamburguesa de Res', COLORS.brown)

    }
}
class BeanHamburguer implements Hamburger{
 prepare(): void {
     console.log('%cPreparando una hamburguesa de Beans',COLORS.green)
 }
}


abstract class Restaurant {

   protected abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger = this.createHamburger();

        hamburger.prepare();
    }

}

class ChickenRestaurant extends Restaurant {
    override  createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
}
class BeefRestaurant extends Restaurant {
    override  createHamburger(): Hamburger {
        return new BeefHamburger();
    }
}

class Beanrestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeanHamburguer()
    }
}

function main() {


    let restaurant: Restaurant;

    const burgerType = prompt('¿Que tipo de hamburguesa quieres? ( chicken/beef/bean )?')
    // const burgerType = prompt('¿%cQue tipo de hamburguesa quieres? ( chicken/beef )?',COLORS.red)
    console.log('burgerType', burgerType)
    switch (burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;

        case 'beef':
            restaurant = new BeefRestaurant();
            break;

            case 'bean':
            restaurant=new Beanrestaurant();
            break;
        default:
            throw new Error('Opcion no valida')
            break;

    }
    restaurant.orderHamburger();

}
main();