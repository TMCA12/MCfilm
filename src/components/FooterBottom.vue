<template>
    
  <div class="tpwarp">
    <hr>
    <h4>Bạn có câu hỏi? Liên hệ với chúng tôi</h4>
    <div class="warp">
        <div>
        <p>Giới Thiệu</p>
        <p>Trung tâm trợ giúp</p>
        <p>Thông báo pháp lý</p>
        </div>
        <div>
            <p>Bản quyền</p>
            <p>Tài khoản</p>
            <p>Thông tin doanh nghiệp</p>
        </div>
        <div>
            <p>Quyền riêng tư</p>
            <p>Điều khoản sử dụng</p>
        </div>
        <div>
            <p><i class="bi bi-facebook"></i> FaceBook</p>
            <p><i class="bi bi-twitter"></i>Twitter</p>
            <p><i class="bi bi-instagram"></i>Instagram</p>
        </div>
        </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.tpwarp{
    height: 300px;
    background-color: #1A151E;
    margin-bottom: 0px;
    padding:0px 80px 0px 80px
}
.tpwarp>h4{
    color:white;
    font-size:14px;
    margin-top: 65px;
    font-family: 'Open Sans', sans-serif;
    padding-left: 60px;

}
 .warp{
    display: flex;  
    height: 150px;
    margin-top: 5px;  
    justify-content: space-between;
    padding: 10px 60px 0px 60px ;
 }
 .warp>div>p{
    color:white;
    font-size: 14px;
    margin-top: 10px;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
 }
  .warp>div>p>i{
    color:white;
    font-size: 14px;
    margin-right: 10px;
 }
</style>