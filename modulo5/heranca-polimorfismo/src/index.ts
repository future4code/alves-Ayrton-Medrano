export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
    return this.email
	}
  
	public getName(): string {
    return this.name
	}
  
  public introduceYourself(): string {
    return `Olá, sou ${this.name} bom dia.`
  }
}
const newUser = new User(Date.now().toString(), "ayrton@gmail.com", "Ayrton Medrano", "111222333")
console.log(newUser.getId())
console.log(newUser.getName())
console.log(newUser.getEmail())

//Ex 1 -
//a) Não consigo imprimir a password no console pois é privado.
//b)A mensagem foi impressa apenas uma vez.

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
  
}
const newCustomer = new Customer(Date.now().toString(),"jarbas@gmail.com","Jarbas Dantas","123456",Date.now().toString());

//Ex 2-
//a) A mensagem de Customer é impressa apenas uma vez.
//b) A mensagem de User é impressa uma vez, acredito que por a classe Customer ser herdeira da User antes de acessar o constructor da filha se acessa a do pai para pegar as informações.

console.log(newCustomer.getId())
console.log(newCustomer.getName())
console.log(newCustomer.getEmail())
console.log(newCustomer.purchaseTotal)
console.log(newCustomer.getCreditCard())
//Ex - 3
//a) Não é possível imprimir a password pois ela é privada.

// Ex - 4
console.log(newCustomer.introduceYourself())