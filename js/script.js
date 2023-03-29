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
          text: "",
          class: 'imgCont'
        },
        {
          img: "2.jpg",
          title: "Montagne con nuvole",
          text: "",
          class: 'imgCont'
        },
        {
          img: "3.jpg",
          title: "Cascata tra i monti",
          text: "",
          class: 'imgCont'
        },
        {
          img: "4.jpg",
          title: "Montagne sul mare",
          text: "",
          class: 'imgCont'
        },
        {
          img: "5.jpg",
          title: "Vista da un monte",
          text: "",
          class: 'imgCont'
        },
        {
          img: "6.jpg",
          title: "Tramonto su una laguna",
          text: "",
          class: 'imgCont'
        },
        {
          img: "7.jpg",
          title: "Costruzioni sulla sabbia",
          text: "",
          class: 'imgCont'
        },
        {
          img: "8.jpg",
          title: "Che caldo che fa",
          text: "",
          class: 'imgCont'
        },
        {
          img: "9.jpg",
          title: "Immersione nel bosco",
          text: "",
          class: 'imgCont'
        },
        {
          img: "10.jpg",
          title: "Fiori in Primavera",
          text: "",
          class: 'imgCont'
        },
        {
          img: "11.jpg",
          title: "Un campanile allagato",
          text: "",
          class: 'imgCont'
        },
        {
          img: "12.jpg",
          title: "Palafitta tra i monti",
          text: "",
          class: 'imgCont'
        },
        {
          img: "13.jpg",
          title: "Borgo tra i monti",
          text: "",
          class: 'imgCont'
        },
        {
          img: "14.jpg",
          title: "Colori autunnali",
          text: "",
          class: 'imgCont'
        },
        {
          img: "15.jpg",
          title: "Cavallo che si nutre tra i monti",
          text: "",
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
