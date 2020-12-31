 // 点击购买按钮
        // 获取用户输入的商品数量
        // 获取本页面的商品id
        // 获取本页面的商品价格
        // 获取本页面的商品名称
        // 获取本页面的商品图片
        $('.btnadd').click(async function(){
           
            var data = await $.ajax({
                url:"http://localhost/interface/add.php",
                type:'get',
                data:{
                    id:$('.iddd').html(),
                    name:'hua露',
                    price:451,
                    num:1,
                    img:"./img/chabei.jpg"
                },
                dataType:'json'
            })
        console.log(data.code)
            if(data.code==1){
                
                alert('商品添加成功')
            }
        })