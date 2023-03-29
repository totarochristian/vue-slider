const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      sliderTitle: '',
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
          text: ""
        },
        {
          img: "2.jpg",
          title: "Montagne con nuvole",
          text: ""
        },
        {
          img: "3.jpg",
          title: "Cascata tra i monti",
          text: ""
        },
        {
          img: "4.jpg",
          title: "Montagne sul mare",
          text: ""
        },
        {
          img: "5.jpg",
          title: "Vista da un monte",
          text: ""
        },
        {
          img: "6.jpg",
          title: "Tramonto su una laguna",
          text: ""
        },
        {
          img: "7.jpg",
          title: "Costruzioni sulla sabbia",
          text: ""
        },
        {
          img: "8.jpg",
          title: "Che caldo che fa",
          text: ""
        },
        {
          img: "9.jpg",
          title: "Immersione nel bosco",
          text: ""
        },
        {
          img: "10.jpg",
          title: "Fiori in Primavera",
          text: ""
        },
        {
          img: "11.jpg",
          title: "Un campanile allagato",
          text: ""
        },
        {
          img: "12.jpg",
          title: "Palafitta tra i monti",
          text: ""
        },
        {
          img: "13.jpg",
          title: "Borgo tra i monti",
          text: ""
        },
        {
          img: "14.jpg",
          title: "Colori autunnali",
          text: ""
        },
        {
          img: "15.jpg",
          title: "Cavallo che si nutre tra i monti",
          text: ""
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
        this.sliderAlt = 'Tema della foto: ' + this.sliderImages[this.sliderCurrentIndex].title;
        this.UpdatePreviewSlideShowed();
    },
    PrevSlide() {
      this.sliderPrevIndex = this.sliderCurrentIndex;
      if (this.sliderCurrentIndex > 0) this.sliderCurrentIndex--;
      else this.sliderCurrentIndex = this.sliderImages.length - 1;
      this.UpdateSlideShowed();
    },
    NextSlide() {
      this.sliderPrevIndex = this.sliderCurrentIndex;
      if (this.sliderCurrentIndex < this.sliderImages.length - 1)
        this.sliderCurrentIndex++;
      else this.sliderCurrentIndex = 0;
      this.UpdateSlideShowed();
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
    }
  },
  created(){
    this.UpdateSlideShowed();
  },
  mounted() {
    this.StartAutoCarousel();
  },
}).mount("#app");
