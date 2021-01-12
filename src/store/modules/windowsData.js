
 const windowsData = {
   namespacing: true,
   state :{
    windowItems: [
      {
        id: 'id_aboutMe',
        header: 'ABOUTME',
        intro:
          'Hello, I am a student in my early twenties that have a passion for IT and electronics. I am currently attendig a bachelor degreee in IT & Product Devlopment at Aarhus University, and created and designed this website to showcase the different projects I am making throughout my studies.  This is my own website written in JS with VueJS as my tool.',
        visibility: true,
        zIndex: 50,
        top: 200,
        left: 250,
        width: 450,
        height: 350,
        enlarge: true
      },
      {
        id: 'id_projects',
        header: 'PROJECTS',
        intro: '',
        visibility: true,
        zIndex: 51,
        top: 250,
        left: 400,
        width: 350,
        height: 250,
        enlarge: false
      },
      {
        id: 'id_clippy',
        header: 'Clippy can help',
        intro:
          'Hey, you have just landed on Kasper Borgbjergs website. The projects showcased here are created by him, along side with this website itself.',
        visibility: false,
        zIndex: 10,
        top: 50,
        left: 950
      },
      {
        id: 'id_topico',
        header: 'TOPICO',
        title: 'Linguistic learing tool for the elementry school',
        intro: 'Topico is an online dictionary for the individual classes to use. It is aimed for the pupils in a sixth grade English class, designed on the basis of observations and empiricaldata that we have gathered and analyzed. It is used to store verbal descriptions of relevant words and topics learned in class in audio files. This project fits in the category of EduTech, which covers the ' + ('study and ethical practice of facilitating learning and improving performance by creating, using and managing appropriate technological processes and resources').italics() + '.',
        videoID:'444281811',
        videoTitle: 'Demo of the prototype',
        videoDescription: 'This video demonstrates how the Topico device functions with the online UI that controls the text input and audio output of the device.',
      
        visibility: true,
        zIndex: 141,
        top: 50,
        left: 200,
        width: 700,
        height: 325,
        contentColor: '#B7B2D2'
      },
      {
        id: 'id_smartBelt',
        header: 'SMARTBELT',
        title: 'The selfadjusting belt that didn\'t cure cancer',
        intro: 'Begun the fall of 2019, the self-adjusting belt project intends to make a self-adjusting belt that is wearable and functional for demonstrative use. This project has the purpose of describing the making of a prototype that is functional, created with basic components, and elaborate on the process doing so. The prototype presented is a custom made belt buckle, created through 3D print, together with a custom made PCB circuit with a microcontroller, controlling the components. Our result proves that this project is highly doable with basic components and novice to general knowledge of electronics.',
        videoID:'448910391',
        videoTitle: 'Brief demo of the prototype',
        videoDescription: 'Video of prototype in action. The hanging wires are connected to an external power suply, this is due to the high power consuption of the Nema17 stepper motor',
        visibility: true,
        zIndex: 125,
        top: 100,
        left: 300,
        width: 850,
        height: 325,
        contentColor: '#EAA970'
      },
      {
        id: 'id_cleaver',
        header: 'CLEAVER',
        title: 'The android app that makes moving to a new city more pleasurable',
        intro: 'The social media app for the abroad student',
        videoID:'444281811',
        videoDescription: 'This video demonstrates how the Topico device functions with the online service UI that controlles the device',
        visibility: true,
        zIndex: 140,
        top: 100,
        left: 100,
        width: 700,
        height: 400,
        contentColor: '#ABCDD8'
      },
      {
        id: 'id_coffeecan',
        header: 'COFFEECAN',
        title: 'The multimodal coffee can designed to assist the visually impaired',
        intro: 'yaddayaddaydaad',
        videoID: '498087574',
        videoDesicription: 'Demo of design',
        visibility: true,
        zIndex: 150,
        top: 150,
        left: 150,
        width: 600,
        height: 450,
        contentColor: '#66B0BD'
      }
    ]
   } 
};
export default windowsData