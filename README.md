# ICE CREAM SHOP

#### A web application for point of sale inventory management.

#### By Brent Hickman

## Technologies Used

* React
* Javascript
* Html
* Css

## Component Diagram via [Diagrams.net](https://app.diagrams.net/)
![Component Diagram](./icecream-shop/src/img/Ice_cream_shop%20diagram.png)


## Ice Cream shop is React app built for Ice Cream vendors to track their inventory as they sell pints. Users can add new flavors to the flavor list. Quickly mark a sale with the 'Sell' button on the flavor list. Users can also see a detailed view of each flavor by clicking on the flavor in the flavor list. From the details view, users can update the flavor's info.

## Setup/Installation Requirements

* Open a terminal window and clone this repository by entering into the command line:
> git clone https://github.com/BrentHickman/icecream-pints.git
* In the terminal, navigate to the project with the command:
> cd icecream-pints/icecream-shop
* Once in the "icecream-shop" directory, install npm:
> npm install
* Next, enter the following into the command line:
> npm build
* To launch the application in development mode
> npm run start
* The application should the be available at:
> https://localhost:3000/
* Click the "Add Flavor" button to get started.

## Known Bugs

* When a flavor is out of stock, app will replace in stock ammount with out of stock message. This will cause console errors but the flavor can be restocked without issue.

## License

* [MIT](https://opensource.org/licenses/MIT)
* Brent Hickman 4/21/23