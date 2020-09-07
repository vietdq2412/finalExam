function Animal(name, weight) {
    this.name = name;
    this.weight = weight;

    this.setName = function (name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }

    this.setWeight = function (w) {
        this.weight = w;
    }
    this.getWeight = function () {
        return this.weight;
    }

    this.toString = function () {
        return 'name: ' + this.name + ' - weight: ' + this.weight;
    }
}



