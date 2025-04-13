function cardSlider() {
    return {
        currentCard: 0,
        cards: [
            { image: '/imgs/bg3.jpg', title: 'Knalpot Akrapovic', description: 'Teknologi tinggi yang dirancang untuk meningkatkan performa, suara, dan tampilan kendaraan. dan peningkatan yang lebih baik lagi pada tampilan kendaraan.', price: 'Rp 500.000' },
            { image: '/imgs/bg4.jpg', title: 'Knalpot Yoshimura', description: 'Teknologi tinggi yang dirancang untuk meningkatkan performa, suara, dan tampilan kendaraan. dan peningkatan yang lebih baik lagi pada tampilan kendaraan.', price: 'Rp 1000.000' },
            { image: '/imgs/bg5.jpg', title: 'Knalpot Scorpion', description: 'Teknologi tinggi yang dirancang untuk meningkatkan performa, suara, dan tampilan kendaraan. dan peningkatan yang lebih baik lagi pada tampilan kendaraan.', price: 'Rp 500.000' },
            { image: '/imgs/bg3.jpg', title: 'Knalpot Akrapovic', description: 'Teknologi tinggi yang dirancang untuk meningkatkan performa, suara, dan tampilan kendaraan. dan peningkatan yang lebih baik lagi pada tampilan kendaraan.', price: 'Rp 500.000' },
            { image: '/imgs/bg4.jpg', title: 'Knalpot Yoshimura', description: 'Teknologi tinggi yang dirancang untuk meningkatkan performa, suara, dan tampilan kendaraan. dan peningkatan yang lebih baik lagi pada tampilan kendaraan.', price: 'Rp 1000.000' },
            { image: '/imgs/bg5.jpg', title: 'Knalpot Scorpion', description: 'Teknologi tinggi yang dirancang untuk meningkatkan performa, suara, dan tampilan kendaraan. dan peningkatan yang lebih baik lagi pada tampilan kendaraan.', price: 'Rp 500.000' },
        ],
        next() {
            if (this.currentCard < this.cards.length - 3) {
                this.currentCard++;
            }
        },
        prev() {
            if (this.currentCard > 0) {
                this.currentCard--;
            }
        }
    }
}  