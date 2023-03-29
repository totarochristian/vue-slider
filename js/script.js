const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      sliderTitle: '',
      sliderText: '',
      sliderImage: '',
      sliderAlt: '',
      sliderCurrentIndex: 0,
      sliderPrevIndex: 0,
      intervalSlider: 0,
      basicClassSlide: 'imgCont',
      activeClassSlide: 'activeImage',
      sliderImages: [
        {
          img: "1.jpg",
          title: "Lago tra i monti",
          text: "Sperimenta la vita in riva ad un lago immerso tra i monti, ti sentirai immerso in una Natura travolgente!",
          class: 'imgCont'
        },
        {
          img: "2.jpg",
          title: "Montagne con nuvole",
          text: "Osserva le nuvole attraversare le cime delle montagne più alte, alcuni monaci hanno raggiunto l'illuminazione in questo modo.",
          class: 'imgCont'
        },
        {
          img: "3.jpg",
          title: "Cascata tra i monti",
          text: "Chi non vorrebbe farsi un bagno in una cascata? Rompi le catene mentali e tuffati!",
          class: 'imgCont'
        },
        {
          img: "4.jpg",
          title: "Montagne sul mare",
          text: "Andare al mare è un bel sogno ma è consigliabile aspettare l'estate prima di farlo.",
          class: 'imgCont'
        },
        {
          img: "5.jpg",
          title: "Vista da un monte",
          text: "Chissà come dev'essere bello osservare la vallata dalla cima di un monte...",
          class: 'imgCont'
        },
        {
          img: "6.jpg",
          title: "Tramonto su una laguna",
          text: "Il tramonto è un momento speciale per molte popolazioni del mondo, viverlo sulla propria pelle dev'essere speciale!",
          class: 'imgCont'
        },
        {
          img: "7.jpg",
          title: "Costruzioni sulla sabbia",
          text: "Il caldo metterà alla prova la tua resistenza ma se sarai abbastanza intrepido avrai l'occasione di esplorare luoghi molto lontani dal tuo cortile di casa.",
          class: 'imgCont'
        },
        {
          img: "8.jpg",
          title: "Che caldo che fa",
          text: "Sicuramente vederlo dal vivo dev'essere divertente... ma il caldo ne varrà la pena?",
          class: 'imgCont'
        },
        {
          img: "9.jpg",
          title: "Immersione nel bosco",
          text: "Chi non vorrebbe perdersi nel bosco e riscoprire se stesso?",
          class: 'imgCont'
        },
        {
          img: "10.jpg",
          title: "Fiori in Primavera",
          text: "Molti pagherebbero oro per potersi sdraiare in un campo di fiori... altri morirebbero per l'allergia.",
          class: 'imgCont'
        },
        {
          img: "11.jpg",
          title: "Un campanile allagato",
          text: "Sembra poetico un campanile che fuoriesce da un lago, ma chissà cosa ne pensa il prete che ci viveva...",
          class: 'imgCont'
        },
        {
          img: "12.jpg",
          title: "Palafitta tra i monti",
          text: "Forse non è proprio il luogo ideale per chi ha problemi alle ginocchia... l'umidità è uno dei nemici dell'Uomo!",
          class: 'imgCont'
        },
        {
          img: "13.jpg",
          title: "Borgo tra i monti",
          text: "Per i famosi lupi solitari vivere in un borgo del genere dev'essere spettacolare! Per i leoni da tastiera invece no.",
          class: 'imgCont'
        },
        {
          img: "14.jpg",
          title: "Colori autunnali",
          text: "Bello l'Autunno che avanza... ma chissaà i serpenti e i coccodrilli che vivono sul fondo del lago cosa ne pensano!",
          class: 'imgCont'
        },
        {
          img: "15.jpg",
          title: "Cavallo che si nutre tra i monti",
          text: "Se mantenere un cavallo non costasse un rene al mese, forse potrebbe essere interessante visitare un luogo del genere.",
          class: 'imgCont'
        }
      ]
    };
  },
  methods: {
    UpdatePreviewSlideShowed() {
      this.sliderImages[this.sliderPrevIndex].class = this.basicClassSlide;
      this.sliderImages[this.sliderCurrentIndex].class = this.basicClassSlide+" "+this.activeClassSlide;
    },
    UpdateSlideShowed() {
        this.sliderImage = "./assets/img/" + this.sliderImages[this.sliderCurrentIndex].img;
        this.sliderTitle = this.sliderImages[this.sliderCurrentIndex].title;
        this.sliderText = this.sliderImages[this.sliderCurrentIndex].text;
        this.sliderAlt = 'Tema della foto: ' + this.sliderImages[this.sliderCurrentIndex].title;
        this.UpdatePreviewSlideShowed();
    },
    PrevSlide() {
      let index = this.sliderCurrentIndex;
      if (index > 0) index--;
      else index = this.sliderImages.length - 1;
      this.OpenSlide(index);
    },
    NextSlide() {
      let index = this.sliderCurrentIndex;
      if (index < this.sliderImages.length - 1) index++;
      else index = 0;
      this.OpenSlide(index);
    },
    MouseWheelScroll(event) {
      const delta = Math.sign(event.deltaY);
      if (delta == 1) this.NextSlide();
      else if (delta == -1) this.PrevSlide();
    },
    StartAutoCarousel() {
      this.intervalSlider = setInterval(this.NextSlide, 3000);
    },
    StopAutoCarousel() {
      clearInterval(this.intervalSlider);
    },
    OpenSlide(index){
      this.sliderPrevIndex = this.sliderCurrentIndex;
      this.sliderCurrentIndex = index;
      this.UpdateSlideShowed();
    }
  },
  created(){
    this.UpdateSlideShowed();
  },
  mounted() {
    this.StartAutoCarousel();
  },
}).mount("#app");
