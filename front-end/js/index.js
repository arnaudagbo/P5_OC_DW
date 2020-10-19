let name = document.getElementById('name');
function getCamera(){
    fetch("http://localhost:3000/api/cameras")
    .then(function(res){
        return res.json()
    })
    .then((data)=>{data.forEach(item=>console.log(item))})
}
getCamera()

