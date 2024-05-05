<template>
 
    <div class="grid-containerxxz">
      <div class="item1">
        <div class="navmapcss">
          <div class="navmapcsss"><div class="imgmapselectweb" style="padding-left: 2%;padding-right: 1%;  display: flex;  width: 7%;"><img
              src="../assets/icon/location.gif"
              style="width: 70%;"
            /></div>
            
            <div
              class="bordertext"
              style="
                border-left: 5px solid #6b615c;
                padding-left: 2%;
                height: 80%;
                align-items: center;
                display: flex;
              "
            >
              <p style="margin: 0px; font-size:1vw;">CHOOSE BY LOCATION</p>
            </div></div>
        </div>
        <img src="../assets/img/S1.gif" usemap="#image-map" class="iconmapselectweb" />

        <map name="image-map">
    <area target="" alt="Chumphon" title="Chumphon" href="" coords="53,68,45,72,41,64,48,57,57,51,55,40,54,27,59,22,51,12,58,11,56,5,61,3,70,4,81,4,78,10,75,18,70,26,73,31,65,34,69,40,65,50,67,62,59,66" shape="poly">
    <area target="" alt="Ranong" title="Ranong" href="" coords="51,15,46,24,45,36,40,45,35,61,37,74,29,81,29,86,34,86,39,86,45,78,41,68,42,60,46,56,53,49,53,41,53,32,54,22" shape="poly">
    <area target="" alt="Suratthani" title="Suratthani" href="" coords="47,74,53,69,65,66,69,75,73,84,67,88,71,92,78,93,86,90,93,88,95,96,94,104,87,107,84,115,79,123,74,127,70,133,55,137,55,124,48,120,36,120,41,116,35,110,33,101,34,91,44,85" shape="poly">
    <area target="" alt="Phangnga" title="Phangnga" href="" coords="33,89,27,88,27,95,29,100,22,111,20,123,20,133,23,142,27,148,31,142,35,134,40,130,43,122,35,122,36,115,31,106" shape="poly">
    <area target="" alt="Krabi" title="Krabi" href="" coords="42,138,47,148,51,152,56,154,62,160,62,168,73,170,75,159,73,148,75,138,67,138,59,138,53,137,51,131,53,126,45,121,42,129" shape="poly">
    <area target="" alt="Nakhonsithammarat" title="Nakhonsithammarat" href="" coords="88,155,85,160,77,158,75,146,78,137,73,131,77,127,81,121,86,116,90,110,96,104,97,89,102,92,103,100,104,108,106,120,107,126,114,134,119,132,120,142,121,149,123,155,119,160,115,164,107,158,99,161,95,153" shape="poly">
    <area target="" alt="Phatthalung" title="Phatthalung" href="" coords="125,190,118,194,109,200,105,193,103,182,97,171,96,162,103,160,109,163,114,166,114,175,119,181" shape="poly">
    <area target="" alt="Trang" title="Trang" href="" coords="87,162,77,162,74,172,72,178,75,187,86,187,87,194,96,199,105,199,101,184,99,174,91,155" shape="poly">
    <area target="" alt="Songkhia" title="Songkhia" href="" coords="126,158,117,164,125,174,128,183,131,192,135,197,122,198,113,204,118,209,118,219,123,223,133,230,144,231,151,239,153,230,161,228,159,220,156,212,148,205,140,203,141,196,129,166" shape="poly">
    <area target="" alt="Pattani" title="Pattani" href="" coords="161,212,164,224,170,223,175,220,180,225,191,221,185,216,179,208" shape="poly">
    <area target="" alt="Yala" title="Yala" href="" coords="163,242,152,242,158,234,164,228,171,224,182,227,189,228,180,234,178,242,178,250,183,252,181,260,174,263,168,272,161,267,157,260" shape="poly">
    <area target="" alt="Narathiwat" title="Narathiwat" href="" coords="194,228,187,232,181,238,180,245,183,251,184,260,192,263,197,268,201,264,203,257,208,248,208,240" shape="poly">
    <area target="" alt="Phuket" title="Phuket" href="" coords="28,165,23,170,20,162,20,152,21,144,27,151,31,154" shape="poly">
    <area target="" alt="Satun" title="Satun" href="" coords="109,227,106,220,94,212,93,201,100,201,105,202,111,202,114,208,117,212,115,221,114,231" shape="poly">
