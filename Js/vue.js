const app = new Vue({

    el: '#app',
    data: {
        titulo: ' Stock de verduleria',
        frutas: [
            { nombre: 'Banana', cantidad: 20 },
            { nombre: 'Manzana', cantidad: 60 },
            { nombre: 'Pera', cantidad: 0 },
            { nombre: 'Aguacate', cantidad: 10 },

        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad: this.nuevaFruta
                }),
                this.nuevaFruta = ''
        }
    },
    computed: {
        sumarFruta() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        },
        color() {
            return {
                'bg-danger': this.total <= 50,
                'bg-warning': this.total > 50 && this.total < 90,
                'bg-success': this.total >= 90,
            }
        }


    }




});