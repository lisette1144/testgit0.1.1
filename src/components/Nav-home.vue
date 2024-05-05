<template>
  <div class="container">
    <div class="topnavhome">
      <div class="iconleft">
        <a href="#contact" style="padding: 5px">
          <div class="profileImagez">
            <div id="profileImage">{{ initials }}</div>
            {{ firstName }} {{ lastName }}
          </div>
        </a>
        
          
        
         
        <!-- <a href="#contact">
          <img class="icon1" src="../assets/icon/size1.png" />
          <div class="ul2">FONT SIZE</div></a
        >-->
        <div class="dropdown">
            <!-- <i class="fa fa-caret-down"></i> -->

            <button @click="openTran()" class="dropbtn" >
              <img class="icon1" src="../assets/icon/lg1.png"/>
              <div class="ul2">LANGUAGE</div>
              <!-- LANGUAGE -->
            </button>

            <div v-show="tran">
              <div id="myDropdown" class="dropdown-content">
                <div id="google_translate_element"></div>
              </div>
            </div>
            <!-- <div id="google_translate_element"></div> -->
          </div> 
          <div class="dropdown">
            <!-- <i class="fa fa-caret-down"></i> -->

            <button @click="openTranaudio()" class="dropbtn" >
              <img class="icon1" src="../assets/icon/sound1.png"/>
              <div class="ul2">AUDIO</div>
              <!-- LANGUAGE -->
            </button><div v-show="tranaudio">
              <div id="myDropdown" class="dropdown-content">
                <input type="range" min="0" max="10" step="1" v-model="valueaudio"> Volume : {{valueaudio}}
              </div>
            </div>

            
            <!-- <div id="google_translate_element"></div> -->
          </div>
          <div class="dropdown">
            <!-- <i class="fa fa-caret-down"></i> -->
            <button @click="openTransound()" class="dropbtn" >
              <img class="icon1" src="../assets/icon/size1.png"/>
              <div class="ul2">FONT SIZE</div>
              <!-- LANGUAGE -->
            </button>

            <div v-show="transound">
              <div id="myDropdown" class="dropdown-content">
                <input type="range" min="0" max="10" step="1" v-model="valuesize"> Font Size : {{valuesize}}              
               </div>
            </div>
            <!-- <div id="google_translate_element"></div> -->
          </div>
        <a href="/select"> 
          
          <img class="icon1" src="../assets/icon/home1.png" />
          <div class="ul2">HOME</div></a
        >
     
          
      </div>
    </div>

    <!-- <div v-show="tran"> -->
      <!-- <a href="#"><i class="../assets/img/twitter.png"></i> Search</a>  -->
      <!-- <div id="google_translate_element"></div>     -->
    <!-- </div> -->
  </div>
</template>
<script>
// $(document).ready(function(){
//   var firstName = $('#firstName').text();
//   var lastName = $('#lastName').text();
//   var intials = firstName.charAt(0) + lastName.charAt(0);
//   var profileImage = $('#profileImage').text(intials);
// });
// import call from 'public/index.html'
// import { defineEmits } from 'vue';
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      isOpen: true,
      tran: false,
      transound: false,
      tranaudio: false,
      valueaudio:5,
      valuesize:5,
    };
  },
  computed: {
    initials() {
      return (
        this.firstName.charAt(0).toUpperCase() +
        this.lastName.charAt(0).toUpperCase()
      );
    },
  },
  methods: {
    openTran() {
      // window.googleTranslateElementInit()
      // document.getElementById("myDropdown").classList.toggle("show");
      window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
      console.log("xxxs");

      // console.log("xxx");
      console.log(this.tran);
      if (this.tran == true) {
        this.tran = false;
      } else {
        this.tran = true;
        // window.googleTranslateElementInit()
        // defineEmits("googleTranslateElementInit")
        //  window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
        // call.googleTranslateElementInit()
        // openTran(googleTranslateElementInit);
      }

      console.log(this.tran);
    },
    openTransound() {
      if (this.transound == true) {
        this.transound = false;
      } else {
        this.transound = true;
      }

      console.log(this.tran);
    },
    openTranaudio() {
    
      if (this.tranaudio == true) {
        this.tranaudio = false;
      } else {
        this.tranaudio = true;
      }
    },
  },
  //   new google.translate.TranslateElement({
  //     pageLanguage: 'en', // Set page default language
  //     layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  //   }, 'google_translate_element');
  // }
  // }
};
</script>

<style>
body {
  margin: 0;
}
.iconleft .ul2 {
  font-size: 10px;
}
.topnavhome {
  width: 100%;
  background-color: #333;
  /* overflow: auto; */
  opacity: 1;
  overflow: hidden;
  /* position: fixed; */
  /* float: bottom; */
}
.topnavhome a {
  float: right;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  /* margin-left: rem */
  /* display: flex; */
  /* align-items: center;
    justify-content: center; */
}
.profileImagez {
  /* width: 200px;
  height: 20px; */
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
}
.iconleft {
  /* float: right; */
  /* position: absolute; */
  /* padding: 12px; */

  /* top: 190px; */
}
.icon1 {
  /* margin-left: 10rem; */
  height: 1.2em;
  /* top: 190px; */
}
.topnavhome a:hover,
.topnavhome a2:hover {
  background-color: #ddd;
  color: black;
}
.dropdown {
  float: right;
  overflow: hidden;
  padding: 12px;
}
#profileImage {
  float: right;
  margin-right: 20px;
  width: 50px;
  height: 40.39px;
  /* padding-right: 50px; */
  border-radius: 50%;
  background: #ff8400;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 150px;
  margin: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  /* padding: 12px 16px; */
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.dropdown-content {
  /* display: none; */
  /* padding-top: 20px; */
  margin-top: 12px;
  position: absolute;
  background-color: whitesmoke;
  min-width: 200px;
  /* height: 200px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropbtn {
  padding: 0px;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
/* .dropdown:hover .dropdown-content {
  display: block;
} */
</style>