</map>
      </div>
      <div class="item2">
        <div class="navmapcss">
          <div class="navmapcsss"><div class="imgmap" style="padding-left: 2%; display: flex; float: left; width: 7%;"><img
              src="../assets/icon/find.gif"
              style="width: 70%;"
            /></div>
            
            <div
              class="bordertext"
              style="
                padding-left: 2%;
                border-left: 5px solid #6b615c;
                height: 80%;
                align-items: center;
                display: flex;
              "
            >
            <p style="margin: 0px; font-size:1vw;">CHOOSE BY ACTIVTIES</p>
            </div></div>
        </div>
        <div class="con">
          <div class="item1zzzz">
            <router-link to="/city"> 
            <img class="iconselectweb" src="../assets/img/s1.png" />
            </router-link>
          </div>
          <div class="item1zzzz">
            <img class="iconselectweb" src="../assets/img/s2.png" />
          </div>
          <div class="item1zzzz">
            <img class="iconselectweb" src="../assets/img/s3.png" />
          </div>
          <div class="item1zzzz">
            <img class="iconselectweb" src="../assets/img/s4.png" />
          </div>
        </div>
      </div>
    </div>

  <div class="navbar">
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from "@/components/Navbar-web.vue";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      isOpen: false,
      active: "register",
    };
  },
  methods: {},
  mounted(){
  window.imageMapResize();

  },
};
</script>
<style>
body {
  background-image: url("../assets/img/BG1.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}


.grid-containerxxz {
  padding-top: 20px;
  display: grid;
  justify-content: center;
  align-content: center;
  /* width: 100%; */
  grid-template-columns: 30% 30%;
  /* grid-template-rows: auto 2000px;  */
  gap: 100px;
  /* background-color: #2196F3; */
  padding: 80px;

  /* justify-content: center; */
}
.navmapcss {
  width: 100%;
  /* background-color: whitesmoke; */
  justify-content: center;
  display: flex;
  height: 6%;
}
.navmapcsss {
  width: 100%;
  /* position: relative; */
  /* border-left: 5px solid gray; */
  /* justify-content: center; */
  display: flex;
  align-items: center;
  background-color: white;
  /* padding-bottom: 10%; */
}
.con {
  grid-template-columns: auto auto;
  display: grid;
  padding-top: 2%;

  gap: 5%;
}
.grid-containerxxz > div {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* text-align: center; */
  width: 99%;
height: 100%;
  /* justify-content: center; */
  /* height: 50px; */
  /* height: 100%; */
  /* height: 100%; */
}
.item1 {
  width: 50%;
}
.item2 {
  /* padding-left: 10%; */
  /* float: left; */
  width: 50%;
}
.iconmapselectweb {
  width: 50%;
  padding-top: 2%;
  /* max-width: 400px; */
  /* min-width: 200px; */
  /* height: 100%; */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.iconselectweb {
  border-style: solid;
  border-color: white;
  border-width: 10px;
  width: 100%;
}
@media only screen and (max-width: 600px) {
.grid-containerxxz{
  display: grid;
    width: 100%;
    grid-template-columns: auto ;
    /* background-color: white; */
    gap: 20px;      /* border-left: 5px solid gray; */
    padding: 50px;
}
/* .grid-containerxxz {
  padding-top: 20px;
  display: grid;
  justify-content: center;
  align-content: center;

  grid-template-columns: 30% 30%;
  
  gap: 100px;
 
  padding: 80px;


} */
/* .icon{
    border-style: solid;
  border-color: white; */
  /* border-width: 10px; */
  /* border-color: white; */
  /* border-width: 2px;
    width: 100%;
  }
  .backimage{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
} */
}
</style>
