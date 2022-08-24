<template>
    <div class="warpconten">
    <div class="logo">
        <i class="bi bi-camera-reels"></i>
        <p>MCFILM</p>
    </div>
    <div class="left-conten">
        <div class="search">
                    <input type="text" name="" id="" placeholder="Nhập tên phim" v-model="SearchText"> 
                    <p>|</p>       
        </div>
        <button id="hedder-bt-1">Đăng Nhập</button>
        <button id="hedder-bt-2">Đăng ký</button>
    </div>
  </div>
    <div class="warp">
        <div class="leftNav">
            <h2>Thể loại</h2>
            <a @click="chonDanhMuc('all')">Tất cả </a>
            <a @click="chonDanhMuc('ct')">Phim cổ trang </a>
            <a @click="chonDanhMuc('kd')">Phim kinh dị</a>
            <a @click="chonDanhMuc('tc')">Phim tình cảm</a>
            <a @click="chonDanhMuc('hd')">Phim hành động</a>
            <a @click="chonDanhMuc('hh')">Phim hoạt hình</a>
        </div>
        <div class="rightView" >
            <h3>Phim Mới</h3>
            <div v-if="!SearchMethod">
                <div v-if="chonTheLoai === 'all'">
                <div class="wap-hienthi">  
                    <div class="flimWarp" v-for="tatca in TatCa" :key="tatca.imageUrl"  @click="chonPhimHienThi(tatca.imageUrl,tatca.title,tatca.category,tatca.url)">
                        <div class="HinhAnh">
                            <img :src="tatca.imageUrl" class="" alt="">
                        </div>
                        <div class="TenPhim">
                            <h4>{{tatca.title}}</h4>
                            <p>{{tatca.category}}</p>
                        </div>
                    </div>                   
                </div>
                </div>
                <div v-else-if="chonTheLoai === 'ct'">
                    <div class="wap-hienthi">  
                        <div class="flimWarp" v-for="tatca in PCoTrang" :key="tatca.imageUrl" @click="chonPhimHienThi(tatca.imageUrl,tatca.title,tatca.category,tatca.url)">
                            <div class="HinhAnh">
                                <img :src="tatca.imageUrl" class="" alt="">
                            </div>
                            <div class="TenPhim">
                                <h4>{{tatca.title}}</h4>
                                <p>{{tatca.category}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="chonTheLoai === 'kd'">
                    <div class="wap-hienthi">  
                        <div class="flimWarp" v-for="tatca in PKinhDi" :key="tatca.imageUrl" @click="chonPhimHienThi(tatca.imageUrl,tatca.title,tatca.category,tatca.url)">
                            <div class="HinhAnh">
                                <img :src="tatca.imageUrl" class="" alt="">
                            </div>
                            <div class="TenPhim">
                                <h4>{{tatca.title}}</h4>
                                <p>{{tatca.category}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="chonTheLoai === 'tc'">
                    <div class="wap-hienthi">  
                        <div class="flimWarp" v-for="tatca in PTinhCam" :key="tatca.imageUrl" @click="chonPhimHienThi(tatca.imageUrl,tatca.title,tatca.category,tatca.url)">
                            <div class="HinhAnh">
                                <img :src="tatca.imageUrl" class="" alt="">
                            </div>
                            <div class="TenPhim">
                                <h4>{{tatca.title}}</h4>
                                <p>{{tatca.category}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="chonTheLoai === 'hd'">
                    <div class="wap-hienthi">  
                        <div class="flimWarp" v-for="tatca in PHanhDong" :key="tatca.imageUrl" @click="chonPhimHienThi(tatca.imageUrl,tatca.title,tatca.category,tatca.url)">
                            <div class="HinhAnh">
                                <img :src="tatca.imageUrl" class="" alt="">
                            </div>
                            <div class="TenPhim">
                                <h4>{{tatca.title}}</h4>
                                <p>{{tatca.category}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="chonTheLoai === 'hh'">
                    <div class="wap-hienthi">  
                        <div class="flimWarp" v-for="tatca in PHoatHinh" :key="tatca.imageUrl" @click="chonPhimHienThi(tatca.imageUrl,tatca.title,tatca.category,tatca.url)">
                            <div class="HinhAnh">
                                <img :src="tatca.imageUrl" class="" alt="">
                            </div>
                            <div class="TenPhim">
                                <h4>{{tatca.title}}</h4>
                                <p>{{tatca.category}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="SearchMethod">
                <div class="wap-hienthi">  
                    <div class="flimWarp" v-for="tatca in PSearch" :key="tatca.imageUrl" @click="chonPhimHienThi(tatca.imageUrl,tatca.title,tatca.category,tatca.url)">
                        <div class="HinhAnh">
                            <img :src="tatca.imageUrl" class="" alt="">
                        </div>
                        <div class="TenPhim">
                            <h4>{{tatca.title}}</h4>
                            <p>{{tatca.category}}</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
     <!-- show film when click  -->

    <div v-if="check" class="showFlim">
        <img :src="IMG" class="" alt="">
        <div class="right-content">
            <div class="conten-top">
                <h4>{{Title.toUpperCase()}}</h4>
                <i class="bi bi-x-lg" @click="showChiTiet"></i>
            </div>
            <span>
                <h5>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                </h5>
                <h5> 
                    <i class="bi bi-tag"></i>
                    <p>{{Category}}</p>
                </h5>
                <h5>
                    <i class="bi bi-clock"></i>
                    <p>3/9/2021</p>
                </h5>
            </span>
            <a :href="Url" id="clickXem">
                <button>
                    Xem Phim
                </button>
            </a>
            <p>Quốc gia: Trung Quốc</p>
            <p>Năm xuất bản: 2021</p>
            <p>Ngày công chiếu: 10/8/2021</p>
            <p>Thể loại: {{Category}}</p>
            <p>Đạo diễn: Trương Tiếu Yên</p>
            <p>Diễn viên: Trần Triết Viễn, Từ Mộng Khiết, Vương Trạch Hiên, Phàn Trị Hân, Vương Nhất Lam, Lưu Chỉ Vy,..</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data(){
        return {
            TatCa: null, 
            chonTheLoai: 'all',
            RenDer:null, 
            IMG: null,  
            Title: null,
            Category: null,  
            Url:null,   
            check: false,
            DanhSachHienThi:'Phim mới',
            CheckSearch: false,
            SearchText: '',
        }
    },
     methods:{
       
        chonDanhMuc(chon){
            this.chonTheLoai = chon;
            console.log(this.chonTheLoai);
        },
        chonPhimHienThi(a,b,c,d){
            this.IMG = a;
            this.Title = b;
            this.Category = c;
            this.Url = d;
            console.log(this.IMG);
            console.log(this.Title);
            console.log(this.Category);
            this.check=1
        },
        // showChiTiet(){
        //     console.log(this.PSearch)
        // },
        showChiTiet(){
            this.check=!this.check
        }
    },
    created(){ 
        fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR2CQrkSmpdayjUmuQDm2BmuZtaSBm0ol5PoNNEvzxo5UI8AwacyymiJ3B8")
        .then((response)=>response.json())
        .then((data)=>(this.TatCa = data.phim.phimchieurap))
        .then(()=>{ console.log(this.TatCa)})
    },
    computed:{
        checkDanhSachHienThi(){
            if(this.chonTheLoai=='all'){return this.DanhSachHienThi=='Phim Mới'}
            else if(this.chonTheLoai=='ct'){return this.DanhSachHienThi=='Phim cổ trang'}
            else if(this.chonTheLoai=='tc'){return this.DanhSachHienThi=='Phim tình cảm'}
            else if(this.chonTheLoai=='hh'){return this.DanhSachHienThi=='Phim hoạt hình'}
            else if(this.chonTheLoai=='hd'){return this.DanhSachHienThi=='Phim hành động'}
            else{return this.DanhSachHienThi=='Phim kinh dị'}
        },
        PCoTrang(){
            return this.TatCa.filter(p=> p.category == "Phim cổ trang")
        },
        PHanhDong(){
            return this.TatCa.filter(p=> p.category == "Phim hành động")
        },
        PHoatHinh(){
            return this.TatCa.filter(p=> p.category == "Phim hoạt hình")
        },
        PKinhDi(){
            return this.TatCa.filter(p=> p.category == "Phim kinh dị")
        },
        PTinhCam(){
            return this.TatCa.filter(p=> p.category == "Phim tình cảm")
        },
        PSearch(){
            return this.TatCa.filter(post => post.title.toLowerCase().includes(this.SearchText.toLowerCase())
        );
        },
        SearchMethod(){
            if(this.SearchText==''){
                return false
            }else{
                return true
            }
        },
       
    }
   
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
.warp{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #1A151E;
    height: auto;
    padding-bottom:50px;
    padding-top:100px
}
.leftNav{
    width: 20%;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 70px;
    
 }
 .leftNav>h2{
    color: white;
    font-size: 25px;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    margin-left: 50px;
    margin-bottom: 50px;
 }
 .leftNav>a{
    color: white;
    font-size: 20px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    margin-left: 50px;
    margin-top: 20px;  
    transition: 0.5s linear;
    padding-bottom: 5px;
    cursor: pointer;
 } 
 .leftNav>a:hover{
    text-decoration: underline #9966CB;
 }
 .rightView{
    width: 80%;
 }
 .rightView>h3{
    color: white;
    font-size: 40px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    margin-left: 10px;
    margin-top: 20px;
 }
 /*  */
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
template{
    position: relative;
}
.wap-hienthi{
    display: flex;
    flex-direction: row;  
    flex-wrap: wrap ;
}
.flimWarp{
    position: relative;
    height: 600px ;
    width: 22%;
    margin: 10px;
    background-color: #605F7B;
    border-radius: 10px ;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    overflow: hidden;
}
.HinhAnh{
    width: 100%;
    height: 400px;
    border-radius: 10px 10px 0px 0px;
    transition: 0.5s ;
    overflow: hidden;
}
.HinhAnh>img{
    width: 100%;
    height: 400px;
    border-radius: 10px 10px 0px 0px;
    transition: 0.5s ;
    overflow: hidden;
}
.flimWarp:hover {
    background-color: #484681;
}
.HinhAnh>img:hover{
    transform: scale(1.1);
    overflow: hidden;
}
.TenPhim{
    height: 200px;
}
.TenPhim>h4{
    color: white;
    font-size: 20px;
    text-decoration: none;
    font-weight: 800;
    font-family: 'Open Sans', sans-serif;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 20px;   
}
.TenPhim>p{
    position: absolute;
    color: white;
    font-size: 20px;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    bottom: 10px;
    left:8px    
}
.showFlim{
    background-image: url('https://www.99images.com/download-image/854890/1280x960');
    display: flex;
    position: fixed;
    height:640px;
    width:80%;
    top:80px;
    right: 10%;
    z-index: 1;
    background-color: black;
    padding:20px
}
.showFlim>img{
    width: auto;
    height: 600px;
    margin-right: 80px;
    border-radius: 20px
}
.right-content>span{
    display: flex;
}
.conten-top{
    display: flex;
    height:200px;
    overflow: hidden;
}
.conten-top>h4{
    width: 95%;
    color: white;
    font-size: 50px;
    font-family: 'Source Code Pro', monospace;
    color:#fbfafb;
    font-weight: 300;
}
.conten-top>i{
    box-sizing: border-box;
    font-size:40px;
    color: yellowgreen;
    z-index: 2;
    cursor: pointer;
}
.conten-top>i:hover{
    font-size: 41;
}

.right-content>p{
    color: white;
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    margin-bottom:10px
}

.right-content>span>h5{
    display: flex;
    align-content: center;
    margin-right:30px
}
.right-content>span>h5>i{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    color: orange;
    margin-top: 5px;
    margin-right: 10px;
}
.right-content>span>h5>p{
    color: white;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#clickXem>button{
    margin:20px 0px 20px 0px;
    height:70px;
    width: 180px;
    background-color:#484681;
    font-size:20px;
    color:whitesmoke;
    border-radius: 10px;
    cursor: pointer;
}
/* ---------------------------------------------------------------- */
/* import font */
@import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
/* end import */
    .warpconten{
        width: 100%;
        height: 80px;
        background-color: #232026;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 5px 0px black;
        position: fixed;
        z-index: 3;
    }
    .logo{
        width: 20%;
        display: flex;
        padding-left: 80px;
    }
    .logo>i{
        font-size:50px;
        color:#9966cb;
        margin-right:10px
    }
    .logo>p{
        font-family: 'Rubik Distressed', cursive;
        font-size: 50px;
        color:yellow
    }
    .left-conten{     
        width: 80%;
        display: flex;   
        justify-content: flex-end;   
        padding-right: 50px;
        
    }
    .search{
        width: 20%;
        height: 80px;
        position: relative;
    }
    .search>input{
        position: absolute;
        bottom:20px;
        right:0px;
        height: 40px;
        width: 20px;
        border-radius: 30px;
        margin-right: 20px;
        border: none;
        background-color: #232026;
        font-size: 20px;
        padding: 20px;
        transition: 1s;
        border: 3px solid #9966cb;
        color: white;
        z-index: 2;
    }
    .search>p{
        font-size:50px;
        color:#9966cb;
        position: absolute;
        z-index: 1;
        bottom: 0px;
        right: 18px;
        font-weight: bold;
        transform: rotate(135deg);
    }
    .search>input:focus{
        width: 100%;
        background-color: #232026;
        border: 3px solid #9966cb;
        outline: none;

    }
    
     /* css button  */
    .left-conten>button{
        height: 50px;
        width: 150PX;
        margin-top: 15px;
        margin-right: 10px;
        font-size: 18px;
        border: none;
        border-radius: 10px;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
        transition: 1s;
    }
   /* đăng nhập */
    #hedder-bt-1{
        background-color: #232026;
        color: white;
        margin-right: 20px;
    }
    #hedder-bt-1:hover{
       color: #9966cb
    }
    
    #hedder-bt-2{
        color: #9966cb;
        transition: 01s linear;
    }
    #hedder-bt-2:hover{
        background-color: #9966cb;
        color: aliceblue;
    }
</style>