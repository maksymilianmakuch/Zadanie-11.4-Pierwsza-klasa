function Phone(brand, price, color, waterproof, lte) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.waterproof = waterproof;
	this.lte = lte;
};
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + " The phone is " + this.waterproof + " and has " + this.lte + ".");
};
var samsungGalaxyS6 = new Phone("Samsung Galaxy S6", 2200, "white", "waterproof", "LTE");
var iPhone6S = new Phone("Apple", 2250, "silver", "waterproof", "LTE");
var onePlusOne = new Phone("One Plus One", 1000, "black", "waterproof", "LTE");
Phone.prototype.module = function() {
	console.log("This model has 4G module.");
};
samsungGalaxyS6.printInfo();
samsungGalaxyS6.module();
iPhone6S.printInfo();
iPhone6S.module();
onePlusOne.printInfo();
onePlusOne.module();
