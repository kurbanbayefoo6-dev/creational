class Latte {
	name() {
		return 'Латте'
	}
}

class Tea {
	name() {
		return 'Чай'
	}
}

class Cafe {
	constructor(kind) {
		this.kind = kind
	}

	createDrink() {
		switch (this.kind) {
			case 'coffee':
				return new Latte()
			case 'tea':
				return new Tea()
			default:
				throw new Error(`Неизвестный напиток: ${this.kind}`)
		}
	}

	order() {
		const drink = this.createDrink()
		console.log(`Готовим и выдаём: ${drink.name()}`)
	}
}

module.exports = { Cafe, Latte, Tea }

/*
class Latte { String name() { return "Латте"; } }
class Tea   { String name() { return "Чай"; } }

class Cafe {
    private final String kind;

    Cafe(String kind) {
        this.kind = kind;
    }

    void order() {
        if (kind.equals("coffee")) {
            Latte l = new Latte();
            System.out.println("Готовим и выдаём: " + l.name());
        } else if (kind.equals("tea")) {
            Tea t = new Tea();
            System.out.println("Готовим и выдаём: " + t.name());
        } else {
            throw new IllegalArgumentException(kind);
        }
    }
}
*/
